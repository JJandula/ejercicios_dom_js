
// 2.1

let newDiv = document.createElement("div")
document.body.appendChild(newDiv);


//2.2
let divP = document.createElement("div")
document.body.appendChild(divP);
let newP = document.createElement("p")
divP.appendChild(newP);

//2.3

let divBucle = document.createElement("div") 
document.body.appendChild(divBucle);

for(i = 0; i < 6; i++){
    let pBucle = document.createElement("p")
    divBucle.appendChild(pBucle)
    
}

// 2.4

let pTexto = document.createElement("p")
pTexto.innerText = "Soy dinámico!"
document.body.appendChild(pTexto)


// 2.5 

let h2InsertHere = document.querySelector(".fn-insert-here")
h2InsertHere.innerText = "Wubba Lubba dub dub"


// 2.6

const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter']


let ulArray = document.createElement("ul")
document.body.appendChild(ulArray)

for (const app of apps) {
    let liArray = document.createElement("li")
    liArray.innerText = app
    ulArray.appendChild(liArray)
}

// 2.7

// ya que son varios nodos y se almacen en un array, hacemos un bucle for y le añadimos la i a la lista para que el bucle vaya eliminado cada item de la lista

const removeItems = document.querySelectorAll(".fn-remove-me")

for (i = 0; i < removeItems.length; i++){
    removeItems[i].remove()
}

// 2.8

const pBetween = document.createElement("p")
pBetween.innerText = "Voy en medio!"

const before = document.querySelectorAll(".fn-insert-here")
const ultimo = before[2]

document.body.insertBefore(pBetween,ultimo)

// 2.9

// ya que son varios nodos y se almacen en un array, hacemos un bucle for iniciado en la posicion 1 que es el primer div hasta el lenght del array "el ultimo div de la clase"

const insertSelect = document.querySelectorAll(".fn-insert-here")

for (i = 1; i < insertSelect.length; i++){
    const pInsideDiv = document.createElement("p")
    pInsideDiv.innerText = "Voy dentro!"
    insertSelect[i].appendChild(pInsideDiv)
}