function functionCheck(number){
    
for(var i=0;i<number.length;i++)
{
    var element=number[i];
    console.log(element);
   }
}
functionCheck([20,22,30]);



//using return

function functionCheck(number){
    var larger=number[0];
    for(var i=0;i<number.length;i++)
    {
        var element=number[i];
if(element>larger){

       larger=element ;
    }
}
return larger;
}
var output=functionCheck([22,100,45]);
console.log(output);