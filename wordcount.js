var speech="i am   sumaya and java script developer";
//console.log(speech.length);
//console.log(speech[2]);
var count=0;
for(var i=0;i<speech.length;i++){
    var char=speech[i];
   if(char == " " && speech [i-1] !=""){
       count++;
   } 

}
count++;
console.log(count);
