const pokemon = [
    {
        name: "Pikachu",
        subname: "The Rat Pokemon",
        description: "Pikachu is an Electric Type",
        image : "https://i.ebayimg.com/images/g/B~gAAOSwhNthhdjn/s-l1600.webp"
    },

    {
        name: "Osshawott",
        subname: "The Otter Pokemon",
        description: "Osshawott is a Water Type",
        image : "https://i.ebayimg.com/images/g/B~gAAOSwhNthhdjn/s-l1600.webp"
    },
    {
        name: "Pikachu",
        subname: "The Rat Pokemon",
        description: "Pikachu is an Electric Type",
        image : "https://i.ebayimg.com/images/g/B~gAAOSwhNthhdjn/s-l1600.webp"
    },

    {
        name: "Osshawott",
        subname: "The Otter Pokemon",
        description: "Osshawott is a Water Type",
        image : "https://i.ebayimg.com/images/g/B~gAAOSwhNthhdjn/s-l1600.webp"
    },
    {
        name: "Pikachu",
        subname: "The Rat Pokemon",
        description: "Pikachu is an Electric Type",
        image : "https://i.ebayimg.com/images/g/B~gAAOSwhNthhdjn/s-l1600.webp"
    },

    {
        name: "Osshawott",
        subname: "The Otter Pokemon",
        description: "Osshawott is a Water Type",
        image : "https://i.ebayimg.com/images/g/B~gAAOSwhNthhdjn/s-l1600.webp"
    }
]

console.log(pokemon)

const container = document.getElementById("container")

for (let i = 0; i < pokemon.length; i++){
    let column = document.createElement("div")
    column.classList.add("column")
    container.append(column)

//1st Part of Card
    let uiCard = document.createElement("div")
   uiCard.className = "ui card"
    column.append(uiCard)

    let imageContainer = document.createElement("div")
    imageContainer.className = "img"
    uiCard.appendChild(imageContainer)

    let image = document.createElement("img")
    image.src =pokemon[i].image
    imageContainer.appendChild(image)
//2nd Part Of Cards

    let content = document.createElement("div")
    content.classList.add("content")
    column.appendChild(content)

    let header = document.createElement("a")
    header.classList.add("header")
    header.innerText = pokemon[i].name
    content.appendChild(header)

    let meta = document.createElement("div")
    meta.classList.add("meta")
    content.appendChild(meta)


    let data = document.createElement("span")
    data.classList.add("date")
    data.innerText = pokemon[i].subname
    meta.appendChild(data)

    let description = document.createElement("div")
    description.classList.add("description")
    description.innerText = pokemon[i].description
    content.appendChild(description)


}