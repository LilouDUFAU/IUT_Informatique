## TP1 (VLAN)

___
## TP2 (DNS)
**ns1/2/mail :** 
```bash
/etc/init.d/rsyslog start
```

**Sur toutes les machines :**
```bash 
	nano /etc/resolv.conf
		domain iutbay.org
		search iutbay.org
		nameserver 192.168.1.100 #ns1
		nameserver 192.168.1.101 #ns2
```

Sur ns1 :
```bash
nano /etc/bind/named.conf 
	zone "iutbay.org" { 
		type master; 
		file "/etc/bind/db.iutbay.org"; 
	}; 
	
	zone "1.168.192.in-addr.arpa" { 
		type master; 
		file "/etc/bind/db.iutbay.org.rev"; 
	};
```

```bash
cp /etc/bind/db.empty /etc/bind/iutbay.org
nano /etc/bind/iutbay.org
	$ORIGIN . 
	$TTL 86400 
	iutbay.org. IN SOA ns1.iutbay.org. root.iutbay.org. ( 
		2022021401 ; Serial 
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
	; 
	ns1 IN A 192.168.1.100 
	ns2 IN A 192.168.1.101 
	mail IN A 192.168.1.110 
	smtp IN CNAME mail 
	pop IN CNAME mail 
	m1 IN A 192.168.1.10 
	m2 IN A 192.168.1.11
```

```bash
cp /etc/bind/db.empty /etc/bind/db.iutbay.org.rev
nano /etc/bind/db.iutbay.org.rev
	$ORIGIN . 
	$TTL 86400 
	1.168.192.in-addr.arpa. IN SOA ns1.iutbay.org. root.iutbay.org. ( 
		2017012001 ; Serial 
		604800 ; Refresh 
		86400 ; Retry 
		2419200 ; Expire 
		86400 ) ; Negative Cache TTL 
	; 
	1.168.192.in-addr.arpa. IN NS ns1.iutbay.org. 
	1.168.192.in-addr.arpa. IN NS ns2.iutbay.org. 
	; 
	$ORIGIN 1.168.192.in-addr.arpa. 
	; 
	100 IN PTR ns1.iutbay.org. 
	101 IN PTR ns2.iutbay.org. 
	110 IN PTR mail.iutbay.org. 
	10 IN PTR m1.iutbay.org. 
	11 IN PTR m2.iutbay.org
```

Test ns1 sur ns1:
```bash
/etc/init.d/bind9 start | restart | stop
```

**-> démarrage ok**

Test ns1 sur m1:
```bash
nslookup m1 # -> doit renvoyer @IP_m1
nslookup @IP_m1 # -> doit renvoyer m1
```

<span style="background:#ff4d4f">ATTENTION</span> : 
s'il y a une erreur :
```bash
tail -20 /var/log/syslog #pour verifier les logs et trouver l'erreur
```

Sur ns1 :
```bash
nano /etc/bind/named.conf
	zone "iutbay.org" { 
		type master; 
		file "/etc/bind/db.iutbay.org"; 
		allow-transfer { 192.168.1.101;}; 
	}; 
	zone "1.168.192.in-addr.arpa" { 
		type master; 
		file "/etc/bind/db.iutbay.org.rev"; 
		allow-transfer { 192.168.1.101;}; 
	};
```

Sur ns2 :
```bash
chmod g+w /etc/bind
```

```bash
nano /etc/bind/named.conf
	zone "iutbay.org" { 
		type slave; 
		file "/etc/bind/db.iutbay.org"; 
		masters { 192.168.1.100;}; 
	}; 
	zone "1.168.192.in-addr.arpa" { 
		type slave; 
		file "/etc/bind/db.iutbay.org.rev"; 
		masters { 192.168.1.100;}; 
	};
```

```bash
/etc/init.d/bind9 start | restart | stop
```
→ **demarrage ok**

→ fichiers db de ns1 sur ns2 :
```bash
ll /etc/bind
```

Sur m1 :
```bash
nslookup smtp.iutbay.org

dig @ns1.iutbay.org pop.iutbay.org

dig -t MX iutbay.org
```

<span style="background:#ff4d4f">ATTENTION</span>
Quand on rajoute une machine :
- sur la machine ajouter :
```bash
nano /etc/resolv.conf
		domain iutbay.org
		search iutbay.org
		nameserver 192.168.1.100 #ns1
		nameserver 192.168.1.101 #ns2
```
- sur le serveur ns1 ajouter :
	- m3 dans le fichier /etc/bind/db.iutbay.org **ET** /etc/bind/db.iutbay.org.rev

<u><b>EXO EN PLUS :</b></u>
Ajouter une zone inverse
pour 192.168.2.0/24
sur ns1
+conf ns2
avec C1 et C2

Sur ns1 :
```bash
cp /etc/
```
___
## TP3 (FTP)
Pendant la configuration des @IP, penser à mettre la route default vers la GW (envoie fichier = put, recup = get)

Sur Serveur:
```bash
cd /tmp
wget http://10.3.224.217/R4D.08/proftpd-1.3.3.tar.gz
gunzip proftpd-1.3.3.tar.gz
tar xvf proftpd-1.3.3.tar
cd proftpd-1.3.3
./configure -prefix=/usr
make
make install
```
→ le deamon serveur doit se retrouver sur /usr/sbin/proftpd et le fic de config dans /usr/etc/proftpd.conf

```bash
/etc/init.d/rsyslog start | restart | stop
```

```bash
/usr/sbin/proftpd
ps -ef | grep proftpd
```

```bash 
useradd test -d /home/test -m
passwd test #entrer un mdp 
```

Sur m1 (ou client) :
```bash
ftp SERVEUR #ou ip de serveur
→ name = test
→ passwd = mdpentre
```
tester un put/get

voir les log (serveur) :
```bash
tail -20 /var/log/xferlog #→o pour outgoing →i pour incoming
```

restreindre l'accès de l'utilisateur a son propre répertoire :
```bash
nano /usr/etc/proftpd.conf
	DefaultRoot ~
```

trouver le pid a kill 
``` bash
ps -ef | grep prof
# → tuer 'accepting connection'
```
