const removeDuplicates = (inputArray) => {
    if(inputArray.length < 2) {
        return inputArray.length;
    }
    let j = 0;
    let i = 1;
    while(i < inputArray.length) {
        if(inputArray[i] != inputArray[j]) {
            j++;
            inputArray[j] = inputArray[i];
        }
        i++;
    }
    return j + 1;
}

export default removeDuplicates;