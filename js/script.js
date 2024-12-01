// add a player
document.getElementById("add-btn").addEventListener("click",function (){
  document.querySelector(".form-title").innerHTML = "Ajouter un joueur";
  document.querySelector(".action").innerHTML = "Ajouter";
    document.querySelector(".form-adding").classList.remove("hide");
    // call add player func 
addPlayer();
console.log(document.querySelector(".form-adding"))
})
document.querySelector(".add-p").addEventListener("click",()=>{
    document.querySelector(".form-adding").classList.add("hide");

})
// show cards
document.getElementById("show-btn").addEventListener("click",function (){
  if (allPlayers.length > 0){
    document.querySelector(".view-cards").classList.remove("hide");
  } else {
    alert("Il exist aucun joueur");
  }
console.log(document.querySelector(".form-adding"))
})
document.querySelector(".out-card").addEventListener("click",()=>{
    document.querySelector(".view-cards").classList.add("hide");

})
// affichr joueur cards 
let showCards = document.querySelector(".all-cards");
// set up variables
let gkForm = document.querySelector(".gk-form");
let pForm = document.querySelector(".other");
let allPlayers= JSON.parse(localStorage.getItem("allPlayers")) || [];
let theSelect = document.getElementById("f-pos");
// add players
function addPlayer(){
  let isAdded = false;
// check if the player is goal keeper
theSelect.addEventListener("change",()=>{
  added();
  isAdded = true
});
function added(){
  {
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
          return;
        } 
        if (pName == ""){
          alert("Le nom de joueur est obligatoire");
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
          return;
        } 
        if (pName == ""){
          alert("Le nom de joueur est obligatoire");      
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
  }
}
added();
return;
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
function remove(){
  let deletePlayer = document.querySelectorAll(".delete");
  // delete card 
  deletePlayer.forEach((del,i)=>{
    del.addEventListener("click",()=>{
      console.log(allPlayers[i]);
      allPlayers.splice(i,1);
      document.querySelectorAll(".player-card")[i].remove();
      localStorage.setItem("allPlayers",JSON.stringify(allPlayers));
    })
  })
}
function edit(index){
  // check if the player is goal keeper
theSelect.addEventListener("change",edited)
function edited(){
  {
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
        allPlayers[index].player_name = pName;
         allPlayers[index].player_pos= pPos; 
         allPlayers[index].player_photo= pPho; 
         allPlayers[index].player_score= pScore; 
         allPlayers[index].player_pace= pPace; 
         allPlayers[index].player_shooting= pShoo; 
         allPlayers[index].player_passing= pPass; 
         allPlayers[index].player_dribling= pDri; 
         allPlayers[index].player_deffending= pDef;
         allPlayers[index].player_physique= pPhy; 
      alert("Le joueur a ete modifier avec succes")
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
        allPlayers[index].player_name = pName;
         allPlayers[index].player_pos= pPos; 
         allPlayers[index].player_photo= pPho; 
         allPlayers[index].player_score= pScore; 
         allPlayers[index].player_diving= pDiv; 
         allPlayers[index].player_handling= pHand; 
         allPlayers[index].player_kicking= pKick; 
         allPlayers[index].player_reflex= pRef; 
         allPlayers[index].player_speed= pSpee;
         allPlayers[index].player_positioning= pPositioning; 
      alert("Le joueur a ete modifier avec succes")
      // empty the inputs after submiting
      allInputs.forEach(input =>{
        input.value = "";
      })
      // save to local storage
      localStorage.setItem("allPlayers",JSON.stringify(allPlayers)); 
      })
    }
  }
}
edited();
}

// call chow players function 
showPlayers()
// delete player 
remove();
// edit player
document.querySelectorAll(".edit-card").forEach((card,i)=>{
  card.addEventListener("click",()=>{
    // show model 
      document.querySelector(".form-title").innerHTML = "Modifier le joueur";
      document.querySelector(".action").innerHTML = "Modifier";
      document.querySelector(".form-adding").classList.remove("hide");
      edit(i);
    console.log(document.querySelector(".form-adding"))
    // hide model 
    document.querySelector(".add-p").addEventListener("click",()=>{
      document.querySelector(".form-adding").classList.add("hide");

})
  })
})

