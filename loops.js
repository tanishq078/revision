const greetings = "Hello World";

for (const greet of greetings) {
    if(greet == " "){
        continue;
    }
    console.log(`Each character in greetins ${greet}`);
}