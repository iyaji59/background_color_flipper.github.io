// let us first create an array of colors
const colors = [
    "#000000",	
    "#FFFFFF",	
    "#FF0000",	
    "#00FF00",	
    "#0000FF",
    "#FFFF00",
    "#00FFFF",	
    "#FF00FF",
    "#808080",	
    "#800000",	
    "#808000",	
    "#008000",	
    "#800080",	
    "#008080",	
    "#000080"	
]
let button = document.getElementById("btn");
let color = document.getElementById("color");
// return element of the colors array randomly
function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}
button.addEventListener("click", function(){
    const theme = getRandomNumber();
    document.body.style.backgroundColor = colors[theme];
    color.textContent = colors[theme];
})
