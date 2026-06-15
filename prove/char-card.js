const cardChar = {
    cardLevel: 5,
    cardHealth: 100
};

document.querySelector("#cardLevel").textContent = "Level: "+cardChar.cardLevel;
document.querySelector("#cardHealth").textContent = "Health: "+cardChar.cardHealth;

document.querySelector("#levelUp").addEventListener("click", function () {
    cardChar.cardLevel++;
    document.querySelector("#cardLevel").textContent = "Level: "+cardChar.cardLevel;
});

document.querySelector("#attacked").addEventListener("click", function () {
    if(cardChar.cardHealth>0){
        cardChar.cardHealth--;
        document.querySelector("#cardHealth").textContent = "Health: "+cardChar.cardHealth;
    }
});