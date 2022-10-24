function menuDiv(){
    let menuBefore = document.querySelector(".menuBtnOpen");
    let menuAfter = document.querySelector(".menu");
    let menuCrossBtn = document.querySelector(".menuBtnClose");
    let darkBg = document.querySelector("body");


    menuBefore.addEventListener("click",()=>{
        menuAfter.classList.add("action");
        darkBg.classList.add("darkbgactive");
    })
    menuCrossBtn.addEventListener("click",()=>{
        menuAfter.classList.remove("action");
        darkBg.classList.remove("darkbgactive");
       
    })

    // submenu css design with javscript
    // feature link sub menu
    let subMenuLink = document.querySelector("#sub-menu");
    console.log(subMenuLink);
    let subMenuItems = document.querySelector(".sub-ft-menu");
    console.log(subMenuItems);

    subMenuLink.addEventListener("click",()=>{
        subMenuItems.classList.toggle("menu-toggle");
    })

    // company link sub menu
    let subMenucomLink = document.querySelector("#com-menu");
    console.log(subMenuLink);
    let subMenucomItems = document.querySelector(".sub-com-menu");
    console.log(subMenuItems);

    subMenucomLink.addEventListener("click",()=>{
        subMenucomItems.classList.toggle("menu-toggle");
    })
}

menuDiv();