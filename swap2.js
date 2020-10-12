var a=4;
var b=5;
console.log("before swap:a=",a,"b=",b);
var temp=a;
a=b;
b=temp;
console.log("after swap:a=",a,"b=",b);

//other process

var x=2;
var y=3;
x=x+y;
y=x-y;
x=x-y;
console.log(x,y)//"x=","y=");

//other process

var p=3,q=5;
[p,q]=[q,p];
console.log(p,q);
