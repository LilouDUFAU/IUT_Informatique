# Fiche de Révision : Mise en Place des VLANs avec Marionnet

## 1. Définition et Utilité des VLANs
### Qu'est-ce qu'un VLAN ?
Un VLAN (Virtual Local Area Network) est un réseau logique qui segmente un réseau physique en plusieurs sous-réseaux indépendants.

### Pourquoi utiliser des VLANs ?
- Séparer les domaines de diffusion pour limiter le trafic inutile.
- Améliorer la sécurité en isolant des groupes de machines.
- Faciliter la gestion du réseau sans changer la structure physique.
- Optimiser les performances du réseau.

## 2. Matériel Utilisé
- Switchs virtuels VDE (Marionnet)
- Routeur RX
- PC sous Linux Debian

## 3. Schéma de Configuration des VLANs
| VLAN | Adresse Réseau | Passerelle |
|------|--------------|------------|
| VLAN 10 | 172.17.10.0/24 | 172.17.10.1 |
| VLAN 20 | 172.17.20.0/24 | 172.17.20.1 |
| VLAN 30 | 172.17.30.0/24 | 172.17.30.1 |

### Attribution des Ports sur les Switchs
| Ports | Affectation |
|-------|------------|
| 1 et 2 | Trunk 802.1Q |
| 3 et 4 | VLAN 10 |
| 5 et 6 | VLAN 20 |
| 7 et 8 | VLAN 30 |

## 4. Configuration des VLANs
### 4.1 Création des VLANs sur les Switchs (À faire sur chaque switch : S1, S2, S3)
1. Ouvrir le terminal VDE du switch.
2. Créer les VLANs :
   ```bash
   vlan/create 10
   vlan/create 20
   vlan/create 30
   ```
3. Associer les ports aux VLANs :
   ```bash
   port/setvlan 3 10
   port/setvlan 4 10
   port/setvlan 5 20
   port/setvlan 6 20
   port/setvlan 7 30
   port/setvlan 8 30
   ```
4. Vérifier la configuration :
   ```bash
   vlan/print
   ```

### 4.2 Configuration des Ports Trunk (À faire sur chaque switch : S1, S2, S3)
1. Ajouter les VLANs aux ports Trunk :
   ```bash
   vlan/addport 10 1
   vlan/addport 20 1
   vlan/addport 30 1
   vlan/addport 10 2
   vlan/addport 20 2
   vlan/addport 30 2
   ```

## 5. Configuration des PC (À faire sur chaque PC concerné)
1. Affecter les adresses IP aux PC :
   ```bash
   ifconfig eth0 172.17.10.X/24 up  # Sur PC1 et PC4 (VLAN 10)
   ifconfig eth0 172.17.20.X/24 up  # Sur PC2 et PC5 (VLAN 20)
   ifconfig eth0 172.17.30.X/24 up  # Sur PC3 et PC6 (VLAN 30)
   ```
2. Définir la passerelle par défaut :
   ```bash
   route add default gw 172.17.10.1  # Pour les PC du VLAN 10
   route add default gw 172.17.20.1  # Pour les PC du VLAN 20
   route add default gw 172.17.30.1  # Pour les PC du VLAN 30
   ```

## 6. Configuration du Routeur RX (À faire sur RX)
1. Activer le routage IP :
   ```bash
   echo 1 > /proc/sys/net/ipv4/ip_forward
   ```
2. Configurer les interfaces réseau du routeur :
   ```bash
   ifconfig eth0 172.17.10.1/24 up
   ifconfig eth1 172.17.20.1/24 up
   ifconfig eth2 172.17.30.1/24 up
   ```

## 7. Test de Connectivité (À faire sur les PC concernés)
1. Tester la communication entre deux PC d’un même VLAN :
   ```bash
   ping 172.17.10.2  # Depuis PC1 vers PC4
   ```
2. Tester la communication entre VLANs avant activation du routage (échec attendu).
3. Activer le routage et tester à nouveau la connectivité entre VLANs.

## 8. Configuration et Analyse du Trafic avec Wireshark (À faire sur SNIFER)
1. Sur SNIFER, ajouter les VLANs :
   ```bash
   vconfig add eth0 10
   vconfig add eth0 20
   vconfig add eth0 30
   ```
2. Activer les interfaces réseau :
   ```bash
   ifconfig eth0 up
   ifconfig eth0.10 up
   ifconfig eth0.20 up
   ifconfig eth0.30 up
   ```
3. Affecter des adresses IP aux sous-interfaces :
   ```bash
   ifconfig eth0.10 172.17.10.254/24
   ifconfig eth0.20 172.17.20.254/24
   ifconfig eth0.30 172.17.30.254/24
   ```
4. Vérifier la configuration :
   ```bash
   ifconfig -a
   ```
5. Lancer Wireshark pour capturer le trafic VLAN.

## 9. Sauvegarde de la Configuration
- **Switchs** : Copier la configuration dans un fichier texte et la recharger après redémarrage.
- **PCs et Routeur** : Ajouter les commandes réseau dans `/etc/network/interfaces` ou `/etc/rc.local`.
- **SNIFER** : Ajouter les commandes VLAN dans `/etc/rc.local`.

---
### Cette fiche résume les étapes essentielles pour configurer des VLANs avec Marionnet.

