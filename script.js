const cat = document.getElementById("cat");
const cactus = document.getElementById("cactus");

document.addEventListener("keydown", function(event){
    jump();
});

function jump(){
    if(cat.classList != "jump"){
        cat.classList.add("jump");
    } 
    setTimeout( function(){
        cat.classList.remove ("jump")
    },500)
}   

let isAlive = setInterval ( function(){
    let catTop = parseInt(window.getComputedStyle(cat).getPropertyValue("top"));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

    if (cactusLeft < 36 && cactusLeft > 0 && catTop >= 140){
        alert("Котик в кактусе")
    }
})