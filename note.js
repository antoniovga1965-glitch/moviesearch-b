export function notefunc() {
    const textinput = document.getElementById("textinput");
    const addtextbtn = document.getElementById("addtext");
    const Deletetextbtn = document.getElementById("Deletetext");
    const noteresults = document.getElementById("noteresults");


    function addtextfunc() {
        const textvalue = textinput.value.trim();

        if(!textvalue){
            alert("please write a note");
            return;
        }

        const li = document.createElement("li");
        li.textContent = textvalue;
        noteresults.appendChild(li);
        noteresults.style.display="block"

        textinput.value = "";
    }
    addtextbtn.addEventListener("click",addtextfunc);


    function deletenotefunc() {
    if (!noteresults.lastElementChild) return;

    noteresults.lastElementChild.remove();

}
        Deletetextbtn.addEventListener("click",deletenotefunc);


    }


