# Fiche de Révision : Mise en Place d’un Serveur FTP

## 1. Objectif
Mettre en place un serveur FTP sécurisé sous Debian avec ProFTP, en configurant les accès utilisateurs et le mode anonymous.

## 2. Configuration Réseau
| Machine  | Adresse IP        |
|----------|------------------|
| SERVEUR  | 192.168.1.11     |
| CLIENT   | 192.168.1.21     |
| SNIFER   | 192.168.1.31     |
| PASSERELLE (G1) | 192.168.1.2  |

## 3. Installation du Serveur FTP (Sur SERVEUR)
1. **Configurer la route par défaut**
   ```bash
   SERVEUR:~# route add default gw 192.168.1.2
   ```
2. **Télécharger et installer ProFTP**
   ```bash
   SERVEUR:~# cd /tmp
   SERVEUR:~# wget http://10.3.224.215/R4D.08/proftpd-1.3.3.tar.gz
   SERVEUR:~# tar xvf proftpd-1.3.3.tar.gz
   SERVEUR:~# cd proftpd-1.3.3
   SERVEUR:~# ./configure --prefix=/usr
   SERVEUR:~# make
   SERVEUR:~# make install
   ```
3. **Démarrer le serveur**
   ```bash
   SERVEUR:~# /usr/sbin/proftpd
   ```
4. **Vérifier le processus**
   ```bash
   SERVEUR:~# ps -ef | grep proftpd
   ```

## 4. Ajout d’un Utilisateur FTP (Sur SERVEUR)
1. **Créer un utilisateur FTP avec un répertoire dédié**
   ```bash
   SERVEUR:~# useradd test -d /home/test -m
   SERVEUR:~# passwd test
   ```
2. **Connexion depuis le CLIENT**
   ```bash
   CLIENT:~# ftp 192.168.1.11
   ```

## 5. Transfert de Fichiers (Sur CLIENT)
1. **Envoyer un fichier vers le serveur**
   ```bash
   ftp> put fichier.txt
   ```
2. **Télécharger un fichier depuis le serveur**
   ```bash
   ftp> get fichier.txt
   ```

## 6. Logs et Surveillance (Sur SERVEUR)
1. **Démarrer le service de logs**
   ```bash
   SERVEUR:~# /etc/init.d/rsyslog start
   ```
2. **Consulter les logs FTP**
   ```bash
   SERVEUR:~# tail -20 /var/log/xferlog
   ```
3. **Surveiller les connexions en temps réel**
   ```bash
   SERVEUR:~# ftpwho
   SERVEUR:~# ftptop
   ```

## 7. Sécurisation du Serveur FTP (Sur SERVEUR)
1. **Restreindre l’accès au répertoire personnel**
   Ajouter la ligne suivante dans `/usr/etc/proftpd.conf` :
   ```
   DefaultRoot ~
   ```
2. **Interdire l’accès à certains utilisateurs**
   Ajouter les utilisateurs à `/etc/ftpusers`.
3. **Redémarrer le serveur après modification**
   ```bash
   SERVEUR:~# kill -9 $(pidof proftpd)
   SERVEUR:~# /usr/sbin/proftpd
   ```

## 8. Configuration de l’Accès Anonymous (Sur SERVEUR)
1. **Créer l’utilisateur et les répertoires**
   ```bash
   SERVEUR:~# useradd -d /var/ftp -s /sbin/nologin ftp
   SERVEUR:~# mkdir -p /var/ftp/pub /var/ftp/depot
   ```
2. **Configurer ProFTP pour l’anonymous**
   Ajouter dans `/usr/etc/proftpd.conf` :
   ```
   <Anonymous ~ftp>
   User ftp
   Group ftp
   UserAlias anonymous ftp
   MaxClients 10 "Désolé, maximum %m connexions !"
   RequireValidShell off
   AnonRequirePassword off
   <Directory /var/ftp>
      <Limit WRITE>
         DenyAll
      </Limit>
   </Directory>
   <Directory /var/ftp/depot>
      <Limit READ>
         DenyAll
      </Limit>
      <Limit STOR>
         AllowAll
      </Limit>
   </Directory>
   </Anonymous>
   ```
3. **Redémarrer le serveur**
   ```bash
   SERVEUR:~# kill -9 $(pidof proftpd)
   SERVEUR:~# /usr/sbin/proftpd
   ```
4. **Tester l’accès anonymous depuis CLIENT**
   ```bash
   CLIENT:~# ftp 192.168.1.11
   ftp> user anonymous
   ftp> ls
   ```

## 9. Capture et Analyse du Trafic FTP (Sur SNIFER)
1. **Lancer Wireshark**
   ```bash
   SNIFER:~# wireshark &
   ```
2. **Analyser le trafic FTP (connexion, transferts, commandes)**

