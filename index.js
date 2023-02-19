const splitContainer = document.getElementById("split-cards");
const cards = document.querySelectorAll(".cards");

cards.forEach(card => {
    const newDiv = document.createElement("div");
    newDiv.classList.add("card-split");
    newDiv.appendChild(card);
    splitContainer.appendChild(newDiv);
});
