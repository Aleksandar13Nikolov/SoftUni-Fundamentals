function demo(char1, char2) {

    let startChar = Math.min(char1.charCodeAt(), char2.charCodeAt());
    let finalChar = Math.max(char1.charCodeAt(), char2.charCodeAt());

    let charArray = [];

    for(let curent = startChar + 1; curent < finalChar; curent++) {
        charArray.push(String.fromCharCode(curent));
    }
    return charArray.join(" ");
}
console.log(demo('a','d'));
demo('#',':');
demo('C','#');