const root = document.getElementById('root')
const appDiv = document.createElement("div")
appDiv.className = "app"
root.appendChild(appDiv)

const header = document.createElement("header")
appDiv.appendChild(header)

const h1Element = document.createElement("h1")
h1Element.textContent = "Flatapets"
header.appendChild(h1Element)

const headerSpan = document.createElement("span")
headerSpan.className = "logo"
headerSpan.textContent = " 🐈"
h1Element.appendChild(headerSpan)

const unorderedListElement = document.createElement("ul")
unorderedListElement.className = "pet-list"
appDiv.appendChild(unorderedListElement)

function addPetToPetList(pet) {
    const listElement = document.createElement("li")
    listElement.className = "pet"
    unorderedListElement.appendChild(listElement)

    const petImage = document.createElement("img")
    petImage.src = pet.image
    petImage.alt = pet.name
    listElement.appendChild(petImage)

    const h4Element = document.createElement("h4")
    h4Element.textContent = pet.name

    listElement.appendChild(h4Element)
}

function showPets() {
fetch("http://localhost:3000/pets")
.then(response => response.json())
.then(pets => pets.forEach(addPetToPetList))
}

showPets()