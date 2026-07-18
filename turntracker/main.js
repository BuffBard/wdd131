const characters = [
    {
        name: "Ruby",
        ct: 100,
        portrait: "images/ruby.png"
    },
    {
        name: "Aquamarine",
        ct: 88,
        portrait: "images/aquamarine.png"
    },
    {
        name: "Diamond",
        ct: 65,
        portrait: "images/diamond.png"
    },
    {
        name: "Emerald",
        ct: 40,
        portrait: "images/emerald.png"
    },
    {
        name: "Amythist",
        ct: 12,
        portrait: "images/amythist.png"
    },
    {
        name: "Topaz",
        ct: 5,
        portrait: "images/topaz.png"
    }
];

let turn = 0;
const initiativeContainer = document.getElementById("initiativeContainer");
function drawCharacters(){
    initiativeContainer.innerHTML = "";
    characters.forEach((character,index)=>{
        const div = document.createElement("div");
        div.className = "character";
        if(index===turn)
            div.classList.add("active");
        div.innerHTML = `
            <div class="portrait">
                <img src="${character.portrait}">
            </div>

            <h2>${character.name}</h2>

            <div class="ct">
                CT ${character.ct}
            </div>
        `;
        initiativeContainer.appendChild(div);
    });
    updateCurrentCharacter();

}
function updateCurrentCharacter(){
    const current = characters[turn];
    document.getElementById("currentName").textContent = current.name;
    document.getElementById("currentCharacterName").textContent = current.name;
    document.getElementById("currentCT").textContent = current.ct;
    document.getElementById("currentPortrait").src = current.portrait;
    document.getElementById("currentPortrait").alt = current.name;
}

document.getElementById("nextTurn").onclick = ()=>{
    turn++;
    if(turn>=characters.length)
        turn=0;

    drawCharacters();
}
drawCharacters();