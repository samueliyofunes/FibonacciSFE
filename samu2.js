function fibonacci(n) {
    let a = [0, 1];
    for (let i = 2; i <= n; i++) {
        a.push(a[i - 1] + a[i - 2]);
    }
    return a[n];
}
console.log(fibonacci(10));

function fibonacci(n) {
    if(n <= 1) {
        return n;
    }
    return fibonacci(n -1) + fibonacci(n -2);
}
for(let i = 0; i <= 27; i++){
    console.log(fibonacci(i));
}