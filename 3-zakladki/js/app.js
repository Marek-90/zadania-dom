document.addEventListener('DOMContentLoaded', function () {

    const tab = document.querySelectorAll(".tab-el")
    const content = document.querySelectorAll(".tab-content")


    for (let el of tab) {
        el.addEventListener("click", function (e) {
            e.preventDefault();
            const active = document.querySelector(".tab-el-active");
            active.classList.remove("tab-el-active");
            this.classList.add("tab-el-active");
            if (el.firstChild.classList.contains("tab-el-active")) {

            }

            // for (let er of content) {
            //     e.preventDefault();
            //     const activeContent = document.querySelector(".tab-content-active");
            //     er.classList.add("tab-content-active");
            //     activeContent.classList.remove("tab-content-active");
            // }

        })
    }

});


// for (let el of content) {
//     el.addEventListener("click", function (e) {
//         e.preventDefault();
//         const activeContent = document.querySelector(".tab-content-active");
//         el.classList.add("tab-content-active");
//         activeContent.classList.remove("tab-content-active");
//         el.classList.toggle("tab-content-active");

//     })
// }