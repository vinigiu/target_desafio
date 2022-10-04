function GeraFibonacci(num){
    let fibonacci = [];
    fibonacci[0] = 0;
    fibonacci[1] = 1;
    
    for (let i = 2; i < num; i++) {
        fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
    }

    if(fibonacci.includes(num)) {
        return "Este número pertence à sequência de Fibonacci"
    }

    return "Este número NÃO pertence à sequência de Fibonacci"
}

console.log(GeraFibonacci(34))