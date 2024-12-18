var table = document.querySelector('table');
var button = document.querySelector('button');


//On clicking fetch button event listener trigger input function
button.addEventListener("click", input)


/**
 * Fetching data from respective api
 * @returns Array of data present in api 
 */
async function fetchData() {
    let response = await fetch('https://api.jikan.moe/v4/top/anime?type=ova');
    let result = await response.json();
    console.log(result.data);
    return result.data;
}


/**
 * putting data from api in array variable and iterating through the array
 */
async function input() {
    const array = await fetchData();

    array.forEach(element => {
        rowAddition(element.title , element.episodes, element.genres[0].name, element.score)
    });
} 


/** 
 * Adding table rows to the table and putting the input 
 * @param {String} title 
 * @param {Number} episodes 
 * @param {String} genre 
 * @param {Number} score 
 */
function rowAddition(title, episodes, genre, score) {

    let row = table.insertRow();

    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);


    cell1.innerHTML = title;
    cell2.innerHTML = episodes;
    cell3.innerHTML = genre;
    cell4.innerHTML = score;
}

