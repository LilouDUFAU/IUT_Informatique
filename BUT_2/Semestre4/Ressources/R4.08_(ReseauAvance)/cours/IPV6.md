Voici une fiche de révision détaillée sur la mise en place de l'IPv6 à partir du TP que tu m'as fourni :

---

# **Fiche de Révision : Mise en Place d'IPv6**

## **1. Objectif**
Configurer un réseau local avec IPv6, effectuer des tests de connectivité et configurer un routage IPv6. Passer à un mode IPv6-only pour certaines machines et tester les configurations avec `netcat`.

## **2. Réseau et Configuration des Machines**
- **Machines** : m1, m2, m3, m4
  - m1 et m2 sont dans le réseau LAN1 : **10.0.2.0/24**
  - m2, m3, et m4 sont dans le réseau LAN2 : **10.0.3.0/24**
  - m2 est équipée de deux interfaces : eth0 (10.0.2.x) et eth1 (10.0.3.x)
- **Routage IPv4** :
  - Activer le routage IPv4 sur m2 avec la commande :  
    ```bash
    echo 1 > /proc/sys/net/ipv4/ip_forward
    ```
- **Routage IPv6** :
  - Activer le routage IPv6 sur m2 avec la commande :  
    ```bash
    echo 1 > /proc/sys/net/ipv6/conf/all/forwarding
    ```

---

## **3. Installation de Netcat IPv6**
1. **Télécharger et Installer netcat_v6 sur toutes les machines** :
   - Sur chaque machine (m1, m2, m3, m4), exécuter les commandes suivantes :
   ```bash
   wget http://10.3.224.215/R4D.08/nc6-1.0.tar.gz
   tar xvf nc6-1.0.tar.gz
   cd nc6-1.0
   ./configure && make && make install
   ```

---

## **4. Configuration IPv6**
- **LAN1** (2001:db8::/32) et **LAN2** (2001:db9::/32)
  - Utiliser la convention où le dernier octet des adresses IPv6 des machines est une valeur hexadécimale.

### **a. Assignation des Adresses IPv6 sur m2 (Routeur)**

1. **Configurer eth0 pour LAN1** (2001:db8::/32) sur m2 :
   ```bash
   ifconfig eth0 inet6 add 2001:db8::11/32
   ```

2. **Configurer eth1 pour LAN2** (2001:db9::/32) sur m2 :
   ```bash
   ifconfig eth1 inet6 add 2001:db9::11/32
   ```

### **b. Configurer les adresses IPv6 pour les autres machines**
- **m1 (LAN1)** :
   ```bash
   ifconfig eth0 inet6 add 2001:db8::1/32
   ```

- **m3 (LAN2)** :
   ```bash
   ifconfig eth0 inet6 add 2001:db9::13/32
   ```

- **m4 (LAN2)** :
   ```bash
   ifconfig eth0 inet6 add 2001:db9::14/32
   ```

---

## **5. Configuration des Routes IPv6**

1. **Ajouter la route sur m2 pour LAN1** :
   ```bash
   route -A inet6 add 2001:db8::/32 gw 2001:db9::11
   ```

2. **Ajouter la route sur m2 pour LAN2** :
   ```bash
   route -A inet6 add 2001:db9::/32 gw 2001:db8::11
   ```

---

## **6. Tests de Connectivité IPv6**

- **Tester la connectivité IPv6 entre les machines** en utilisant `ping6` :
  - **Depuis m1 vers m3** :
    ```bash
    ping6 2001:db9::13
    ```

  - **Depuis m3 vers m1** :
    ```bash
    ping6 2001:db8::1
    ```

- **Test entre m1 et m4** :
  ```bash
  ping6 2001:db9::14
  ```

---

## **7. Passage en Mode IPv6 Only sur certaines Machines**

1. **Supprimer l'adresse IPv6 de m1** :
   ```bash
   ifconfig eth0 inet6 del 2001:db8::1
   ```

2. **Supprimer l'adresse IPv4 de m4 pour un mode IPv6-only** :
   ```bash
   ifconfig eth0 0.0.0.0
   ```

---

## **8. Tests de Connectivité avec Netcat**

- **Test de la pile IPv4 (m1 -> m3)** :
  1. Lancer un serveur TCP/IPv4 avec Netcat sur **m1** :
     ```bash
     nc -l -p 88
     ```

  2. Lancer un client Netcat sur **m3** :
     ```bash
     nc 10.0.2.11 88
     ```

  3. Tester une tentative de connexion **IPv6-only depuis m4** :
     ```bash
     nc6 2001:db8::1 88
     ```

  **Vérification avec Wireshark** : Sur m2, utiliser Wireshark pour vérifier si le trafic passe par le routeur en IPv4 ou IPv6 selon le client.

---

## **9. Test de Double Pile IPv4/IPv6**

1. **Lancer un serveur TCP/IPv6 sur m3** :
   ```bash
   nc6 -l -p 886
   ```

2. **Lancer un client IPv6 depuis m4** :
   ```bash
   nc6 2001:db9::13 886
   ```

3. **Lancer un serveur TCP/IPv4 sur m3** :
   ```bash
   nc -l -p 884
   ```

4. **Lancer un client IPv4 depuis m1** :
   ```bash
   nc 10.0.3.13 884
   ```

  **Vérification avec Wireshark** : Utiliser Wireshark pour vérifier le protocole utilisé (IPv4 ou IPv6) pour chaque commande.

---

## **10. Introduction à l'Adressage IPv6**

### **a. Structure d'une Adresse IPv6**
Une adresse IPv6 est composée de 128 bits, répartis en 8 groupes de 4 chiffres hexadécimaux séparés par des deux-points :
```
2001:db8:0:85a3::ac1f:8001
```

- **Notation** :
  - Les zéros non significatifs peuvent être omis.
  - Une séquence de zéros consécutifs peut être abrégée avec `::` (une seule fois dans l'adresse).
  
### **b. Types d'Adresses IPv6**
- **Unicast** : Communication point-à-point.
- **Anycast** : Adresse partagée par plusieurs interfaces.
- **Multicast** : Communication avec un groupe d'hôtes.

---

## **11. Résumé des Commandes Importantes**

| **Commande**                               | **Description**                                          | **Machine**  |
|--------------------------------------------|----------------------------------------------------------|--------------|
| `echo 1 > /proc/sys/net/ipv4/ip_forward`   | Activer le routage IPv4                                  | m2           |
| `echo 1 > /proc/sys/net/ipv6/conf/all/forwarding` | Activer le routage IPv6                                  | m2           |
| `ifconfig ethX inet6 add <adresse>/prefix` | Ajouter une adresse IPv6 à une interface réseau           | m1, m2, m3, m4 |
| `route -A inet6 add <réseau> gw <passerelle>` | Ajouter une route IPv6                                   | m2           |
| `ping6 <adresse>`                          | Tester la connectivité IPv6                              | m1, m3, m4   |
| `nc -l -p <port>`                          | Lancer un serveur TCP/IPv4                               | m1, m3       |
| `nc6 <adresse> <port>`                     | Lancer un client TCP/IPv6                                | m4           |

---

**Conseils** :
- Utilise Wireshark pour analyser le trafic réseau et confirmer l'usage de l'IPv4 ou IPv6.
- Pense à tester les routes et adresses après chaque modification.

---

J'espère que cette fiche te sera utile ! N'hésite pas à demander des précisions si tu en as besoin.