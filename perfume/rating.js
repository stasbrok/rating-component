//Selecting all the buttons

let rateButtons = document.querySelectorAll(".rate")
const submitButton = document.querySelector(".submit")
const mainContainer = document.querySelector(".main")
const thanksForFeedback = document.querySelector(".box-2")
const rating = document.querySelector("#rating")
let initialText = document.querySelector(".selected")


// If there is a button with style "rate-clicked" and another button is clicked, remove the style and set to the button that was clicked last.

rateButtons.forEach((button) => {
    button.addEventListener("click", () => {
        let clickedButton = document.querySelector(".rate-clicked") 
        if(!clickedButton) button.classList.add("rate-clicked")
        if(clickedButton) {
            clickedButton.classList.remove("rate-clicked")
            button.classList.add("rate-clicked")    
    }
        if(clickedButton === button) clickedButton.classList.remove("rate-clicked")
        rating.innerText = button.innerText
    })
})


submitButton.addEventListener("click", () => {
    thanksForFeedback.classList.remove("hidden")
    mainContainer.style.display = "none"
})
