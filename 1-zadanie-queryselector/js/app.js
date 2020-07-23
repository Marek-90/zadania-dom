document.addEventListener('DOMContentLoaded', function () {

    //------------------   1    --------------------------//    <------ ZROBIONE


    const nr1 = document.querySelectorAll(".first-attempt")
    for (let el of nr1) {
        el.classList.add("active")
    }
    //------------------   2    --------------------------//

    const nr2 = document.querySelectorAll("[data-border]")

    nr2.forEach((el) => {
        el.setAttribute("data-el-active", "")

    });

    //------------------   3    --------------------------//    <------ ZROBIONE

    const nr3 = document.querySelectorAll(".hack")
    for (let el of nr3) {
        el.setAttribute("title", "hacking")
    }


    //------------------   4    --------------------------//    <------ ZROBIONE

    const nr4 = document.querySelectorAll(".hijack")
    for (let el of nr4) {
        el.removeAttribute("title")
    }

    //------------------   5    --------------------------//    <------ ZROBIONE

    const nr5 = document.querySelectorAll(".st1, .st2")
    for (let el of nr5) {
        el.style.color = ("red")
        el.style.fontSize = ("15px")
    }

    //------------------   6    --------------------------//    <------- ZROBIONE

    const nr6 = document.querySelectorAll(".del")
    for (let el of nr6) {
        el.removeAttribute("data-hack-inactive", "");
        el.setAttribute("data-hack-active", "")
    }


    //------------------   7    --------------------------//    <------- ZROBIONE    

    const nr7 = document.querySelectorAll(".last-attempt span")
    for (el of nr7) {
        el.remove()
    }
});