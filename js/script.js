// add a player
document.getElementById("add-btn").addEventListener("click",function (){
    document.querySelector(".form-adding").classList.remove("hide");
console.log(document.querySelector(".form-adding"))
})
document.querySelector(".add-p").addEventListener("click",()=>{
    document.querySelector(".form-adding").classList.add("hide");
})
// show cards
document.getElementById("show-btn").addEventListener("click",function (){
    document.querySelector(".view-cards").classList.remove("hide");
console.log(document.querySelector(".form-adding"))
})
document.querySelector(".out-card").addEventListener("click",()=>{
    document.querySelector(".view-cards").classList.add("hide");
})
// affichr joueur cards 
let showCards = document.querySelector(".all-cards");
showPlayers();
async function showPlayers(){
    try {
        let response = await fetch("js/players.json");
        if (!response.ok){
            throw new Error("error to fetch");
        }
        let data = await response.json();
        // show players in cards
        console.log(data);
        data.players.forEach((play,i)=>{
           if (play.position != "GK"){
            showCards.innerHTML += `
            <!-- card -->
           <div class="player-card">
               <div class="card-container">
                 <img class="card-background" src="img/badge_gold.webp" alt="Card Background">
                 <div class="card-content">
                   <div class="card-header">
                     <span class="rating">${play.rating}</span>
                     <span class="position">${play.position}</span>
                   </div>
                   <div class="badge-container">
                     <img class="badge" src="${play.photo}" alt="Badge">
                   </div>
                   <div class="player-name">${play.name}</div>
                   <div class="player-stats">
                     <div>PAC <span>${play.pace}</span></div>
                     <div>SHO <span>${play.shooting}</span></div>
                     <div>PAS <span>${play.passing}</span></div>
                     <div>DRI <span>${play.dribbling}</span></div>
                     <div>DEF <span>${play.defending}</span></div>
                     <div>PHY <span>${play.physical}</span></div>
                   </div>
                 </div>
               </div>
             </div>
       `
           } else {
            showCards.innerHTML += `
            <!-- card -->
           <div class="player-card">
               <div class="card-container">
                 <img class="card-background" src="img/badge_gold.webp" alt="Card Background">
                 <div class="card-content">
                   <div class="card-header">
                     <span class="rating">${play.rating}</span>
                     <span class="position">${play.position}</span>
                   </div>
                   <div class="badge-container">
                     <img class="badge" src="${play.photo}" alt="Badge">
                   </div>
                   <div class="player-name">${play.name}</div>
                   <div class="player-stats">
                   <div>DIV <span>${play.diving}</span></div>
                   <div>HAN <span>${play.handling}</span></div>
                   <div>KIC <span>${play.kicking}</span></div>
                   <div>REF <span>${play.reflexes}</span></div>
                   <div>SPE <span>${play.speed}</span></div>
                     <div>POS <span>${play.positioning}</span></div>
                   </div>
                 </div>
               </div>
             </div>
       `
           }
        })
    } catch (error){
        console.error(error)
    }
}


/*
GK (Goalkeeper)
RB (Right Back)
CB (Center Back)
CB (Center Back)
LB (Left Back)
CDM (Central Defensive Midfield)
CM (Central Midfield)
CM (Central Midfield)
RW (Right Wing)
LW (Left Wing)
ST (Striker)
*/