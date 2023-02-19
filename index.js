const splitContainer = document.getElementById("split-card");
const cards = document.querySelectorAll(".card");

cards.forEach(card => {
    const newDiv = document.createElement("div");
    newDiv.classList.add("card-split");
    newDiv.appendChild(card);
    splitContainer.appendChild(newDiv);
});