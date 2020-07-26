const mapEl = document.querySelector(".map")

//---------------  1  -------------------//

for (let el of cities) {
    const newA = document.createElement("a");
    newA.innerText = (`${el.name}`);
    mapEl.appendChild(newA);
    newA.setAttribute("href", `${el.href}`);
    newA.setAttribute("class", "map-marker");
    newA.setAttribute("data-name", `${el.name}`);
    newA.setAttribute("data-population", `${el.population}`)
    newA.setAttribute("style", `left: ${el.map_x}px; top: ${el.map_y}px`)
}

//---------------  2  -------------------//

const newDiv = document.createElement("div")
mapEl.appendChild(newDiv)
newDiv.setAttribute("class", "mapa-tooltip")
newDiv.setAttribute("style", "left: -9999px; top: -9999px");


//---------------  3  -------------------//