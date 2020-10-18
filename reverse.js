function reverseString(str){
var reverse="";
for(var i=0;i<str.length;i++){
    var char=str[i];
    reverse=char+reverse;
}
return reverse;
}


var statement="reverse the sentance";
var reverse=reverseString(statement);
console.log(reverse);
var statement1="reverse string 22"
console.log(statement1);