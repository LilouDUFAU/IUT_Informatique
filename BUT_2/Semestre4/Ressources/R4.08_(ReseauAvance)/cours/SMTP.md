### Fiche de révision - TP Mise en œuvre d’un serveur de messagerie électronique (SMTP)

#### 1. **Câblage et configuration du réseau**
- **Réseau à configurer** : `192.168.1.0/24`
- **Adresses IP des hôtes** :
  - `m1`: 192.168.1.10
  - `m2`: 192.168.1.11
  - `ns1`: 192.168.1.100
  - `ns2`: 192.168.1.101
  - `mail`: 192.168.1.110
  - `G1`: 192.168.1.2 (Passerelle)
  
- **Configuration DNS** sur chaque hôte :
  Éditez le fichier `/etc/resolv.conf` de chaque machine et ajoutez les lignes suivantes :
  ```bash
  domain iutbay.org
  search iutbay.org
  nameserver 192.168.1.100
  nameserver 192.168.1.101
  ```

- **Démarrer les services de logs** sur les serveurs (`mail`, `ns1`, `ns2`) :
  ```bash
  sudo /etc/init.d/rsyslog start
  ```

- **Test du réseau** :
  - Vérification de la connexion réseau avec `ping`.
  - Vérification de la résolution DNS avec `nslookup`.

---

#### 2. **Configuration du service SMTP avec Postfix**

- **Configuration de Postfix** sur la machine `mail` :
  ```bash
  sudo dpkg-reconfigure postfix
  ```
  Répondez aux questions avec les informations suivantes :
  - Type de configuration : **Internet Site**
  - System mail name : **iutbay.org**
  - Root and postmaster mail recipient: **vide**
  - Other destinations to accept mail for: **iutbay.org, mail, localhost.localdomain, localhost**
  - Force synchronous updates on mail queue: **No**
  - Local networks: **192.168.1.0/24**
  - Mailbox size limit (bytes): **0**
  - Local address extension character: **+**
  - Internet protocols to use: **ipv4**

- **Création des comptes utilisateurs** :
  ```bash
  sudo useradd ldupont -d /home/ldupont -m
  sudo passwd ldupont
  sudo useradd adurand -d /home/adurand -m
  sudo passwd adurand
  ```

- **Test SMTP avec `telnet` depuis m1** :
  ```bash
  telnet smtp.iutbay.org 25
  ```

  Exemple de session SMTP :
  ```
  MAIL FROM: <adurand@iutbay.org>
  RCPT TO: <ldupont@iutbay.org>
  DATA
  Hello world
  .
  QUIT
  ```

- **Vérification des logs de mail** :
  ```bash
  tail -50 /var/log/mail.log
  ```

---

#### 3. **Configuration des alias virtuels Postfix**

- **Création d’un fichier d’alias virtuel** `/etc/postfix/virtual` :
  ```bash
  leon.dupont ldupont
  armand.durand adurand
  ```

- **Compilation des alias** :
  ```bash
  sudo postmap /etc/postfix/virtual
  ```

- **Modification de `/etc/postfix/main.cf`** :
  Ajouter la ligne suivante :
  ```bash
  virtual_alias_maps = hash:/etc/postfix/virtual
  ```

- **Recharge de la configuration Postfix** :
  ```bash
  sudo /etc/init.d/postfix reload
  ```

- **Test avec `telnet`** depuis m1 en utilisant les alias :
  ```bash
  telnet smtp.iutbay.org 25
  MAIL FROM: <armand.durand@iutbay.org>
  RCPT TO: <leon.dupont@iutbay.org>
  DATA
  Hello world
  .
  QUIT
  ```

- **Vérification des logs** :
  ```bash
  tail -50 /var/log/mail.log
  ```

---

#### 4. **Configuration du service POP avec Qpopper**

- **Récupérer les sources de Qpopper** :
  ```bash
  wget http://10.3.224.215/R4D.08/qpopper4.1.0.tar.gz -P /tmp
  ```

