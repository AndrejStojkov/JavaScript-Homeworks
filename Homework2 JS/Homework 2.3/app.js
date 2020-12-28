var year = prompt ("Enter the year");
var chineseZodiac = (year - 4)%12

var n0 = "Rat";
var n1 = "Ox";
var n2 = "Tiger";
var n3 = "Rabbit";
var n4 = "Dragon";
var n5 = "Snake";
var n6 = "Horse";
var n7 = "Goat";
var n8 = "Monkey";
var n9 = "Rooster";
var n10 = "Dog";
var n11 = "Pig";

var n00 = 0;
var n11 = 1;
var n22 = 2;
var n33 = 3;
var n44 = 4;
var n55 = 5;
var n66 = 6;
var n77 = 7;
var n88 = 8;
var n99 = 9;
var n1010 = 10;
var n1111 = 11;

if (chineseZodiac == n00){
    alert(n0)
}
else if (chineseZodiac == n11){
    alert(n1)
}
else if (chineseZodiac == n22){
    alert(n2)
}
else if (chineseZodiac == n33){
    alert(n3)
}
else if (chineseZodiac == n44){
    alert(n4)
}
else if (chineseZodiac == n55){
    alert(n5)
}
else if (chineseZodiac == n66){
    alert(n6) 
}
else if (chineseZodiac == n77){
    alert(n7)
}
else if (chineseZodiac == n88){
    alert(n8)
}
else if (chineseZodiac == n99){
    alert(n9)
}
else if (chineseZodiac == n1010){
    alert(n10)
}
else {
    alert(n11)
}