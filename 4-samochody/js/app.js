document.addEventListener('DOMContentLoaded', function () {

    const btn = document.querySelectorAll(".car-toggle-detail")

    for (let el of btn) {
        el.addEventListener("click", function () {
            const carDetail = document.querySelector(".car-detail");
            carDetail.stylle.blur()
        })
    }


});