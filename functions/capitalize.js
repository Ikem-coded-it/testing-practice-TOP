function capitalize(string) {
    const firstChar = string.charAt(0);
    const upperCaseFirstChar = firstChar.toUpperCase();
    const removedFirstChar = string.slice(1);
    return upperCaseFirstChar+removedFirstChar;
}

export {capitalize}