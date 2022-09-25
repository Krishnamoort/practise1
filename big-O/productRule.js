//If f(n) is O(h(n)) and g(n) is O(p(n)), then f(n)g(n) is O(h(n)p(n))
function b(c) {
    var count = 0
    for (var i = 0; i < c; i++) {   //2
        count += 1
        for (var i = 0; i < 5 * c; i++) {   //11
            count += 1

        }
    }
    return count
}
console.log(b(2))
/*In this example, f(n) = 5n*n because line 7 runs 5n times for a total of n iterations. 
Therefore, this results in a total of 5n2
 operations. Applying the coefficient rule, the result 
is that O(n)=n2
*/
