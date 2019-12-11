const animals = document.querySelectorAll(".animal");
console.log(animals);

for(let i=0; i<animals.length;i++){
    animals[i].addEventListener("click", function(){
        let animal = this.innerHTML;
        let lowerAnimal = animal.toLowerCase();
        makeSound(lowerAnimal);
        addStyle(lowerAnimal);
    })
}

function makeSound(name){
    console.log(name);
    switch(name){
        case "lion": 
            let lionSound = new Audio("mp3/lion.mp3");
            lionSound.play();
            break;
        case "cougar":
            let cougarSound = new Audio("mp3/cougar.mp3");
            cougarSound.play();
            break;
        case "dog":
            let dogSound = new Audio("mp3/bark.mp3");
            dogSound.play();
            break;
    }
}

function addStyle(name){
    let activeElem = document.querySelector("."+name);
    console.log(activeElem);
    activeElem.classList.add("active");
    setTimeout(function(){
        activeElem.classList.remove("active");
    }, 300)
}