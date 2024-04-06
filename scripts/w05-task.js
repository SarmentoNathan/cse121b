/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.getElementById('temples');
let templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {
    temples.forEach(temple => {
        let newArticle = document.createElement('article');

        let newParagraph = document.createElement('h3');
        newParagraph.textContent = temple.templeName;
        
        let newIm = document.createElement('img');
        newIm.setAttribute('src',temple.imageUrl);
        newIm.setAttribute('alt',temple.location);

        newArticle.appendChild(newParagraph);
        newArticle.appendChild(newIm);

        templesElement.appendChild(newArticle);
    }
    );
}

/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    
    if(response.ok){
        const templeData = await response.json();
        templeList = templeData;
    }
    
    displayTemples(templeList);
}

/* reset Function */
const reset = () => {
    templesElement.replaceChildren();
}

/* filterTemples Function */
const filterTemples = (temples) => {
    reset();
    
    let filter = document.getElementById('filtered').value;

    switch(filter){
        case 'utah':
            displayTemples(temples.filter(temple => temple.location.includes("Utah")));
            break;
        case 'notutah':
            displayTemples(temples.filter(temple => !temple.location.includes("Utah")));
            break;
        case 'older':
            displayTemples(temples.filter(temple => new Date(temple.dedicated) < new Date(1950, 0, 1)));
            break;
        case 'all':
            displayTemples(temples);
            break;
        default:
            console.error("Invalid filter value:", filter);
    }
}

getTemples();

/* Event Listener */
document.querySelector("#filtered").addEventListener("change", () => { filterTemples(templeList) });