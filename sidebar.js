export function sidebar() {
    
    const menubtn  = document.getElementById("hamburgermenu");
    const sidebar = document.querySelector(".sidebar");
    
    menubtn.addEventListener("click",()=>{
        sidebar.classList.toggle("active")
    })
    
}
