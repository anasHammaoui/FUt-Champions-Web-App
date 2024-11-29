// add a player
document.getElementById("add-btn").addEventListener("click",function (){
    document.querySelector(".form-adding").classList.remove("hide");
    document.querySelector(".body").classList.add("stop-scroll");
console.log(document.querySelector(".form-adding"))
})
document.querySelector(".add-p").addEventListener("click",()=>{
    document.querySelector(".form-adding").classList.add("hide");
    document.querySelector(".body").classList.remove("stop-scroll");

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
// showPlayers();
// let data;
// async function showPlayers(){
//     try {
//         let response = await fetch("js/players.json");
//         if (!response.ok){
//             throw new Error("error to fetch");
//         }
//          data = await response.json();
//          localStorage.setItem("finalPlayers",JSON.stringify(data));
//         // show players in cards
//           data.players.forEach((play,i)=>{
//            if (play.position != "GK"){
//             showCards.innerHTML += `
//             <!-- card -->
//            <div class="player-card">
//                <div class="card-container">
//                  <img class="card-background" src="img/badge_gold.webp" alt="Card Background">
//                  <div class="card-content">
//                    <div class="card-header">
//                      <span class="rating">${play.rating}</span>
//                      <span class="position">${play.position}</span>
//                    </div>
//                    <div class="badge-container">
//                      <img class="badge" src="${play.photo}" alt="Badge">
//                    </div>
//                    <div class="player-name">${play.name}</div>
//                    <div class="player-stats">
//                      <div>PAC <span>${play.pace}</span></div>
//                      <div>SHO <span>${play.shooting}</span></div>
//                      <div>PAS <span>${play.passing}</span></div>
//                      <div>DRI <span>${play.dribbling}</span></div>
//                      <div>DEF <span>${play.defending}</span></div>
//                      <div>PHY <span>${play.physical}</span></div>
//                    </div>
//                  </div>
//                </div>
//              </div>
//        `
//            } else {
//             showCards.innerHTML += `
//             <!-- card -->
//            <div class="player-card">
//                <div class="card-container">
//                  <img class="card-background" src="img/badge_gold.webp" alt="Card Background">
//                  <div class="card-content">
//                    <div class="card-header">
//                      <span class="rating">${play.rating}</span>
//                      <span class="position">${play.position}</span>
//                    </div>
//                    <div class="badge-container">
//                      <img class="badge" src="${play.photo}" alt="Badge">
//                    </div>
//                    <div class="player-name">${play.name}</div>
//                    <div class="player-stats">
//                    <div>DIV <span>${play.diving}</span></div>
//                    <div>HAN <span>${play.handling}</span></div>
//                    <div>KIC <span>${play.kicking}</span></div>
//                    <div>REF <span>${play.reflexes}</span></div>
//                    <div>SPE <span>${play.speed}</span></div>
//                      <div>POS <span>${play.positioning}</span></div>
//                    </div>
//                  </div>
//                </div>
//              </div>
//        `
//            }
//         })
//         // add player
//     } catch (error){
//         console.error(error)
//     }
// }
// add players
let theForm = document.getElementById("theForm");
let allPlayers= JSON.parse(localStorage.getItem("allPlayers")) || [];
theForm.addEventListener("submit",(e)=>{
e.preventDefault();
// get all data
const pPos = document.getElementById("f-pos").value.trim().toUpperCase( );
  const pName = document.getElementById("1").value.trim().toUpperCase( );
  const pPho = document.getElementById("2").value.trim();
  const pFlag = document.getElementById("3").value.trim().toUpperCase( );
  const pPace = document.getElementById("4").value.trim().toUpperCase( );
  const pShoo = document.getElementById("5").value.trim().toUpperCase( );
  const pPass = document.getElementById("6").value.trim().toUpperCase( );
  const pDri = document.getElementById("7").value.trim().toUpperCase();
  const pPhy = document.getElementById("6").value.trim().toUpperCase();
  let allInputs = document.querySelectorAll("input");
  // set data to a variable 
allPlayers.push({
  player_name : pName,
   player_pos: pPos, 
   player_photo: pPho, 
   player_flag: pFlag, 
   player_pace: pPace, 
   player_shooting: pShoo, 
   player_passing: pPass, 
   player_dribling: pDri, 
   player_physique: pPhy, 
})
console.log(allPlayers)
// empty the inputs after submiting
allInputs.forEach(input =>{
  input.value = "";
})
// save to local storage
localStorage.setItem("allPlayers",JSON.stringify(allPlayers)); 
})

// show players cards

allPlayers.forEach(play=>{
    if (play.player_pos != "GK"){
     showCards.innerHTML += `
     <!-- card -->
    <div class="player-card">
        <div class="card-container">
          <img class="card-background" src="img/badge_gold.webp" alt="Card Background">
          <div class="card-content">
            <div class="card-header">
              <span class="rating">99</span>
              <span class="position">${play.player_pos}</span>
            </div>
            <div class="badge-container">
              <img class="badge" src="${play.player_photo}" alt="Badge">
            </div>
            <div class="player-name">${play.player_name}</div>
            <div class="player-stats">
              <div>PAC <span>${play.player_pace}</span></div>
              <div>SHO <span>${play.player_shooting}</span></div>
              <div>PAS <span>${play.player_passing}</span></div>
              <div>DRI <span>${play.player_dribling}</span></div>
              <div>DEF <span>${play.player_physique}</span></div>
            </div>
          </div>
        </div>
      </div>
`
    }
 })

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