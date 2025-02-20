from collections import Counter  

alpha = "abcdefghijklmnopqrstuvwxyz" 

#Question A:
def code(letter) :
    return alpha.index(letter)  
# print(code('a')) 
#--------------------------------------------------------
def letter(code):
    return alpha[code]          
# print(letter(25))               

#________________________________________________________
#Question B:
def chiffreCesar(mess,key):
    crypto =""
    for char in mess :
        if char in alpha : 
            newCode = (code(char) + key) %26
            crypto += letter(newCode)
        else:
            crypto += char
    return crypto
# mess = "j'aime les maths "
# key = 6
# crypto = chiffreCesar(mess,key)
# print(crypto)
#--------------------------------------------------------
def unchiffreCesar(crypto,key):
    mess =""
    for char in crypto :
        if char in alpha : 
            newCode = (code(char) - key) %26
            mess += letter(newCode)
        else:
            mess += char
    return mess
# crypto = "p'gosk skretjg"
# key = 6
# crypto = unchiffreCesar(crypto,key)
# print (crypto)

#________________________________________________________
#Question C:
def lettre_plus_frequente(message):
    lettres_seules = [char for char in message if char in alpha]
    if not lettres_seules:
        return None
    freq = Counter(lettres_seules)
    return freq.most_common(1)[0][0]

def cryptanalyse(crypto):
    lettre_cible = 'e'  
    for key in range(26):
        mess = unchiffreCesar(crypto, key)
        lettre_frequente = lettre_plus_frequente(mess)
        if lettre_frequente == lettre_cible:
            return f"{key} → {mess}"
    return "Aucune clé satisfaisante n'a été trouvée."
# crypto1 = "cvpyolytpvulmhpylzltishuakhcvpylumylpuaslylnsltluawvbyslbyzhbclyshtpzljlahpajvttlzpyvnblzlahpatpzhslbykpzaypiblyklzivuivuzohyyfwvaalyyvdspun"
# resultat = cryptanalyse(crypto1)
# print(resultat)




# -----------------------------------------------
def chiffreAffine(message, a, b):
    alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    
    if a % 2 == 0 or a % 13 == 0:
        raise ValueError("ERREUR (la clef ne dois pas etre un multiple de 2 ou de 13 !)")
    
    message_chiffre = ''
    
    for lettre in message.upper():
        if lettre.isalpha(): 
            x = alphabet.index(lettre)
            chiffre = (a * x + b) % 26
            message_chiffre += alphabet[chiffre]
        else:
            message_chiffre += lettre
    
    return message_chiffre

message = "J'ADORE LES MATHS"
a = 5 
b = 8 
message_chiffre = chiffreAffine(message, a, b)
print("Message chiffré :", message_chiffre)



