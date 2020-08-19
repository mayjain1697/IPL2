function topEconomicalBowlerOfEachYear(matches, deliveries)
{
    var eco={};
    for(let year of matches){
        if(eco.hasOwnProperty(year.season)==false){
    var overs={};
    var runs={};
    for(let mat of matches){
for(let del of deliveries)
{    
    if(mat.id===del.match_id && mat.season===year.season){
      if(runs[del.bowler])
        {
        runs[del.bowler]+=parseInt(del.total_runs);
        if(del.ball=='1'){
            overs[del.bowler]+=1;
        }
    }
     else{
        runs[del.bowler]=parseInt(del.total_runs);
        overs[del.bowler]=1;
         }
     }
}
    }
var result={};
for(let i in runs){
result[i]=parseFloat((runs[i]/overs[i]).toFixed(2));
}
    let arrEco=Object.values(result);
arrEco.sort(function(a,b){ return a-b });       
 var last={};
 for(let i=0;i<10;i++){
 for(let j in result){
     if(result[j]==arrEco[i]){
     last[j]=arrEco[i];
 }
}
}
eco[year.season]=last;
        }
    }
return eco;
}
module.exports=topEconomicalBowlerOfEachYear;