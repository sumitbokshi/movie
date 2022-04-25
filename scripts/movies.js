// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page
let search_bar=document.getElementById("movies");

let id;



async function searchMovies() {
    try {
        const query=document.getElementById("query").value;
        const res= await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=a443c913&s=${query}`)
        const data= await res.json()
        const movies = data.Search

        return movies
    }

    catch (err) {
        console.log("err:",err)
    }

}
function appendMovies(data) {
    search_bar.innerHTML=null;
    data.forEach(function (el) {

        let img=document.createElement("img");
        img.src=el.Poster;

        let p=document.createElement("p");
        p.innerText=el.Title;
         
       let button=document.createAttribute("button");
       button.innerText="Book movies";


        movies.append(img,p,button);
    });
}

async function main() {
    let data=await searchMovies();

    if(data===undefined){
        return false;
    }
    appendMovies(data);
}

function debounce(func,delay) {
    if(id) {
        clearTimeout(id);
    }

    id=setTimeout(function (){
        func();
    },delay);
}










