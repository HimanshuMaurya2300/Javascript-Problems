// sum of squares of array

// method-1

const sumOfSquares = (arr) => {

    let sum = 0

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i] * arr[i]
    }

    return sum
}


// method-2

const sumOfSquares2 = (arr) => {

    const sum = arr.reduce((accum, currEle) => {
        return accum + (currEle * currEle)
    }, 0)

    return sum
}


// method - 3

const sumOfSquares3 = (arr) => {

    let sum = 0

    for (let ele of arr) {
        sum += ele * ele
    }

    return sum
}


console.log(sumOfSquares([1, 2, 3]))
console.log(sumOfSquares2([1, 2, 3]))
console.log(sumOfSquares3([1, 2, 3]))