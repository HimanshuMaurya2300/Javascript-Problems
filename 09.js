// calculate the average

// Method-1

const findAverage1 = (arr) => {

    let sum = 0

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }

    return sum / arr.length
}

// Method-2

const findAverage2 = (arr) => {

    const sum = arr.reduce((accum, currEle) => {
        return accum + currEle
    }, 0)

    return sum / arr.length
}

const arr = [1, 3, 5, 7, 9, 11]
console.log(findAverage1(arr))
console.log(findAverage2(arr))