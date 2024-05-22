// write a function to convert a string into camelcase & snakecase

// method - 1

const toCamelCase = (str) => {

    if (str.trim().length === 0) {
        return false
    }

    let words = str.split(' ')

    for (let i = 1; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].slice(1)
    }

    return words.join('')
}

const toSnakeCase = (str) => {

    if (str.trim().length === 0) {
        return false
    }

    let words = str.split(' ')

    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].toLowerCase()
    }

    return words.join('_')
}

// method - 2

const toCamelCase2 = (str) => {
    return str
        .trim()
        .split(' ')
        .map((currEle, index) => {
            if (index === 0) {
                return currEle
            } else {
                return currEle[0].toUpperCase() + currEle.slice(1)
            }
        })
        .join('')
}



console.log(toCamelCase('hello himanshu maurya'))
console.log(toSnakeCase('hello himanshu maurya'))
console.log(toCamelCase2('hello himanshu maurya'))
