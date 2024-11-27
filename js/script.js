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