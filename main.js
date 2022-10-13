'use strict';

const getNewQuote = async () => {
    const URL = "https://api.adviceslip.com/advice";
    await fetch(URL)
    .then(response => response.json())
    .then(data => displayQuote(data))
}

const displayQuote = data => {
    adviceID.textContent = data.slip.id
    adviceField.textContent = `"${data.slip.advice}"`;
}

window.addEventListener("load", () => getNewQuote())

if (window.innerWidth <= 430) {
    mobile.classList.remove("hide")
    desktop.classList.add("hide")
} else {
    desktop.classList.remove("hide")
    mobile.classList.add("hide")
}