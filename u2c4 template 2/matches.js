// write js code here corresponding to matches.html


var matchArr =JSON.parse(localStorage.getItem("schedule"))

var favArr= JSON.parse(localStorage.getItem("favourites")) || []



matchArr.forEach(function(ele){
    // document.querySelector("tbody").innerHTML=""

  var box=document.createElement("div")
    var tr =document.createElement("tr");
    var td1 =document.createElement("td");
    td1.innerText=ele.matchN;
    var td2 =document.createElement("td");
    td2.innerText=ele.teamA;
    var td3 =document.createElement("td");
    td3.innerText=ele.teamB;
    var td4 =document.createElement("td");
    td4.innerText=ele.date;
    var td5 =document.createElement("td");
    td5.innerText=ele.venue;
    var td6 =document.createElement("td");
    td6.innerText="Favourite";
    td6.style.color="yellow";
    td6.addEventListener("click",function(){
        favdata(ele)
    })
    
    tr.append(td1,td2,td3,td4,td5,td6);
    box.append(tr)
    document.querySelector("tbody").append(box);
    
});
localStorage.setItem("favourites",JSON.stringify(matchArr))
function favdata(ele){
   favArr.push(ele)
    localStorage.setItem("favourites",JSON.stringify(favArr))
    console.log(favArr);
    window.location.href="favourites.html"
}





