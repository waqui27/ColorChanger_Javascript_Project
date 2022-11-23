const hexNumber = "0123456789ABCDEFG";
function colorChanger() {
    let color = "#";
    for(let i=0; i<6; i++) {
        color += hexNumber[Math.floor(Math.random() * hexNumber.length) ]
    }
    return color
}

let myColor = colorChanger();
console.log(myColor)

function colorAssigned() {
    document.getElementById("canvas").style.backgroundColor = myColor;
    document.getElementById("button").style.backgroundColor = myColor;
    myColor = colorChanger();
}

const button = document.getElementById("button");

button.addEventListener("click", colorAssigned);