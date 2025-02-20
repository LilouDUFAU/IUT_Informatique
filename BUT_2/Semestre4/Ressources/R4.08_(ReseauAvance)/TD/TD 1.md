Rappel :
Le modèle OSI (Open Systems Interconnection) est un modèle conceptuel qui décrit la communication entre les systèmes en 7 couches distinctes.
1. **Couche Physique** :
    - Gère la transmission des bits sur le support physique (câbles, fibres optiques, ondes radio).
    - Exemples : Ethernet, Wi-Fi, USB.
2. **Couche Liaison de Données** :
    - Assure la communication entre deux machines directement connectées.
    - Gère le contrôle d’erreur et l’accès au média.
    - Exemples : Ethernet, Wi-Fi (802.11), PPP.
3. **Couche Réseau** :
    - Responsable du routage des paquets entre différents réseaux.
    - Gère les adresses IP et le contrôle de congestion.
    - Exemples : IP (Internet Protocol), ICMP, ARP.
4. **Couche Transport** :
    - Assure une transmission fiable des données entre les hôtes.
    - Gère le contrôle de flux et la segmentation des données.
    - Exemples : TCP, UDP.
5. **Couche Session** :
    - Gère l’établissement, la maintenance et la terminaison des sessions de communication.
    - Exemples : NetBIOS, RPC.
6. **Couche Présentation** :
    - S’occupe du formatage, du chiffrement et de la compression des données.
    - Exemples : SSL/TLS, JPEG, ASCII.
7. **Couche Application** :
    - Interface directe avec l’utilisateur et les applications.
    - Gère les protocoles applicatifs.
    - Exemples : HTTP, FTP, SMTP, DNS.


---
## **Cours : Configuration de VLANs sous Debian avec Commandes**
### **I. Introduction**
- **Objectif :**  
    Comprendre comment créer, activer et configurer des VLANs sur Debian en utilisant des interfaces virtuelles associées à une interface physique.
    
- **Contexte :**  
    Les VLANs (Virtual LANs) permettent de segmenter un réseau en plusieurs réseaux logiques, améliorant la gestion, la sécurité et la performance.

---
### **II. Création et Configuration d’un VLAN**
#### **1. Création du VLAN**
- **Commande principale :**
    ```bash
    vconfig add eth0 10
    ```
- **Détails et explications :**
    - `vconfig` : Outil de gestion des VLANs sous Linux.
    - `add` : Option pour ajouter un VLAN.
    - `eth0` : Interface physique sur laquelle le VLAN sera créé.
    - `10` : Identifiant (ID) du VLAN.
- **Commande complémentaire pour vérifier les VLANs créés :**
    ```bash
    vconfig show
    ```
    - **Explication :**  
        Affiche la liste des VLANs configurés sur le système, permettant de vérifier que le VLAN 10 est bien créé sur `eth0`.

---
#### **2. Activation des Interfaces**
- **Activation de l’interface physique :**
    - **Commande :**    
        ```bash
    ifconfig eth0 up
        ```    
    - **Explication :**  
        Met l’interface `eth0` en état opérationnel afin qu’elle puisse transmettre le trafic.
- **Activation de la sous-interface VLAN :**
    - **Commande :**
        ```bash
    ifconfig eth0.10 up
        ```
    - **Explication :**  
        La sous-interface `eth0.10` est liée au VLAN ID 10. Cette commande permet de rendre cette interface active pour le trafic spécifique au VLAN.
- **Commande alternative (pour les distributions utilisant `ip` plutôt que `ifconfig`) :**
    - Pour activer l’interface physique :
        ```bash
    ip link set eth0 up
        ```
    - Pour activer l’interface VLAN :
        ```bash
    ip link set eth0.10 up
        ```

---
#### **3. Affectation d’une Adresse IP**
- **Commande principale avec ifconfig :**
    ```bash
    ifconfig eth0.10 172.17.10.254/24
    ```
- **Détails :**
    - Affecte l’adresse IP `172.17.10.254` avec un masque de sous-réseau `/24` à la sous-interface `eth0.10`.
    - **Remarque :**  
        Chaque interface virtuelle (chaque VLAN) doit disposer d’une adresse IP unique pour permettre son identification et un routage correct.
- **Commande alternative avec ip :**
    ```bash
    ip addr add 172.17.10.254/24 dev eth0.10
    ```
    - **Explication :**  
        Ajoute l’adresse IP spécifiée à l’interface `eth0.10`.
- **Pour vérifier la configuration IP :**
    - Avec ifconfig :
        ```bash
    ifconfig eth0.10
        ```
    - Avec ip :
        ```bash
    ip addr show eth0.10
        ```

---
### **III. Points Clés et Commandes Complémentaires**
- **Multiples Interfaces Virtuelles :**
    - **Principe :**  
        Plusieurs VLANs peuvent être créés sur une même interface physique (ex. `eth0`).
    - **Exemple de création d’un deuxième VLAN (ID 20) :**   
        ```bash
        vconfig add eth0 20
        ifconfig eth0.20 up
        ifconfig eth0.20 172.17.20.254/24
        ```
- **Suppression d’un VLAN :**
    - **Commande :**
        ```bash
    vconfig rem eth0.10
        ```
    - **Explication :**  
        Supprime la sous-interface associée au VLAN 10.
    - **Note :**  
        Assurez-vous que l’interface est désactivée avant de la supprimer.
- **Liste des interfaces réseau :**
    - **Commande :**
        ```bash
    ifconfig -a
        ```
    - **Ou avec ip :**
        ```bash
    ip link show
        ```
    - **Explication :**  
        Affiche toutes les interfaces (physiques et virtuelles) présentes sur le système.
- **Redémarrage du service réseau (si nécessaire) :**
    - Sur Debian, selon la version :
        ```bash
    /etc/init.d/networking restart
        ```
        ou
        ```bash
        systemctl restart networking
        ```
    - **Explication :**  
        Permet de redémarrer la configuration réseau pour appliquer certains changements.

---
### **IV. Conclusion**
- **Récapitulatif des étapes et commandes clés :**
    1. **Création du VLAN :**
        - `vconfig add eth0 10`
        - Vérification : `vconfig show`
    2. **Activation des Interfaces :**
        - `ifconfig eth0 up` (ou `ip link set eth0 up`)
        - `ifconfig eth0.10 up` (ou `ip link set eth0.10 up`)
    3. **Affectation d’une Adresse IP :**
        - `ifconfig eth0.10 172.17.10.254/24`  
            ou  
            `ip addr add 172.17.10.254/24 dev eth0.10`
    4. **Commandes complémentaires :**
        - Vérification des interfaces : `ifconfig -a` ou `ip link show`
        - Suppression d’un VLAN : `vconfig rem eth0.10`
        - Redémarrage du service réseau : `/etc/init.d/networking restart` ou `systemctl restart networking`
- **Application Pratique :**
    - Ces commandes te permettent de créer, activer, et configurer des VLANs sur une machine Debian.
    - La méthode peut être adaptée à d’autres distributions Linux en fonction des outils disponibles.




