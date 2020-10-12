var business=950;
var minister=650;
var sochib=550;
/**if(business>minister){
    if(business>sochib){
        console.log("Business max");

    }
    else{
        console.log("sochib max")

    }
}
else{
    if(minister>sochib){
        console.log("minister max");
    }
    else{
        console.log("sochib max");
    }
}*/
//other easy process using Math.max
var max=Math.max(business,minister,sochib);
console.log(max);
