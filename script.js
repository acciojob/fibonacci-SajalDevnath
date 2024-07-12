function fibonacci(num) {
    if (num === 0) {
        return 0;
    } else if (num === 1) {
        return 0; 
    }

    let prev1 = 0;
    let prev2 = 1;
    let current = 0;

    for (let i = 2; i <= num; i++) {
        current = prev1 + prev2;
        prev1 = prev2;
        prev2 = current;
    }

    return prev1;
}

module.exports = fibonacci;

