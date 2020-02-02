// question 1

const myFunctionExpression = function() {
  console.log("Svanhild Sleire");
};

myFunctionExpression();

// question 2

const button1 = document.querySelector(".btn");

function clickEvent() {
  console.log("I was clicked");
}

button1.addEventListener("click", clickEvent);

// question 3

const input = document.querySelector("#firstName");

function keyDownEvent() {
  console.log(event.target.value);
}

input.addEventListener("keydown", keyDownEvent);

// question 4

const button2 = document.querySelector("button");

function hoverEvent() {
  event.target.classList.add("hover");
}

button2.addEventListener("mouseover", hoverEvent);

// question 5

const button3 = document.querySelector("[data-animal='dog']");

function removeHover() {
  event.target.classList.remove("hover");
}

button3.addEventListener("mouseout", removeHover);

// question 6

const dataAnimal = document.querySelectorAll("li");

for (let i = 0; i < dataAnimal.length; i++) {
  dataAnimal[i].addEventListener("mouseover", mouseoverDataAnimal);
}

function mouseoverDataAnimal(event) {
  console.log(event.target.dataset.animal);
}

// question 7

const animal = "cow";

switch (animal) {
  case "cat":
    console.log("Meow");
    break;

  case "cow":
    console.log("Moo");
    break;

  case "bird":
    console.log("Tweet");
    break;

  default:
    console.log("Harrumph");
}

// question 8

const sheep = ["Malcolm", "Anders", "Marie"];

sheep.forEach(function(sheep) {
  console.log(sheep);
});

// question 9

function updateHello() {
  if (counter === 6) {
    clearInterval(helloInterval);
  }
  counter++;
  console.log("hello");
}

let counter = 1;

const helloInterval = setInterval(updateHello, 500);

// question 10

const resultText = document.querySelector("div");

function updateInnerHTML() {
  if (counter === 2) {
    resultText.innerHTML = "Text updated";
    clearInterval(interval);
  }
  counter++;
}

let counter = 1;

const interval = setInterval(updateInnerHTML, 1000);
