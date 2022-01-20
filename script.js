// VARIÁVEIS

var originalMessage = document.querySelector("#original-message");
var resultMessage = document.querySelector("#result");
var errorMessage = document.querySelector("#error-message");

var cryptButton = document.querySelector("#crypt-button");
var decryptButton = document.querySelector("#decrypt-button");

// FUNÇÃO DE CRIPTOGRAFIA

cryptButton.onclick = function() {
    var original = originalMessage.value;
    var crypted = "";
    var error = false;

    for (i = 0; i < original.length; i++) {
        if (original[i] != " ") {
            if (original[i].codePointAt(0) < 97 || original[i].codePointAt(0) > 122) {
                error = true;
                i = original.length;
            }
        }

        switch (original[i]) {
            case ('a'):
                crypted += "ai";
                break;
            
            case ('e'):
                crypted += "enter";
                break;
        
            case ('i'):
                crypted += "imes";
                break;
            
            case ('o'):
                crypted += "ober";
                break;
    
            case ('u'):
                crypted += "ufat";
                break;
    
            default:
                crypted += original[i];
        }
    }

    if (error) {
        resultMessage.innerHTML = "";
        errorMessage.innerHTML = "<img id='warn-icon' src='images/warn.png'><p>Não foi possível criptografar. A mensagem deve possuir somente letras minúsculas e sem acento.</p>";
    } else {
        resultMessage.innerHTML = crypted;
        errorMessage.innerHTML = "";
    }
}

// FUNÇÃO DE DESCRIPTOGRAFIA

decryptButton.onclick = function() {
    var original = originalMessage.value;
    var decrypted = "";
    var error = false;
    var i = 0;

    while (i < original.length) {
        switch (original[i]) {
            case ('a'):
                if (original[i+1] == 'i') {
                    decrypted += original[i];
                    i += 2;
                } else {
                    error = true;
                    i = original.length;
                }

                break;
            
            case ('e'):
                if ((original[i+1] == 'n') &&
                    (original[i+2] == 't') &&
                    (original[i+3] == 'e') &&
                    (original[i+4] == 'r'))
                {
                    decrypted += original[i];
                    i += 5;
                } else {
                    error = true;
                    i = original.length;
                }

                break;
        
            case ('i'):
                if ((original[i+1] == 'm') &&
                    (original[i+2] == 'e') &&
                    (original[i+3] == 's'))
                {
                    decrypted += original[i];
                    i += 4;
                } else {
                    error = true;
                    i = original.length;
                }

                break;
            
            case ('o'):
                if ((original[i+1] == 'b') &&
                    (original[i+2] == 'e') &&
                    (original[i+3] == 'r'))
                {
                    decrypted += original[i];
                    i += 4;
                } else {
                    error = true;
                    i = original.length;
                }
                
                break;

            case ('u'):
                if ((original[i+1] == 'f') &&
                    (original[i+2] == 'a') &&
                    (original[i+3] == 't'))
                {
                    decrypted += original[i];
                    i += 4;
                } else {
                    error = true;
                    i = original.length;
                }
                
                break;

            default:
                decrypted += original[i];
                i++;
        }
    }

    if (error) {
        errorMessage.innerHTML = "<img id='warn-icon' src='images/warn.png'><p>Não foi possível descriptografar. A mensagem não está criptografada corretamente.</p>";
        resultMessage.innerHTML = "";
        error = false;
    } else {
        resultMessage.innerHTML = decrypted;
        errorMessage.innerHTML = "";
    }
}

// FUNÇÃO DE COPIAR PARA O CLIPBOARD

var copyButton = document.querySelector("#copy-button");

copyButton.onclick = function() {
    var copyMessage = document.querySelector("#result").innerHTML;
    navigator.clipboard.writeText(copyMessage);
}