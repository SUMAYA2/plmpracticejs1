var num=[2,5,8,3,2,3,];
var uniq=[];
for(var i=0;i<num.length;i++){
    var element=num[i];
    var index=uniq.indexOf(element);
    if(index== -1){
    uniq.push(element);
}

}
console.log(uniq);
