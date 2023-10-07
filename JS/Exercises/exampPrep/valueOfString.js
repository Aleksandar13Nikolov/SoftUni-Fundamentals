function solve(str) {

    let command = str.pop();
    let text = str[0];
    text = text.split('');
    let sum = 0;

    for (const leter of text) {
        let leterNumber = leter.charCodeAt();

        if (command === "UPPERCASE" && leterNumber >= 65 && leterNumber <= 90) {

            sum += leterNumber;

        } else if (command === "LOWERCASE" && leterNumber >= 97 && leterNumber <= 122) {

            sum += leterNumber;
        }

    }
    console.log(` The total sum is: ${sum}`);
}
solve(['HelloFromMyAwesomePROGRAM',
    'LOWERCASE'
])