function mathOperations(num1: number, num2: number, operator: string): void {
    let result: number;
    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            result = num1 / num2;
            break;
        case "%":
            result = num1 % num2;
            break;
        case "**":
            result = num1 ** num2;
            break;
    }
    console.log(result);
}
mathOperations(5, 6, "+");
mathOperations(3, 5.5, "*");
