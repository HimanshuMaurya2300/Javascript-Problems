const checkTriangle = (a, b, c) => {
    if (a === b && b === c) {
        return 'Equilateral'
    }
    else if (a === b || b === c || a === c) {
        return 'Isosceles'
    }
    else {
        return 'Scalene'
    }
}

console.log(checkTriangle(1, 1, 1))
console.log(checkTriangle(1, 1, 2))
console.log(checkTriangle(1, 2, 3))