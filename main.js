let nav = document.querySelector("nav");
let Menu = document.querySelector("nav button");
let image = document.querySelector("nav button img");
let body = document.querySelector("body");

Menu.onclick = function() {
   if (Menu.classList.contains("clicked")) {
      nav.classList.remove("show");
      image.setAttribute("src", "./images/icon-menu.svg");
      body.classList.remove("absolute-position");
      Menu.classList.remove("clicked");
   } else {
      setTimeout(() => {
         nav.classList.add("show");
         image.setAttribute("src", "./images/icon-menu-close.svg");
         Menu.classList.add("clicked");
      },200);
      setTimeout(()=>{
         body.classList.add("absolute-position");
      },100)
   }
};
