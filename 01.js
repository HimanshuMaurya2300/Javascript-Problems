// find longest word in a sentence

// Method-1

const findLongestWord1 = (str) => {

    if (str.trim().length === 0) {
        return false
    }

    words = str.split(' ')

    let longestWord = words[0]

    for (let i = 1; i < words.length; i++) {

        if (words[i].length > longestWord.length) {
            longestWord = words[i]
        }
    }

    return longestWord
}



// Method - 2

const findLongestWord2 = (str) => {

    if (str.trim().length === 0) {
        return false
    }

    words = str.split(' ')

    words.sort((a, b) => a.length - b.length)

    return words.at(-1)
}



// Method-3

const findLongestWord3 = (str) => {
    return str.split(' ').sort((a, b) => b.length - a.length)[0];
}



// Method - 4

const findLongestWord4 = (str) => {

    if (str.trim().length === 0) {
        return false
    }

    words = str.split(' ')

    return words.reduce((a, b) => a.length > b.length ? a : b)
}


const str = 'My name is Himanshu Maurya'

console.log(findLongestWord4(str))