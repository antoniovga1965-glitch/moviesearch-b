export function comingexams() {
    const checkupcomingbtn= document.getElementById("checkupcomingbtn");
    const upcomingexamsresults = document.getElementById('upcomingexamsresults');


 const upcomingexams = ["MICROBIOLOGY","INVERTEBRATE BIOLOGY","CHARACTER EDUCATION","COMMUNICATION SKILLS"];

 function checkexams() {
    const examinations = Math.floor(Math.random()*upcomingexams.length);
    const exam = upcomingexams[examinations];
    upcomingexamsresults.innerHTML = exam;
    upcomingexamsresults.style.display = "block"
 }
 checkupcomingbtn.addEventListener("click",checkexams);
    
}
