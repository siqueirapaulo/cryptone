// VARIÁVEIS GLOBAIS ==========================================================

var originalTextarea = document.querySelector("#original-message");
var resultTextarea = document.querySelector("#result");

var warnMessage = document.querySelector("#warn-message");

var cryptButton = document.querySelector("#crypt-button");
var decryptButton = document.querySelector("#decrypt-button");
var copyButton = document.querySelector("#copy-button");

// FUNÇÃO DE CRIPTOGRAFIA

cryptButton.onclick = function() {
    var originalMessage = originalTextarea.value; // Mensagem a ser criptografada.
    var cryptedMessage; // Mensagem criptografada.
    var warnIcon = "<img id='warn-icon' src='images/warn.png'>";
    var errorMessage = "<p>Não foi possível criptografar. A mensagem deve possuir somente letras minúsculas e sem acento.</p>";

    // Verificando a existência de letras maiúsculas, números, acentos e caracteres especiais.
    if (originalMessage.match(/[A-Z0-9À-ü\W]/)) {
        warnMessage.innerHTML = `${warnIcon} ${errorMessage}`;
        resultTextarea.value = "";
    } else {
        // Criptografando a mensagem.
        cryptedMessage = originalMessage.replace(/e/g, "enter");
        cryptedMessage = cryptedMessage.replace(/i/g, "imes");
        cryptedMessage = cryptedMessage.replace(/a/g, "ai");
        cryptedMessage = cryptedMessage.replace(/o/g, "ober");
        cryptedMessage = cryptedMessage.replace(/u/g, "ufat");

        resultTextarea.value = cryptedMessage;
        warnMessage.innerHTML = "";
    }

    /*if (!originalMessage.match(/ai|enter|imes|ober|ufat/)) {
        cryptedMessage = originalMessage.replace(/e/g, "enter");
        cryptedMessage = cryptedMessage.replace(/i/g, "imes");
        cryptedMessage = cryptedMessage.replace(/a/g, "ai");
        cryptedMessage = cryptedMessage.replace(/o/g, "ober");
        cryptedMessage = cryptedMessage.replace(/u/g, "ufat");

        resultTextarea.value = cryptedMessage;
        warnMessage.innerHTML = "";
    } else {
        warnMessage.innerHTML = "<img id='warn-icon' src='images/warn.png'>" +
        "<p>Não foi possível criptografar. A mensagem já está criptografada.</p>";
    
        resultTextarea.value = "";
    }*/
}

// FUNÇÃO DE DESCRIPTOGRAFIA ==================================================

decryptButton.onclick = function() {
    var originalMessage = originalTextarea.value; // Mensagem a ser descriptografada.
    var decryptedMessage; // Mensagem descriptografada.
    var warnIcon = "<img id='warn-icon' src='images/warn.png'>";
    var errorMessage = "<p>A mensagem não está criptografada.</p>";
    
    // Verificando a existência das chaves criptográficas.
    if (!originalMessage.match(/ai|enter|imes|ober|ufat/)) {
        warnMessage.innerHTML = `${warnIcon} ${errorMessage}`;
    } else {
        warnMessage.innerHTML = "";
    }

    // Descriptografando a mensagem.
    decryptedMessage = originalMessage.replace(/ai/g, 'a');
    decryptedMessage = decryptedMessage.replace(/enter/g, 'e');
    decryptedMessage = decryptedMessage.replace(/imes/g, 'i');
    decryptedMessage = decryptedMessage.replace(/ober/g, 'o');
    decryptedMessage = decryptedMessage.replace(/ufat/g, 'u');

    resultTextarea.value = decryptedMessage;
}

// FUNÇÃO DE COPIAR PARA O CLIPBOARD ==========================================

copyButton.onclick = function() {
    var copyMessage = document.querySelector("#result").value;
    var warnIcon = "<img id='warn-icon' src='images/copy.png'>";
    var notifyMessage = "<p>Mensagem copiada com sucesso!</p>";

    navigator.clipboard.writeText(copyMessage); // Copia a mensagem para o clipboard.

    warnMessage.innerHTML = `${warnIcon} ${notifyMessage}`;

    // Delay de 5s para o alerta sumir.
    setTimeout(function() {
        warnMessage.innerHTML = "";
    }, 5000)
}