export function unitinput() {
    const unitinput =  document.getElementById("unitinput");
    const addunit = document.getElementById("addunit");
    const deleteunit = document.getElementById("deleteunit");
    const unitresults = document.getElementById("unitresults");



    function addunitfunc() {
        const unitvalue = unitinput.value.trim();

        if(!unitvalue){
            alert("please enter unit that your doing");
            return;
        }
        const li = document.createElement("li");
        li.textContent = unitvalue;
        unitresults.appendChild(li);
        unitresults.style.display = "block"

        unitinput.value="";
    }

    


    function deleteunitfunc() {
        if(unitresults.lastElementChild){
            unitresults.lastElementChild.remove();
        }
    }
    
    addunit.addEventListener("click",addunitfunc);

    deleteunit.addEventListener("click",deleteunitfunc);

}
