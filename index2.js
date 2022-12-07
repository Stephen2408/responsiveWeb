let mainContainer =document.querySelector(".container")
let mainThankyou = document.querySelector(".thank-you")
let Submit = document.querySelector(".btn-submit")
let rateAgain = document.getElementById("rate-again")
let rating = document.querySelectorAll(".ctr")
let rates = document.getElementById("rating")
Submit.addEventListener("click",()=>{
    mainThankyou.classList.remove("hidden")
    mainContainer.style.display = "none"
})

rateAgain.addEventListener("click",() =>{
    mainThankyou.classList.add("hidden")
    mainContainer.style.display = "block"
})

rating.forEach((rate) =>{
    rate.addEventListener("click",() =>{
        rates.innerHTML = rate.innerHTML
    })
})