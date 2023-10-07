function activationKeys(arr) {

    let key = arr.shift();

    for (const element of arr) {
        let token = element.split('>>>');
        let command = token[0];
        if (command === "Generate") {
            break;
        }
        switch (command) {
            case 'Contains':
                let substr = token[1];
                if (key.includes(substr)) {
                    console.log(`${key} contains ${substr}.`);
                } else {
                    console.log("Substring not found!");
                }
                break;

            case 'Flip':
                let size = token[1];
                let startIndex = Number(token[2]);
                let endIndex = Number(token[3]);

                if (size === "Upper") {
                    let text = key.substring(startIndex, endIndex);
                    let newText = text.toUpperCase();
                    key = key.replace(text, newText);
                    console.log(key);
                } else {
                    let text = key.substring(startIndex, endIndex);
                    let newText = text.toLowerCase();
                    key = key.replace(text, newText);
                    console.log(key);
                }
                break;

            case 'Slice':
                let index1 = Number(token[1]);
                let index2 = Number(token[2]);
                let firstPart = key.substring(0, index1);
                let secondPart = key.substring(index2);
                key = firstPart + secondPart;
                console.log(key);
                break;
        }

    }
    console.log(`Your activation key is: ${key}`);
}
activationKeys(["134softsf5ftuni2020rockz42",
    "Contains>>>soft",
    "Slice>>>3>>>7",
    "Contains>>>-uni-",
    "Contains>>>-rocks",
    "Flip>>>Upper>>>2>>>8",
    "Flip>>>Lower>>>5>>>11",
    "Generate"
])