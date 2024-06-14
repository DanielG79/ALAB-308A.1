// Part 1: Stack Overflow
let counter = 0;

function measureStackSize() {
    counter++;
    measureStackSize();
}

try {
    measureStackSize();
} catch (err) {
    console.log("Stack overflow error occurred!");
    console.log("Maximum call stack size reached:", counter);
}
