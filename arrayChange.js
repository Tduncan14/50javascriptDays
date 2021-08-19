function arryChange(inputArray) {
    var count = 0;
    for (var i = 0; i < inputArray.length; i++) {
        if (inputArray[i] >= inputArray[i + 1]) {
            var difference = (inputArray[i + 1]) - inputArray[i + 1];
        }
    }
    return count;
}
console.log(arryChange([1, 1, 1]));
