

def main():

    while True:
        print("Would you like to encrypt or decrypt a message?")
        mode = input()

        if mode == 'encrypt':
            encryption_cipher()
        if mode == 'decrypt':
            decryption_cipher()
        else:
            print("You must type encrypt or decrypt")
            continue


def encryption_cipher():

    text = input("What is your plaintext? ")
    shift = int(input("What is your key shift?"))
    cipherText = ""
    for ch in text:
        if ch.isalpha():
            stayInAlphabet = ord(ch) + shift
        if stayInAlphabet > ord('z'):
            stayInAlphabet -= 26
        finalLetter = chr(stayInAlphabet)
        cipherText += finalLetter
    print ("Your ciphertext is: ", cipherText)


def decryption_cipher():
    encryption=input("Enter message for decryption")
    encryption_shift=int(input("Enter your decryption key shift"))
    cipherText1 = ""
    for c in encryption:
        if c.isalpha():
            stayInAlphabet1 = ord(c) - encryption_shift
        if stayInAlphabet1 > ord('z'):
            stayInAlphabet1 += 26
        finalLetter1 = chr(stayInAlphabet1)
        cipherText1 += finalLetter1

    print ("Your ciphertext is: ", cipherText1)

main()
