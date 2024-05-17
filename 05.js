const sortAscending = (arr) => {
    return arr.sort((a, b) => a - b);
}

console.log(sortAscending([10, 20, 8, 9, 11]))

const sortDescending = (arr) => {
    return arr.sort((a, b) => b - a);
}

console.log(sortDescending([10, 20, 8, 9, 11]))