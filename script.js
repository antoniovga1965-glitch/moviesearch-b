const darkmodetoggle = document.getElementById("darkmodetoggle");
const body = document.getElementById("results")
darkmodetoggle.addEventListener("click",()=>{
body.classList.toggle("darkmode");
})

const searchinput = document.getElementById("searchInput");
const searchbutton = document.getElementById("searchbtn");
const results = document.getElementById("results");

savedmovies= JSON.parse(localStorage.getItem("searched"))||[];

async function searchmovie() {

    const moviesearch = searchinput.value.trim();
     if(!moviesearch){
        results.innerHTML = "please seach a movie";
        return;
     }

    try{
        const Url = `https://www.omdbapi.com/?s=${moviesearch}&apikey=35e6dea8`;
        const response  = await fetch(Url);
        if(!response.ok){throw new Error("network issue")};
        const data = await response.json();
        const found = data.Search;
         savedmovies.push(moviesearch);

         localStorage.setItem("searched",JSON.stringify(savedmovies));

        console.log(found);

        results.innerHTML = "";

        found.forEach(movie=> {
            const movieEl = document.createElement("div");
            movieEl.style.width="200";
            movieEl.style.textAlign = "center";
            movieEl.style.display ="inline-block";
            movieEl.style.margin="10px";
            
            movieEl.classList.add("movie-card")

            movieEl.innerHTML = `
            <img src="${movie.Poster}" alt="${movie.Title}" width="200px">
            <h2>${movie.Title}</h2> 
            <p>${movie.Year}</p>`
             results.appendChild(movieEl);
            ;

           
            
        });

        searchinput.value ="";
        

    }
    catch(error){
results.innerHTML = "failed to fetch";
    }
    
}
searchbutton.addEventListener("click",searchmovie);