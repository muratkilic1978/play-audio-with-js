const animals = document.querySelectorAll(".animal");
console.log(animals);

for(let i=0; i<animals.length;i++){
    animals[i].addEventListener("click", function(){
        let animal = this.innerHTML;
        let lowerAnimal = animal.toLowerCase();
        playit(lowerAnimal);
    })
}


function playit(name){
    let activeElem = document.querySelector("."+name);
    let Sound = new Audio("mp3/"+name+".mp3");
    Sound.play();
    activeElem.classList.add("active");
    setTimeout(function(){
        activeElem.classList.remove("active");
    }, 300)
}

