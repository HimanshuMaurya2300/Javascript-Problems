// check number is power of 2 or not

// method-1

const IsPowerOf2 = (num) => {

    while (num > 1) {
        if (num % 2 !== 0) {
            return false
        }
        num /= 2
    }

    return true
}


// method-2

const isPowerOf2 = (num) => Math.log2(num) % 1 === 0

console.log(IsPowerOf2(8))
console.log(IsPowerOf2(7))
console.log('-----------------')
console.log(isPowerOf2(8))
console.log(isPowerOf2(7))