const pages = document.querySelectorAll(".page")
const header = document.querySelector("header")
const nbPages = pages.length
let pageActive = 1



window.onload = () => {

    for (let page of pages) {
        page.style.display = "none"
    }

   document.querySelector(".page").style.display = "initial"


 var boutons = document.querySelectorAll(".next")

    for (let bouton of boutons) {
        bouton.addEventListener("click", pageSuivante)
    }


    boutons = document.querySelectorAll(".prev")

    for (let bouton of boutons) {
        bouton.addEventListener("click", pagePrecedente)
    }

}


    var imgec = document.querySelector("#imgec")
    imgec.addEventListener("click", pageSuivante )


    var imgvi = document.querySelector("#imgvi")
    imgvi.addEventListener("click", pageSuivante )


function pageSuivante()
{
    for (let page of pages) {
        page.style.display = "none"
    }

    

    pages[pageActive].style.display = "initial"
    pageActive++

    document.querySelector(".active").classList.remove("active")


    


}


function pagePrecedente() {

    for (let page of pages) {
        page.style.display = "none"
    }

    this.parentElement.previousElementSibling.style.display = "initial"


    document.querySelector(".active").classList.remove("active")


    pageActive--
}

