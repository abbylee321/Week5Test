window.addEventListener('load', () => {
});

const button1 = document.getElementById("tequila-button");
const button2 = document.getElementById("egg-white");
const button3 = document.getElementById("powdered-sugar");
const text = document.getElementById('final-drink');
const text3 = document.getElementById('final-drink2');
const imageholder= document.getElementById("display-image")
// const buttontest = document.getElementById("egg-white-image");

let count = 1;


//show picture

// function showPicture() {
//     const sourceOfPicture = "https://www.thecocktaildb.com/images/media/drink/2bcase1504889637.jpg";
//     const img = document.getElementById('cocktailpic')
//     img.src = sourceOfPicture.replace('90x90', '225x225');
//     img.style.display = "block";
//   } 

// buttontest.onclick = async function printSomething4 () {
//     showPicture(); 
// }
  
//change color of button
//button1, color - parameters
function setColor(button1, color) {
    const property = document.getElementById("tequila-button");
    if (count == 0) {
        property.style.backgroundColor = "#FFFFFF"
        count = 1;        
    }
    else {
        property.style.backgroundColor = "#7FFF00"
        count = 0;
    }
}
console.log(count);

//TEQUILA BUTTON
button1.onclick = async function printSomething() {
    const response = await fetch("/getdrinks");
    const data = await response.json();
    setColor();
    console.log(data); 
}

//Egg white button
button2.onclick = async function printSomething2() {
    const response = await fetch("/getegg");
    const data2 = await response.json();
    console.log(data2); 
    //this is to iterate if there are multiple lines of this drink 
    for (let i = 0; i < data2.length; i++) {
        console.log(data2[i].strDrink);
        text.innerHTML = `Your Drink: ${data2[i].strDrink}`;
    }
    imageholder.src = data2[0].strDrinkThumb;
}


//Powdered sugar button
button3.onclick = async function printSomething3() {
    const response = await fetch("/getsugar");
    const data3 = await response.json();
    console.log(data3[0].strDrink);
    text3.innerHTML = `Your Drink: ${data3[0].strDrink}`;
    imageholder.src = data3[0].strDrinkThumb;
    // console.log(data3[1].strDrink);
    // for (let i = 0; i < data3.length; i++) {
    //     console.log(data3[i].strDrink);
    //     text.innerHTML = `Your Drink: ${data2[i].strDrink}`;
    // }
}

