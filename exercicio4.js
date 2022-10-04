let faturamentoSP = 67836.43;
let faturamentoRJ = 36678.66;
let faturamentoMG = 29229.88;
let faturamentoES = 27165.48;
let faturamentoOutros = 19849.53;

const faturamentoTotal = (arr=[]) => {
    let soma = 0;
    for (let i = 0; i < arr.length; i++) {
        soma += arr[i]
    }
    return soma
}

const faturamentoParcial = (fatEstado) => {
    let soma = faturamentoTotal([faturamentoSP,faturamentoRJ,faturamentoMG,faturamentoES,faturamentoOutros]);
    let parcial = fatEstado/soma;
    return (parcial*100 + "%")
}

console.log(faturamentoParcial(faturamentoSP))

