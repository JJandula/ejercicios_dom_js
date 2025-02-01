/* 1.1 Basandote en el array siguiente, crea una lista ul > li 
dinámicamente en el html que imprima cada uno de los paises. */


const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

const ul = document.createElement("ul")

for (const country of countries) {
    const li = document.createElement("li")
    li.innerText = country
    ul.appendChild(li)
}

document.body.appendChild(ul)


/* 1.2 Elimina el elemento que tenga la clase .fn-remove-me. */

const removeItems = document.querySelector(".fn-remove-me")
removeItems.remove()

/* 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos 
en el div de html con el atributo data-function="printHere". */

const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

const carsDestination = document.querySelector('[data-function="printHere"]')

const ulCars = document.createElement("ul")

for (const car of cars) {
    const liCars = document.createElement("li")
    liCars.innerText = car
    ulCars.appendChild(liCars)
}

carsDestination.appendChild(ulCars)


/* 1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento 
h4 para el titulo y otro elemento img para la imagen. */

const countries2 = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
]


for (const country2 of countries2) {

    const divs = document.createElement("div")
    document.body.appendChild(divs)

    const h4s = document.createElement("h4")
    h4s.innerText = country2.title
    divs.appendChild(h4s)

    const imgs = document.createElement("img")
    imgs.src = country2.imgUrl
    imgs.alt = country2.title
    divs.appendChild(imgs)

}

/* 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último 
elemento de la serie de divs. */


const deleteButton = document.createElement("button")
deleteButton.innerText = "Delete Last index of"
document.body.appendChild(deleteButton)


const divSelector = document.querySelectorAll("div")
const lastDiv = divSelector[5]

deleteButton.addEventListener("click", () => {
    lastDiv.remove()
})


/* 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los 
divs que elimine ese mismo elemento del html. */



for (i = 1; i < divSelector.length; i++) {
    const btnDivDelete = document.createElement("button")
    btnDivDelete.innerText = "Delete Div"
    const divsToDelete = divSelector[i]
    divsToDelete.appendChild(btnDivDelete)

    btnDivDelete.addEventListener("click", () => {
        divsToDelete.remove()
    })
}



