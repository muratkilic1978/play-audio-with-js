const myArray = ["lion","cougar","bark"]
document.addEventListener("DOMContentLoaded", init);

function init(){
    myArray.forEach(function(item){
        let div = document.createElement("div");
        div.setAttribute("class","animal " + item);
        div.innerText = item.toUpperCase();
        div.addEventListener("click", function(){
            playit(item);
        })
    document.body.appendChild(div);  
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

