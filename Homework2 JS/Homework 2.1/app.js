alert("Input five different numbers and will print the maximum number");
var n1 = parseFloat (prompt("First number:")) ;

var n2 = parseFloat (prompt("Second number:"));

var n3 = parseFloat (prompt("Third number:"));

var n4 = parseFloat (prompt("Forth number:"));

var n5 = parseFloat (prompt("Fifth number:")) ;


    
if (n1 > n2 && n1 > n3 && n1 > n4 && n1 > n5) {
    alert (n1)
}

else if (n2 > n1 && n2 > n3 && n2 > n4 && n2 > n5) {
    alert (n2)
}

else if (n3 > n1 && n3 > n2 && n3 > n4 && n3 > n5) {
    alert(n3)
}

else if (n4 > n1 && n4 > n2 && n4 > n3 && n4 > n5) {
    alert(n4)
}

else {
    alert(n5)
}

