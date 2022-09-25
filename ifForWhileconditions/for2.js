function a(n) {
    var count = 0;
    for (var i = 0; i < n; i++) {
        count += 1;
    }
    for (var i = 0; i < 5 * n; i++) {
        count += 1;
    }
    return count;
};
console.log(a(2));
console.log(a(3));
console.log(a(4));
console.log(a(5));


