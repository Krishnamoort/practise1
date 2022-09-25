function b(n, m) {
    var count = 0
    for (var i = 0; i < n ** m; i++) {
        for (var j = i; j < n; j++) {
            count += 3
            //this block of code has f(n) = n+1.
        }
    }
    return count
}
console.log(b(3, 2));