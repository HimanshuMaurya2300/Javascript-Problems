// find min in an array

// method-1

const findMin = (arr) => {

    return arr.sort((a, b) => a - b)[0]
}

// method-2

const findMin2 = (arr) => {

    arr = arr.sort((a, b) => {
        if (b > a) {
            return -1
        }
    })

    return arr[0]
}


// method-3

const findMin3 = (arr) => {

    if (arr.length === 0) {
        return "Array is Empty"
    }

    return Math.min(...arr)
}



console.log(findMin([10, 20, 8, 9, 11]))
console.log(findMin2([10, 20, 8, 9, 11]))
console.log(findMin3([10, 20, 8, 9, 11]))