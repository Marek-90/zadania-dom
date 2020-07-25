document.addEventListener('DOMContentLoaded', function () {

    let li = document.querySelectorAll(".nav-el")

    for (let el of li) {
        el.addEventListener("click", function (e) {
            e.preventDefault()
            const active = document.querySelector(".nav-el-active");
            active.classList.remove("nav-el-active");
            this.classList.add("nav-el-active");
        });
    }

});