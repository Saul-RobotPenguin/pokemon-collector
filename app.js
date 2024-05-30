const pokemon = [
    {
        name: "Pikachu",
        subname: "The Rat Pokemon",
        description: "Pikachu is an Electric Type",
        image : "https://archives.bulbagarden.net/media/upload/thumb/c/c1/0025Pikachu-PhD.png/600px-0025Pikachu-PhD.png"
    },

    {
        name: "Oshawott",
        subname: "The Otter Pokemon",
        description: "Oshawott is a Water Type",
        image : "https://archives.bulbagarden.net/media/upload/thumb/9/90/0501Oshawott.png/250px-0501Oshawott.png"
    },
    {
        name: "Bulbasaur",
        subname: "The Plant Pokemon",
        description: "Bulbasaur is a grass Type",
        image : "https://archives.bulbagarden.net/media/upload/thumb/f/fb/0001Bulbasaur.png/250px-0001Bulbasaur.png"
    },

    {
        name: "Quilava",
        subname: "The Hotdog Pokemon",
        description: "Quilava is a Fire Type",
        image : "https://archives.bulbagarden.net/media/upload/thumb/3/3f/0156Quilava.png/250px-0156Quilava.png"
    },
    {
        name: "Mewtwo",
        subname: "The Wierd Pokemon",
        description: "Mewtwo",
        image : "https://archives.bulbagarden.net/media/upload/thumb/8/89/0150Mewtwo.png/250px-0150Mewtwo.png"
    },

    {
        name: "Gible",
        subname: "The Dragon Pokemon",
        description: "Gible is a dragon Type",
        image : "https://archives.bulbagarden.net/media/upload/thumb/6/68/0443Gible.png/250px-0443Gible.png"
    }
]

console.log(pokemon)

const container = document.getElementById("container")

const form = document.querySelector(".form")
const loadingBar = document.querySelector(".loading-bar")



  form.addEventListener( "submit",(e)=>{
    e.preventDefault()
    loadingBar.classList.remove("hide")

    setTimeout(() => {
       loadingBar.classList.add("hide")
       let values = [...document.forms["form"].getElementsByTagName("input")].map(input => input.value)

       console.log(values)
   
      let pokemonData =  {
           name: values[0],
           subname: values[1],
           description: values[2],
           image : values[3]
       }
       MakeTheCards(pokemonData)
       
    form.reset()
      }, 2000);
  })




  for (let i = 0; i < pokemon.length; i++){

    MakeTheCards(pokemon[i])
  }

function MakeTheCards(pokemon){
    
    let column = document.createElement("div")
    column.classList.add("column")
    container.append(column)

//1st Part of Card
    let uiCard = document.createElement("div")
   uiCard.className = "ui card"
    column.append(uiCard)

    let imageContainer = document.createElement("div")
    imageContainer.className = "image"
    uiCard.appendChild(imageContainer)

    let image = document.createElement("img")
    image.src = pokemon.image
    imageContainer.appendChild(image)
//2nd Part Of Cards

    let content = document.createElement("div")
    content.classList.add("content")
    uiCard.appendChild(content)

    let header = document.createElement("a")
    header.classList.add("header")
    header.innerText = pokemon.name
    content.appendChild(header)

    let meta = document.createElement("div")
    meta.classList.add("meta")
    content.appendChild(meta)


    let data = document.createElement("span")
    data.classList.add("date")
    data.innerText = pokemon.subname
    meta.appendChild(data)

    let description = document.createElement("div")
    description.classList.add("description")
    description.innerText = pokemon.description
    content.appendChild(description)


    //Part 3

    let extraContent = document.createElement("div")
    extraContent.className = " extra content"
    uiCard.appendChild(extraContent)

    let aContainer = document.createElement("a")
  
    extraContent.appendChild(aContainer)

    let cameraIcon = document.createElement("i")
//     cameraIcon.className = "checkmark icon"
// aContainer.appendChild(cameraIcon)
aContainer.innerHTML = `<i class=" x icon red status"></i>Not Captured`

aContainer.addEventListener("click", (e)=>{
   if (e.target.innerHTML == `<i class=" x icon red status"></i>Not Captured`){
    aContainer.innerHTML =  `<i class=" check icon green status"></i>Captured`
   } else {
   aContainer.innerHTML = `<i class=" x icon red status"></i>Not Captured`
   }
})

}