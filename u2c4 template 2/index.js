// write js code here corresponding to index.html
// You should add submit event on the form



document.querySelector("form").addEventListener("submit",submitform);
matchArr=JSON.parse(localStorage.getItem("schedule"))|| []
function submitform(){
    event.preventDefault();

    schObj={
        matchN:masaiForm.matchNum.value,
        teamA:masaiForm.teamA.value,
        teamB:masaiForm.teamB.value,
        date:masaiForm.date.value,
        venue:masaiForm.venue.value,

    }
    console.log(schObj)
    matchArr.push(schObj);
    localStorage.setItem("schedule",JSON.stringify(matchArr))
    window.location.href="matches.html"

}