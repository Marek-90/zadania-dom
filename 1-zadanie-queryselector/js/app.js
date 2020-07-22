document.addEventListener('DOMContentLoaded', function () {

    //------------------   1    --------------------------//    <------ ZROBIONE


    const nr1 = document.querySelectorAll(".first-attempt")
    for (let el of nr1) {
        el.classList.add("active")
    }

    //------------------   2    --------------------------//

    const nr2 = document.querySelectorAll(".el data-border")
    console.log(nr2)



    //------------------   3    --------------------------//    <------ ZROBIONE

    const nr3 = document.querySelectorAll(".hack")
    for (let er of nr3) {
        er.setAttribute("title", "hacking")
    }


    //------------------   4    --------------------------//    <------ ZROBIONE

    const nr4 = document.querySelectorAll(".hijack")
    for (let et of nr4) {
        et.removeAttribute("title")
    }

    //------------------   5    --------------------------//    <------ ZROBIONE

    const nr5 = document.querySelectorAll(".st1, .st2")
    for (let ey of nr5) {
        ey.style.color = ("red")
        ey.style.fontSizing = ("15px")
    }

    //------------------   6    --------------------------//    <------- ZROBIONE

    const nr6 = document.querySelectorAll(".del")
    for (let ez of nr6) {
        ez.removeAttribute("data-hack-inactive", "");
        ez.setAttribute("data-hack-active", "")
    }


    //------------------   7    --------------------------//    <------- ZROBIONE    

    const nr7 = document.querySelectorAll(".last-attempt span")
    console.log(nr7)
    for (ex of nr7) {
        ex.remove()
    }
});