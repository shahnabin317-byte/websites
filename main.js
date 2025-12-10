const list = document.querySelector(".navlist");
const humburger = document.querySelector(".fa-bars");


hamburger.addEventListener("click", ()=>{

    hamburger.classlist.toggle("fa-x");
    list.classList.toggle("navlist-active");
})