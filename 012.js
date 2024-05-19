// remove duplicate elements from an array

// method-1

const removeDuplicate = (arr) => {

    if (arr.length === 0)
        return arr

    const set = new Set(arr)

    return [...set]
}

console.log(removeDuplicate([1, 2, 3, 3, 4, 5, 5, 6]))
console.log(removeDuplicate([]))