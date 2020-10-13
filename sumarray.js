function sumarray(num){
var sum= 0;
for(var i=0;i<num.length;i++){
var element=num[i];
sum=sum+element;
    }
    return sum;
    
}
var result=sumarray([20,20,30]);
console.log(result);