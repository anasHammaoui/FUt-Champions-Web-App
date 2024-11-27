// add a player
document.getElementById("add-btn").addEventListener("click",function (){
    document.querySelector(".form-adding").classList.remove("hide");
console.log(document.querySelector(".form-adding"))
})
document.querySelector(".fa-xmark").addEventListener("click",()=>{
    document.querySelector(".form-adding").classList.add("hide");
})