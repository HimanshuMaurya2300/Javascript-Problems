// sum of digit

// method-1

const sumOfDigit1 = (num) => {

    let sum = 0

    while (num > 0) {
        sum += num % 10
        num = Math.floor(num / 10)
    }

    return sum
}


// method-2

const sumOfDigit2 = (num) => {

    let arr = Array.from(String(num), Number)

    return arr.reduce((accum, currEle) => accum + currEle, 0)
}


console.log(sumOfDigit1(1234))
console.log(sumOfDigit1(12345))
console.log('--------------------')
console.log(sumOfDigit2(1234))
console.log(sumOfDigit2(12345))
