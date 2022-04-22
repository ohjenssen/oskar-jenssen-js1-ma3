// Question 2
// Make a call to the Rawg API.

const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=f793338f560748fd91f5058f06a6f649";
const games = document.querySelector(".games");

async function getGames(){
    try {
        const response = await fetch(url);
        const data = await response.json();
    
        games.innerHTML = "";
    
        for(let i = 0; i < 8; i++){
            games.innerHTML += `<div class="section">
                                    <div>${data.results[i].name}</div>
                                    <div>${data.results[i].rating}</div>
                                    <div>${data.results[i].tags.length}</div>
                                </div>`;
        }
    } catch (error) {
        games.innerHTML = `<div class="error">Something went wrong.</div>`;
        console.log("Something went wrong.");
        console.log(error);
    }

}

getGames();