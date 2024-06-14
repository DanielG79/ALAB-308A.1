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


// Part 2: Trampolines

function flattenArray(arr) {
    if (arr.length === 0) {
        return [];
    }

    const [head, ...tail] = arr;
    if (Array.isArray(head)) {
        return flattenArray([...head, ...tail]);
    } else {
        return [head, ...flattenArray(tail)];
    }
}

function trampoline(fn) {
    return function trampolined(...args) {
        let result = fn(...args);
        while (typeof result === 'function') {
            result = result();
        }
        return result;
    };
}

const trampolinedFlatten =trampoline(flattenArray);

console.log(trampolinedFlatten([1,[2,[3,[4]]]]));