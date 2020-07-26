//---------------  1  -------------------//


const mapEl = document.querySelector(".map")


for (let el of cities) {
    let newA = document.createElement("a");
    newA.innerText = (`${el.name}`);
    mapEl.appendChild(newA);
    newA.setAttribute("href", `${el.href}`);
    newA.setAttribute("class", "map-marker");
    newA.setAttribute("data-name", `${el.name}`);
    newA.setAttribute("data-population", `${el.population}`)
    newA.setAttribute("style", `left: ${el.map_x}px; top: ${el.map_y}px`)
}

//---------------  2  -------------------//