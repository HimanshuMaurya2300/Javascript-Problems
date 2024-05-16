// count occurences of a character in a string

const countChar = (str, char) => {

    str = str.toLowerCase();
    char = char.toLowerCase();

    str = str.split('');

    const count = str.reduce((accum, currChar) => {
        if (currChar === char) {
            accum++;
        }
        return accum
    }, 0)

    return count;
}

console.log(countChar('MissIssippi', 'P'))