- **Décompresser et installer Qpopper** :
  ```bash
  cd /tmp
  tar xvf qpopper4.1.0.tar.gz
  cd qpopper4.1.0
  ./configure --prefix=/usr --enable-standalone
  make
  sudo make install
  ```

- **Configuration de Qpopper** (`/etc/qpopper.conf`) :
  ```bash
  set debug = false
  set spool-dir = /var/spool/mail/
  set temp-dir = /var/spool/mail/
  set downcase-user = true
  set trim-domain = true
  set statistics = true
  ```

- **Démarrer le service POP** :
  ```bash
  sudo /usr/sbin/popper
  ```

- **Vérification dans les logs** :
  ```bash
  tail -f /var/log/mail.log
  ```

---

#### 5. **Installation et configuration du client Sylpheed**

- **Récupérer et installer Sylpheed sur m1** :
  ```bash
  wget http://10.3.224.215/R4D.08/sylpheed-3.5.1.tar.gz -P /tmp
  cd /tmp
  tar xvf sylpheed-3.5.1.tar.gz
  cd sylpheed-3.5.1
  ./configure --prefix=/usr
  make
  sudo make install
  ```

- **Configuration de Sylpheed** :
  - Lancez Sylpheed et configurez-le pour utiliser votre serveur SMTP et POP.

- **Vérification de la réception et de l’envoi des messages** :
  - Assurez-vous que les messages envoyés depuis `armand.durand@iutbay.org` arrivent dans la boîte de réception de `leon.dupont@iutbay.org`.

---

#### 6. **Configuration avancée anti-relayage**

- **Ajouter des restrictions HELO dans `/etc/postfix/main.cf`** :
  ```bash
  smtpd_helo_restrictions = reject_non_fqdn_hostname
  ```

  - Test : Envoi de la commande HELO avec un nom non qualifié (`helo toto`).

- **Filtrage du contenu dans `/etc/postfix/main.cf`** :
  Ajouter :
  ```bash
  header_checks = regexp:/etc/postfix/header_checks
  ```

  - Contenu de `/etc/postfix/header_checks` :
  ```bash
  /Covid/ REJECT
  ```

  - Relancez Postfix :
  ```bash
  sudo /etc/init.d/postfix reload
  ```

  - Test : Envoyez un e-mail avec le sujet "Covid".

- **Blocage de l’envoi depuis `m1`** :
  Ajouter dans `/etc/postfix/main.cf` :
  ```bash
  smtpd_client_restrictions = check_client_access hash:/etc/postfix/access
  ```

  - Contenu de `/etc/postfix/access` :
  ```bash
  m1.iutbay.org REJECT
  ```

  - Recompiler les fichiers d’accès :
  ```bash
  sudo postmap /etc/postfix/access
  sudo /etc/init.d/postfix reload
  ```

  - Test : Essayez `telnet` depuis m1.

---

#### 7. **Configuration avancée pour relayer des mails vers un autre serveur**

- **Relais des mails destinés à `@iutbayonne.univ-pau.fr`** :
  Modifiez `/etc/postfix/main.cf` :
  ```bash
  relay_domains = iutbayonne.univ-pau.fr
  relayhost = 10.3.224.215
  ```

- **Relancez Postfix** :
  ```bash
  sudo /etc/init.d/postfix reload
  ```

- **Test d'envoi vers l'adresse de l'IUT** :
  - Envoyez un e-mail vers votre adresse `@iutbayonne.univ-pau.fr`.
  - Vérifiez la bonne réception ou les erreurs éventuelles.

---

### Conclusion :
Cette fiche couvre les étapes de configuration d'un serveur de messagerie électronique avec SMTP, POP, et des configurations avancées telles que l'anti-relayage et le filtrage des contenus. Utilisez les commandes dans les répertoires appropriés et suivez les tests pour vérifier le bon fonctionnement des services.