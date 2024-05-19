// check two arrays are equal or not

// method-1

const checkTwoArraysEqual1 = (arr1, arr2) => {

    if (arr1.length !== arr2.length) {
        return false
    }

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false
        }
    }

    return true
}


// method-2

const checkTwoArraysEqual2 = (arr1, arr2) => {

    if (arr1.length !== arr2.length) {
        return false
    }

    return arr1.every((element, index) => {
        return element === arr2[index]
    })
}

const arr1 = [1, 2, 3, 4, 5]
const arr2 = [1, 2, 3, 4, 5]

console.log(checkTwoArraysEqual1(arr1, arr2))
console.log(checkTwoArraysEqual1([1, 2, 3], [1, 2, 4]))
console.log(checkTwoArraysEqual1([], []))
console.log('-------------------------')
console.log(checkTwoArraysEqual2(arr1, arr2))
console.log(checkTwoArraysEqual2([1, 2, 3], [1, 2, 4]))
console.log(checkTwoArraysEqual2([], []))