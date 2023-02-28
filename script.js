// active hover effect on clicking sort/filter button
let sortBtn = document.getElementsByClassName("sortbtn");
for (let i = 0; i < sortBtn.length; i++) {
    sortBtn[i].addEventListener("click", function () {
        let activeSort = document.getElementsByClassName("sort-active");
        activeSort[0].className = activeSort[0].className.replace(" sort-active", "");
        this.className += " sort-active";
    })
}


// explore more categories on clicking 
let moreBtn = document.getElementById("more-btn");
let moreCatg = document.getElementById("more-catg");

function catgFunction() {
    window.location.assign("/html/explore.html")
}


//see all trending post
let trBtn = document.getElementById("trBtn");
let moreTr = document.querySelector(".moreTr");
trBtn.onclick = () => {
    moreTr.classList.toggle("active");
    trBtn.style.display = "none"
}


// side menu open & close on click
let menuBtn = document.querySelector("#menuBtn");
let sideMenu = document.getElementById("side-menu");
let closeBtn = document.getElementById("closeMenu");
let menuLink = document.querySelector(".menu a");

const handleClick = () => {
    sideMenu.style.left = "0";
    setTimeout(() => {
        closeBtn.style.display = "block"
    }, 400);
}
const closeSide = () => {
    sideMenu.style.left = "-100%";
    setTimeout(() => {
        closeBtn.style.display = "none"
    }, 400);
}
menuBtn.addEventListener("click", handleClick);
closeBtn.addEventListener("click", closeSide);
menuLink.addEventListener("click", closeSide);


// Popup open on click
let signBox = document.querySelector("#signBox");
let popBtn = document.querySelector("#closeBox");

const popUp = () => {
    signBox.classList.toggle("active");
    // console.log("pop open")
}
popBtn.addEventListener("click", popUp);


// Popup close when clicked outside 
const closePopup = (e) => {
    if (e.target == signBox && e.target == popBtn) {
        signBox.classList.toggle("active");
        //    console.log("pop close")
    }
}
window.addEventListener("click", closePopup);