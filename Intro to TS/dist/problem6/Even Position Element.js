function evenPositionElement(array) {
    let result = "";
    for (let i = 0; i < array.length; i += 2) {
        result += array[i] + " ";
    }
    console.log(result.trim());
}
evenPositionElement(["20", "30", "40", "50", "60"]);
evenPositionElement(["5", "10"]);
