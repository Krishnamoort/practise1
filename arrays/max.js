var arraY = ['krishna', "kkk", "instrumentation", 2021]
var arraY1 = arraY.slice(0, 3)
arraY1.unshift(2021)
arraY1.push('beleive')

var arraY2 = arraY.slice(0, 4)
arraY2.unshift('me')
arraY2.pop()
//arraY2.reverse()
var arr3 = arraY[0];
var arr4 = arraY[3];



document.getElementById('demo').innerHTML = arraY1

document.getElementById('demo1').innerHTML = arraY2

document.getElementById('demo1').innerHTML = arraY2

//document.getElementsByTagName(div).innerHTML = arr3 + 'is the famous of ' + arr4


//insertion



//array with fuction

/*var arrr = [34, 42, 33, 30]

function arrr1(sum, mult) {
    var sum = arrr[0]
    var mult = arrr[1]
    this.var3 = arrr[2]
    return sum * mult
}

document.getElementById('arraymul').innerHTML = arrr1();*/

const kichaaa = function () {
    let people = ['demogracy', 'dictatorship', 'legacy']
    var one = people[0] + "" + "assigned by indian government ; "
    var two = people[1] + " " + "ruled by king jhon un for koria ;"
    var thre = people[2] + " " + "is how we are ruled by britise we know ;"
    return one + " " + two + " " + thre


}

document.getElementById('idea').innerHTML = kichaaa();

document.getElementById('india').innerHTML = kichaaa.one()