// formations part
let formations = [
  {
    formation: "4-4-2",
    front: 2,
    middle: 4,
    last: 4,
    goal: 1,
    technique: 
      {
        front: ["ST", "ST"],
        middle: ["LM", "CM", "CM", "RM"],
        last: ["LB", "CB", "CB", "RB"],
        goal: ["GK"]
      }
    
  },
  {
    formation: "4-3-3",
    front: 3,
    middle: 3,
    last: 4,
    goal: 1,
    technique: 
    {
      front: ["LW", "ST", "RW"],
      middle: ["CM", "CM", "CM"],
      last: ["LB", "CB", "CB", "RB"],
      goal:"GK"
    }
  }
];
let formationRow = document.querySelectorAll("#row");
console.log(formationRow);
// print the formation function
function checkFormation(formaa){
  formations.forEach((forma,i)=>{
   if (forma.formation == formaa){
    // front players
    forma.technique.front.forEach(fr=>{
      formationRow[0].innerHTML += `
          <!-- player -->
         <div class="player" >
    <!-- card part for large screens -->
    <div class="player-card" data-position="${fr}">
        <div class="card-container">
            <img class="card-background" src="img/badge_gold.webp" alt="Card Background">
            <div class="card-content">
                <div class="card-header">
                    <span class="rating"></span>
                    <span class="position"></span>
                </div>
                <div class="badge-container">
                </div>
                <div class="player-name"></div>
                <div class="player-stats">
                    <div><span></span></div>
                    <div><span></span></div>
                    <div><span></span></div>
                    <div><span></span></div>
                    <div><span></span></div>
                    <div><span></span></div>
                </div>
            </div>
        </div>
    </div>
</div>

      `
    })
     // middle
     forma.technique.middle.forEach(mid=>{
      formationRow[1].innerHTML += `
          <!-- player -->
          <div class="player">
    <!-- card part for large screens -->
    <div class="player-card" data-position="${mid}">
        <div class="card-container">
            <img class="card-background" src="img/badge_gold.webp" alt="Card Background">
            <div class="card-content">
                <div class="card-header">
                    <span class="rating"></span>
                    <span class="position"></span>
                </div>
                <div class="badge-container">
                </div>
                <div class="player-name"></div>
               
            </div>
        </div>
    </div>
</div>

      `
    })
    // last players
      forma.technique.last.forEach(la=>{
        formationRow[2].innerHTML += `
            <!-- player -->
           <div class="player" >
    <!-- card part for large screens -->
    <div class="player-card" data-position="${la}">
        <div class="card-container">
            <img class="card-background" src="img/badge_gold.webp" alt="Card Background">
            <div class="card-content">
                <div class="card-header">
                    <span class="rating"></span>
                    <span class="position"></span>
                </div>
                <div class="badge-container">
                </div>
                <div class="player-name"></div>
            </div>
        </div>
    </div>
</div>

        `
      })
      // goal keeper
      document.querySelector(".goal").innerHTML = `
       <div class="player">
    <!-- card part -->
    <div class="player-card" data-position="${forma.technique.goal}">
        <div class="card-container">
            <img class="card-background" src="img/badge_gold.webp" alt="Card Background">
            <div class="card-content">
                <div class="card-header">
                    <span class="rating"></span>
                    <span class="position"></span>
                </div>
                <div class="badge-container">
                </div>
                <div class="player-name"></div>
                <div class="player-stats">
                    <div><span></span></div>
                    <div><span></span></div>
                    <div><span></span></div>
                    <div><span></span></div>
                    <div><span></span></div>
                    <div><span></span></div>
                </div>
            </div>
        </div>
    </div>
</div>

      `
   }
  })
}
// call print formation function
let formaSelect = document.querySelector("#forma");
checkFormation("4-4-2")
formaSelect.addEventListener("change",()=>{
  if (formaSelect.value == "4-4-2"){
    formationRow.forEach(forma=>{
      forma.innerHTML = "";
    })
    checkFormation("4-4-2")
  } else if (formaSelect.value == "4-3-3"){
    formationRow.forEach(forma=>{
      forma.innerHTML = "";
    })
    checkFormation("4-3-3");
  }
})

// let every player in his place
let pitchPlayers = document.querySelectorAll('[data-position]');
let theIndexPitch;
pitchPlayers.forEach((pitch,index) =>{
  pitch.addEventListener("click",()=>{
theIndexPitch = index;
    document.querySelector(".view-cards").classList.remove("hide");
    document.querySelectorAll(".view-cards .card-container").forEach((player,i)=>{
      
      player.addEventListener("click",()=>{
        console.log(i);
        pitchPlayers[theIndexPitch].innerHTML = `
           <div class="card-container">
            <img class="card-background" src="img/badge_gold.webp" alt="Card Background">
            <div class="card-content">
                <div class="card-header">
                    <span class="rating">${allPlayers[i].player_score}</span>
                    <span class="position">${allPlayers[i].player_pos}</span>
                </div>
                <div class="badge-container">
                <img src="${allPlayers[i].player_photo}" alt="image">
                </div>
                <div class="player-name">${allPlayers[i].player_name}</div>
               
            </div>
        </div>
        `
    document.querySelector(".view-cards").classList.add("hide");
        
      })
    })
  })
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