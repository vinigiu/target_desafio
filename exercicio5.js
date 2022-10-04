function reverteString(str) {
    let stringArmazena = "";

    for (let i = str.length - 1; i >= 0; i--) { 
        stringArmazena += str[i];
    }

    return stringArmazena;
}

console.log(reverteString('Vinícius'));