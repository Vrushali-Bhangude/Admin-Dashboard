const sideMenu =document.querySelector("aside");
const menuBtn=document.querySelector("#menu_bar");
const closeBtn =document.querySelector("#close_btn");

const theamToggle=document.querySelector(".theam-toggle");

menuBtn.addEventListener("click",()=>{
    sideMenu.style.display="block";
})
closeBtn.addEventListener("click",()=>{
    sideMenu.style.display="none";
})

theamToggle.addEventListener("click",()=>{
    document.body.classList.toggle('dark-theme-variables')
    theamToggle.querySelector('span:nth-child(1').classList.toggle('active')
    theamToggle.querySelector('span:nth-child(1').classList.toggle('active')
})