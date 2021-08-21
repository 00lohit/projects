window.addEventListener("scroll", (event) => {
    let scroll = Math.floor(this.scrollY);
    console.log(scroll)
    
    let limit = document.body.offsetHeight - window.innerHeight;

    let nav = document.querySelector("nav");

    let tag = document.activeElement.id;

    console.log(tag);

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