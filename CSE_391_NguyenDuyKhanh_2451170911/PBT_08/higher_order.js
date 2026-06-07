
// 1. pipe() — Nối chuỗi functions
function pipe(...fns) {
    return function (value) {
        return fns.reduce(
            (result, fn) => fn(result),
            value
        );
    };
}

const process = pipe(
    x => x * 2,
    x => x + 10,
    x => x.toString(),
    x => "Kết quả: " + x
);

console.log("pipe");

console.log(process(5));
console.log();



// 2. memoize() — Cache kết quả
function memoize(fn) {

    const cache = {};

    return function (...args) {
        const key = JSON.stringify(args);
        if (cache[key] !== undefined) {
            console.log("dang lay tu cache");
            return cache[key];
        }
        const result = fn(...args);

        cache[key] = result;

        return result;
    };
}

const expensiveCalc = memoize((n) => {

    console.log("Đang tính...");

    let result = 0;

    for (let i = 0; i < n; i++) {
        result += i;
    }

    return result;
});

console.log("memoize");
console.log(expensiveCalc(1000000));
console.log(expensiveCalc(1000000));
console.log();



// 3. debounce()
function debounce(fn, delay) {

    let timer;

    return function (...args) {

        clearTimeout(timer);

        timer = setTimeout(() => {

            fn(...args);

        }, delay);
    };
}

const search = debounce((query) => {

    console.log("Searching:", query);

}, 500);

console.log("debounce");

search("i");
search("ip");
search("iph");
search("iphone");
search("iphone 16");

// 4. retry()
async function retry(fn, maxAttempts = 3) {
    let lastError;
    for (let i = 1; i <= maxAttempts; i++) {

        try {

            console.log(`Attempt ${i}`);

            return await fn();

        }

        catch (error) {

            lastError = error;

            console.log("Lỗi:", error.message);

        }
    }
    throw lastError;
}

