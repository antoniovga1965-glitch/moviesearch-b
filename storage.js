export function localstorage(weathervalue,unitvalue,textvalue) {
    let saveddetails = JSON.parse(localStorage.getItem("savedping"))||[];


    saveddetails.push({weather:weathervalue, unit:unitvalue,notes:textvalue});

localStorage.setItem("savedping",JSON.stringify(saveddetails));



function deletefromlocalstorage(index){
    let saveddetails = JSON.parse(localStorage.getItem("savedping"))||[];

    saveddetails.splice(index,1);
    localStorage.setItem("savedping",JSON.stringify(saveddetails));
}
}
