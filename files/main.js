window.addEventListener("scroll", (event) => {
    let scroll = Math.floor(this.scrollY);
    console.log(scroll)
    
    let limit = document.body.offsetHeight - window.innerHeight;

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


let btn = document.querySelector(".ham")

btn.addEventListener("click",()=>{
    let menu = document.querySelector(".btn");
    menu.classList.toggle('hide');
    menu.classList.toggle('shown');
})