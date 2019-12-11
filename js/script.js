const animals = document.querySelectorAll(".animal");
console.log(animals);

for(let i=0; i<animals.length;i++){
    animals[i].addEventListener("click", function(){
        let animal = this.innerHTML;
        console.log(animal);
    })
}