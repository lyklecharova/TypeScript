function sumOfNumbers(N: string, M:string):void{
    let first = Number(N);
    let second = Number(M);

    let sum = 0;

    for (let i = first; i <= second; i++) {
        sum += i;
    }

    console.log(sum);
}

sumOfNumbers('1', '5');
sumOfNumbers('-8', '20'); 