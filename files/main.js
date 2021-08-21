

let cont = document.querySelector(".container")

cont.addEventListener("scroll", (event) => {
    let scroll = cont.scrollTop;

    let limit = cont.scrollHeight - cont.clientHeight;


    let nav = document.querySelector("nav");

    if(scroll == 0){
      nav.style.visibility = "visible";
      nav.classList.remove("scroll");  
    }
    if((scroll >= limit/2) & (scroll < limit)){
        nav.style.visibility = "hidden";

    }
    else if(scroll == limit){
        nav.style.visibility = "visible";
        nav.classList.add("scroll");  
    }
});


let btn = document.querySelector(".ham");
let menu = document.querySelector(".btn");

function toggle(){
    menu.classList.toggle('hide');
    menu.classList.toggle('shown');
}


btn.addEventListener("click",toggle);

menu.addEventListener("click",toggle);

