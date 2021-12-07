function encrypt(mensagem) {
    
    //Inverter a ordem dos caracteres
    mensagem = mensagem.split('').reverse();

    //Separar  
    let auxMensagem = [[]]
    let auxCount = -1
    let flag = false
    mensagem.forEach((letter, index) => {
        auxCount++
        if( auxCount === ( flag ? 3 : 4 ) ){
            auxMensagem[auxMensagem.length] = []
            auxCount = 0
            flag = !flag
        }
        auxMensagem[auxMensagem.length - 1].push(letter)
    });
    
    mensagem = auxMensagem

    let allCharacter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopwrstuvwxyz0123456789'
    let piNumbers = [1, 4, 1, 5, 9, 2, 6, 5, 3, 5]
    let piAux = 0
    mensagem.forEach((group, index) => {
        group.forEach((letter, index) => {
            let sumNumber = piNumbers[piAux]
            piAux = piAux < ( piNumbers.length - 1 ) ? piAux + 1 : 0
            if(allCharacter.split('').includes(letter)){
                group[index] = allCharacter[allCharacter.split('').indexOf(letter) - sumNumber]
            }
        });
        mensagem[index] = group.join('')
    });

    mensagem = mensagem.join('-')

    return mensagem
}

function validate (mensagem, hash) {
    return encrypt(mensagem) === hash
}

console.log(encrypt("Mensagem super criptografada"))

console.log(validate("testhje", "PVDMJ.dprZ-k"))