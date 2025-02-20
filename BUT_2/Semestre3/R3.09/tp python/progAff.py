from collections import Counter

alpha = "abcdefghijklmnopqrstuvwxyz"

def code(letter):
    return alpha.index(letter)

def letter(code):
    return alpha[code]

def lettre_plus_frequente(message):
    lettres_seules = [char for char in message if char in alpha]
    if not lettres_seules:
        return None
    freq = Counter(lettres_seules)
    return freq.most_common(1)[0][0]

def pgcd_euclide_etendu(n, m):
    u, v, u1, v1 = 1, 0, 0, 1
    while m != 0:
        q = n // m
        n, m = m, n % m
        u, u1 = u1, u - q * u1
        v, v1 = v1, v - q * v1
    return n, u, v

def inversemod(n, m):
    d, u, _ = pgcd_euclide_etendu(n, m)
    if d == 1:
        return u % m
    else:
        return None

def chiffreAffine(message, a, b):
    crypto = ""
    for char in message:
        if char in alpha:
            newCode = (a * code(char) + b) % 26
            crypto += letter(newCode)
        else:
            crypto += char
    return crypto

def dechiffreAffineAvecClefs(crypto, a, b):
    a_inv = inversemod(a, 26)  # Calcul de l'inverse de a modulo 26
    if a_inv is None:
        return "La clé a n'a pas d'inverse modulo 26. Déchiffrement impossible."
    message = ""
    for char in crypto:
        if char in alpha:
            # Formule de déchiffrement corrigée
            newCode = (a_inv * (code(char) - b + 26)) % 26
            message += letter(newCode)
        else:
            message += char
    return message

# Exemple d'utilisation avec clés a et b
a, b = 5, 8
crypto = chiffreAffine("chat alors", a, b)  # "chat alors" -> texte chiffré
print(f"Texte chiffré : {crypto}")
message = dechiffreAffineAvecClefs(crypto, a, b)
print(f"Message déchiffré avec les clés a={a}, b={b} : {message}")

def dechiffreAffineSansClefs(crypto):
    lettre_cible_naturelle = 'e'
    index_lettre_naturelle = code(lettre_cible_naturelle)
    lettre_cible_cryptogramme = lettre_plus_frequente(crypto)
    if lettre_cible_cryptogramme is None:
        return "Aucune lettre cible n'a été trouvée."
    index_lettre_cible = code(lettre_cible_cryptogramme)
    for a in range(1, 26):
        if inversemod(a, 26) is not None:
            b = (index_lettre_cible - a * index_lettre_naturelle + 26) % 26
            a_inv = inversemod(a, 26)
            message = ""
            for char in crypto:
                if char in alpha:
                    # Formule de déchiffrement corrigée
                    newCode = (a_inv * (code(char) - b + 26)) % 26
                    message += letter(newCode)
                else:
                    message += char
            if est_message_valide(message):
                print(f"Clés trouvées : a={a}, b={b}")
                return message
    return "Aucun déchiffrement valide trouvé."

def est_message_valide(message):
    mots_courants = ["le", "la", "et", "les", "un", "une", "est", "en", "de", "chat", "alors"]
    return any(mot in message for mot in mots_courants)

# Exemple d'utilisation sans clés
crypto = chiffreAffine("chat alors", 7, 3)  # Chiffrement avec a=7, b=3
print(f"Texte chiffré : {crypto}")
message = dechiffreAffineSansClefs(crypto)
print(f"Message déchiffré sans clés : {message}")
