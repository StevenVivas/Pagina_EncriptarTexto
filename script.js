function encriptarTexto() {
    const vocalesEncrip = ['a', 'p', 'e', 'j', 'i', 'x', 'o', 'w', 'u', 'k'];
    const inputTexto = document.getElementById('inputTexto').value;
    const texEncrip = [];

    for (let i = 0; i < inputTexto.length; i++) {
        let char = inputTexto[i].toLowerCase();
        if (char === ' ') {
            texEncrip.push('_');
        } else {
            for (let j = 0; j < vocalesEncrip.length; j += 2) {
                if (char === vocalesEncrip[j]) {
                    char = vocalesEncrip[j + 1];
                    break;
                }
            }
            texEncrip.push(char);
        }
    }

    const textoEncriptado = texEncrip.join('');

    document.getElementById('textoEncriptado').textContent = 'Texto encriptado: ' + textoEncriptado;
}
