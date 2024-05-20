// count of vowels

// method-1

const countVowels = (str) => {

    const vowels = 'aeiou'
    str = str.toLowerCase()

    let count = 0

    for (let i = 0; i < str.length; i++) {

        if (vowels.indexOf(str[i]) !== -1) {
            count++
        }
    }

    return count
}


// method-2

const countVowels2 = (str) => {

    const vowels = ['a', 'e', 'i', 'o', 'u']

    const arr = str.toLowerCase().split('')
    let count = 0

    for (let char of arr) {

        if (vowels.includes(char)) {
            count++
        }
    }

    return count
}


console.log(countVowels('Hello Himanshu'))
console.log(countVowels('Himanshu'))
console.log('-----------------')
console.log(countVowels2('Hello Himanshu'))
console.log(countVowels2('Himanshu'))