const generateAlphabetArr = (CAPITAL = false) => {
    return [...Array(26)].map((_, index) =>
        String.fromCharCode(index + (CAPITAL ? 65 : 97))
    )
}

export default generateAlphabetArr;