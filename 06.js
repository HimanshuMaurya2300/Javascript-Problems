// check palindrome

const isPalindrome = (str) => {

    str = str.toLowerCase().replace(/\W/g, '')
    let reverseStr = str.split('').reverse().join('')

    return str === reverseStr
}


const isPalindrome1 = (str) => {
    return str === str.split('').reverse().join('')
}


console.log(isPalindrome('A man, a plan, a canal, panama'))
console.log(isPalindrome('racecar'))
console.log(isPalindrome('hello'))