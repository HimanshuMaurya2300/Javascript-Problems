// Method - 1

const generateHash1 = (str) => {

    if (str.length > 280 || str.trim().length === 0) {
        return false
    }

    str = str.split(' ')

    str = str.map((word) => {
        return word[0].toUpperCase() + word.slice(1)
    })

    return `#${str.join('')}`
}



// Method - 2

const generateHash2 = (str) => {

    if (str.length > 280 || str.trim().length === 0) {
        return false
    }

    str = str.split(' ')

    str = str.map((word) => {
        return word.replace(word[0], word[0].toUpperCase())
    })

    return `#${str.join('')}`
}



// Method - 3

const generateHash3 = (str) => {

    if (str.length > 280 || str.trim().length === 0) {
        return false
    }

    str = str.split(' ')

    str = str.map((word) => {
        return word[0].toUpperCase() + word.slice(1)
    })

    return `#${str.join('')}`
}

console.log(generateHash3('my name is himanshu maurya'))