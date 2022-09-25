function a(n) {
    var count = 0;
    for (var i = 0; i < 5 * n; i++) {


        count += 1;

    }
    return count;

}
console.log(a(4))

var dates = [21, 22, 23];
function oneday(dates) {
    var x = 0;
    for (var i = 0; i < dates.length; i++) {
        x += i
    }
    return x
}
console.log(oneday())