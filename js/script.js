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

// set up variables
let gkForm = document.querySelector(".gk-form");
let pForm = document.querySelector(".other");
let allPlayers= JSON.parse(localStorage.getItem("allPlayers")) || [];
let theSelect = document.getElementById("f-pos");
// add players
function addPlayer(){
// check if the player is goal keeper
theSelect.addEventListener("change",()=>{
  // not gk case
  if (theSelect.value != "GK"){
    pForm.classList.remove("hide")
    gkForm.classList.add("hide")
    pForm.addEventListener("submit",(e)=>{
      // get all data
    const pPos = document.getElementById("f-pos").value.trim();
    const pName = document.getElementById("1").value.trim().toUpperCase();
    const pPho = document.getElementById("2").value.trim();
    const pScore = document.getElementById("3").value.trim();
    const pPace = document.getElementById("4").value.trim();
    const pShoo = document.getElementById("5").value.trim();
    const pPass = document.getElementById("6").value.trim();
    const pDri = document.getElementById("7").value.trim();
    const pDef = document.getElementById("8").value.trim();
    const pPhy = document.getElementById("9").value.trim();
    let allInputs = document.querySelectorAll("input");
      // FORM VALIDATION
      if(isNaN(parseInt(pScore))|| parseInt(pScore) < 0 ||parseInt(pScore) > 99 && isNaN(parseInt(pPace))|| parseInt(pPace) < 0 ||parseInt(pPace) > 99 && isNaN(parseInt(pShoo))|| parseInt(pShoo) < 0 ||parseInt(pShoo) > 99 && isNaN(parseInt(pPass))|| parseInt(pPass) < 0 ||parseInt(pPass) > 99 && isNaN(parseInt(pPass))|| parseInt(pPass) < 0 ||parseInt(pPass) > 99  && isNaN(parseInt(pDri))|| parseInt(pDri) < 0 ||parseInt(pDri) > 99 && isNaN(parseInt(pPhy))|| parseInt(pPhy) < 0 ||parseInt(pPhy) > 99 && isNaN(parseInt(pDef))|| parseInt(pDef) < 0 ||parseInt(pDef) > 99 ){
        alert("tous les champs doivent être corrects et remplis");
        e.preventDefault()
        return;
      } 
      if (pName == ""){
        alert("Le nom de joueur est obligatoire");
        e.preventDefault()
    
        return;
      }
    e.preventDefault();
      // set data to a variable 
    allPlayers.push({
      player_name : pName,
       player_pos: pPos, 
       player_photo: pPho, 
       player_score: pScore, 
       player_pace: pPace, 
       player_shooting: pShoo, 
       player_passing: pPass, 
       player_dribling: pDri, 
       player_deffending: pDef,
       player_physique: pPhy, 
    })
    alert("Le joueur a ete ajoutee avec succes")
    // empty the inputs after submiting
    allInputs.forEach(input =>{
      input.value = "";
    })
    // save to local storage
    localStorage.setItem("allPlayers",JSON.stringify(allPlayers)); 
    })
  } else {
    pForm.classList.add("hide")
    gkForm.classList.remove("hide")
    gkForm.addEventListener("submit",(e)=>{
      // get all data
    const pPos = document.getElementById("f-pos").value.trim();
    const pName = document.getElementById("11").value.trim().toUpperCase();
    const pPho = document.getElementById("22").value.trim();
    const pScore = document.getElementById("33").value.trim();
    const pDiv = document.getElementById("44").value.trim();
    const pHand = document.getElementById("55").value.trim();
    const pKick = document.getElementById("66").value.trim();
    const pRef = document.getElementById("77").value.trim();
    const pSpee = document.getElementById("88").value.trim();
    const pPositioning = document.getElementById("99").value.trim();
    let allInputs = document.querySelectorAll("input");
      // FORM VALIDATION
      if(isNaN(parseInt(pScore))|| parseInt(pScore) < 0 ||parseInt(pScore) > 99 && isNaN(parseInt(pDiv))|| parseInt(pDiv) < 0 ||parseInt(pDiv) > 99 && isNaN(parseInt(pHand))|| parseInt(pHand) < 0 ||parseInt(pHand) > 99 && isNaN(parseInt(pKick))|| parseInt(pKick) < 0 ||parseInt(pKick) > 99 && isNaN(parseInt(pKick))|| parseInt(pKick) < 0 ||parseInt(pKick) > 99  && isNaN(parseInt(pRef))|| parseInt(pRef) < 0 ||parseInt(pRef) > 99 && isNaN(parseInt(pPositioning))|| parseInt(pPositioning) < 0 ||parseInt(pPositioning) > 99 && isNaN(parseInt(pSpee))|| parseInt(pSpee) < 0 ||parseInt(pSpee) > 99 ){
        alert("tous les champs doivent être corrects et remplis");
        e.preventDefault()
        return;
      } 
      if (pName == ""){
        alert("Le nom de joueur est obligatoire");
        e.preventDefault()
    
        return;
      }
    e.preventDefault();
      // set data to a variable 
    allPlayers.push({
      player_name : pName,
       player_pos: pPos, 
       player_photo: pPho, 
       player_score: pScore, 
       player_diving: pDiv, 
       player_handling: pHand, 
       player_kicking: pKick, 
       player_reflex: pRef, 
       player_speed: pSpee,
       player_positioning: pPositioning, 
    })
    alert("Le joueur a ete ajoutee avec succes")
    // empty the inputs after submiting
    allInputs.forEach(input =>{
      input.value = "";
    })
    // save to local storage
    localStorage.setItem("allPlayers",JSON.stringify(allPlayers)); 
    })
  }
})
}
// show players cards
function showPlayers(){
allPlayers.forEach(play=>{
  if (play.player_pos != "GK"){
   showCards.innerHTML += `
   <!-- card -->
  <div class="player-card">
  <div class="card-settings">
      <div class="edit-card">
        <i class="fa-solid fa-pen"></i>
      </div>
      <div class="delete">
        <i class="fa-solid fa-xmark"></i>
      </div>
    </div>
      <div class="card-container">
        <img class="card-background" src="img/badge_gold.webp" alt="Card Background">
        <div class="card-content">
          <div class="card-header">
            <span class="rating">${play.player_score}</span>
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
            <div>DEF <span>${play.player_deffending}</span></div>
            <div>PHY <span>${play.player_physique}</span></div>
          </div>
        </div>
      </div>
    </div>
`
  } else {
    showCards.innerHTML += `
    <!-- card -->
   <div class="player-card">
   <div class="card-settings">
       <div class="edit-card">
         <i class="fa-solid fa-pen"></i>
       </div>
       <div class="delete">
         <i class="fa-solid fa-xmark"></i>
       </div>
     </div>
       <div class="card-container">
         <img class="card-background" src="img/badge_gold.webp" alt="Card Background">
         <div class="card-content">
           <div class="card-header">
             <span class="rating">${play.player_score}</span>
             <span class="position">${play.player_pos}</span>
           </div>
           <div class="badge-container">
             <img class="badge" src="${play.player_photo}" alt="Badge">
           </div>
           <div class="player-name">${play.player_name}</div>
           <div class="player-stats">
             <div>DIV <span>${play.player_diving}</span></div>
             <div>HAN <span>${play.player_handling}</span></div>
             <div>kic <span>${play.player_kicking}</span></div>
             <div>POS <span>${play.player_positioning}</span></div>
             <div>REF <span>${play.player_reflex}</span></div>
             <div>SPE <span>${play.player_speed}</span></div>
           </div>
         </div>
       </div>
     </div>
 `
  }
})
}
// edit & remove player function
function editRemove(){
  let editPlayer = document.querySelectorAll(".edit-card");
  let deletePlayer = document.querySelectorAll(".delete");
  // delete card 
  deletePlayer.forEach((del,i)=>{
    del.addEventListener("click",()=>{
      console.log(allPlayers[i]);
      allPlayers.splice(i,1);
      localStorage.setItem("allPlayers",JSON.stringify(allPlayers));
    })
  })
  // edit card 
editPlayer.forEach((edit,i)=>{
  edit.addEventListener("click",()=>{
    
  })
})
}
// call add player func 
addPlayer();
// call chow players function 
showPlayers()
editRemove();
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