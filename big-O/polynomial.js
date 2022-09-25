/*f f(n) is a polynomial of degree k, then f(n) is O(nk).*/
function a(n) {
    var count = 0;
    for (var i = 0; i < n * n; i++) {
        count += 2
    }
    return count
}
console.log(a(3))