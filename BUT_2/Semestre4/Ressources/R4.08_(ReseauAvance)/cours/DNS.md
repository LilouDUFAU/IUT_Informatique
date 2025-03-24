# Fiche de Révision : Mise en Place d’un Serveur DNS

## 1. Objectif
Configurer un serveur DNS sous Debian avec Bind9 pour gérer la résolution de noms et les requêtes DNS.

## 2. Configuration Réseau
| Machine  | Adresse IP        |
|----------|------------------|
| m1       | 192.168.1.10     |
| m2       | 192.168.1.11     |
| ns1 (DNS primaire)  | 192.168.1.100 |
| ns2 (DNS secondaire) | 192.168.1.101 |
| mail     | 192.168.1.110    |
| G1 (Passerelle) | 192.168.1.2 |

## 3. Configuration des Hôtes
1. **Modifier le fichier resolv.conf sur chaque machine**
   ```bash
   nano /etc/resolv.conf
   ```
   Ajouter :
   ```
   domain iutbay.org
   search iutbay.org
   nameserver 192.168.1.100
   nameserver 192.168.1.101
   ```
2. **Vérifier la connectivité entre les machines**
   ```bash
   ping 192.168.1.100
   ```

## 4. Configuration du Serveur DNS Primaire (ns1)
1. **Installer Bind9**
   ```bash
   apt update && apt install bind9 -y
   ```
2. **Éditer le fichier de configuration Bind**
   ```bash
   nano /etc/bind/named.conf
   ```
   Ajouter :
   ```
   zone "iutbay.org" {
       type master;
       file "/etc/bind/db.iutbay.org";
   };

   zone "1.168.192.in-addr.arpa" {
       type master;
       file "/etc/bind/db.iutbay.org.rev";
   };
   ```
3. **Créer le fichier de zone directe**
   ```bash
   cp /etc/bind/db.empty /etc/bind/db.iutbay.org
   nano /etc/bind/db.iutbay.org
   ```
   Contenu :
   ```
   $ORIGIN .
   $TTL 86400
   iutbay.org. IN SOA ns1.iutbay.org. root.iutbay.org. (
       2024032401 ; Serial
       604800 ; Refresh
       86400 ; Retry
       2419200 ; Expire
       86400 ) ; Negative Cache TTL
   ;
   IN NS ns1.iutbay.org.
   IN NS ns2.iutbay.org.
   IN MX 10 mail.iutbay.org.
   ;
   $ORIGIN iutbay.org.
   ns1 IN A 192.168.1.100
   ns2 IN A 192.168.1.101
   mail IN A 192.168.1.110
   m1 IN A 192.168.1.10
   m2 IN A 192.168.1.11
   ```
4. **Créer le fichier de zone inverse**
   ```bash
   cp /etc/bind/db.empty /etc/bind/db.iutbay.org.rev
   nano /etc/bind/db.iutbay.org.rev
   ```
   Contenu :
   ```
   $ORIGIN .
   $TTL 86400
   1.168.192.in-addr.arpa. IN SOA ns1.iutbay.org. root.iutbay.org. (
       2024032401 ; Serial
       604800 ; Refresh
       86400 ; Retry
       2419200 ; Expire
       86400 ) ; Negative Cache TTL
   ;
   IN NS ns1.iutbay.org.
   IN NS ns2.iutbay.org.
   ;
   100 IN PTR ns1.iutbay.org.
   101 IN PTR ns2.iutbay.org.
   110 IN PTR mail.iutbay.org.
   10 IN PTR m1.iutbay.org.
   11 IN PTR m2.iutbay.org.
   ```
5. **Démarrer le service DNS**
   ```bash
   systemctl restart bind9
   systemctl enable bind9
   ```

## 5. Configuration du Serveur DNS Secondaire (ns2)
1. **Modifier les permissions du répertoire Bind**
   ```bash
   chmod g+w /etc/bind
   ```
2. **Éditer le fichier named.conf sur ns1 pour autoriser le transfert de zone**
   ```bash
   nano /etc/bind/named.conf
   ```
   Ajouter dans chaque zone :
   ```
   allow-transfer { 192.168.1.101; };
   ```
3. **Configurer ns2 en tant que serveur esclave**
   ```bash
   nano /etc/bind/named.conf
   ```
   Ajouter :
   ```
   zone "iutbay.org" {
       type slave;
       file "/etc/bind/db.iutbay.org";
       masters { 192.168.1.100; };
   };
   
   zone "1.168.192.in-addr.arpa" {
       type slave;
       file "/etc/bind/db.iutbay.org.rev";
       masters { 192.168.1.100; };
   };
   ```
4. **Démarrer le service DNS sur ns2**
   ```bash
   systemctl restart bind9
   ```

## 6. Vérifications et Tests (Sur m1)
1. **Tester la résolution de noms**
   ```bash
   nslookup smtp.iutbay.org
   dig @ns1.iutbay.org pop.iutbay.org
   ```
2. **Tester le transfert de zones**
   ```bash
   dig -t AXFR iutbay.org @ns1.iutbay.org
   ```
3. **Tester la reprise de ns2 après l’arrêt de ns1**
   ```bash
   systemctl stop bind9 (sur ns1)
   nslookup smtp.iutbay.org (depuis m1)
   ```

## 7. Ajout d’un Nouvel Hôte (m3)
1. **Modifier le fichier de zone directe sur ns1**
   ```bash
   nano /etc/bind/db.iutbay.org
   ```
   Ajouter :
   ```
   m3 IN A 192.168.1.12
   ```
2. **Modifier le fichier de zone inverse**
   ```bash
   nano /etc/bind/db.iutbay.org.rev
   ```
   Ajouter :
   ```
   12 IN PTR m3.iutbay.org.
   ```
3. **Mettre à jour le numéro de série et redémarrer Bind9**
   ```bash
   systemctl restart bind9
   ```
4. **Vérifier la mise à jour sur ns2**
   ```bash
   dig @ns2.iutba