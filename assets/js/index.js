'use strict'

const buttonElem = document.getElementById("btn");
const divElement = document.querySelector("div");
const bodyElement = document.querySelector("body");
const inputElementOne = document.getElementById("inputTextOne");
const inputElementTwo = document.getElementById("inputTextTwo");
const submitButton = document.getElementById("inputSubmit");

buttonElem.addEventListener("mouseenter",buttonClickHandler);

function buttonClickHandler(event){
    console.dir(event.currentTarget.nodeName);
   

}

//bodyElement.addEventListener("click", buttonClickHandler)

divElement.addEventListener("click", buttonClickHandler);

submitButton.addEventListener("click", clickSubmit)

function clickSubmit(){
    const elem = inputElementOne.value
inputElementOne.value = inputElementTwo.value;
inputElementTwo.value = elem;
}
