
/* Ejercicio 5 */
/* Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los albums. */

const albums = [
  "De Mysteriis Dom Sathanas",
  "Reign of Blood",
  "Ride the Lightning",
  "Painkiller",
  "Iron Fist",
];

const listUl = document.createElement("ul")
document.body.appendChild(listUl)

for (const album of albums) {
    liElement = document.createElement("li")
    liElement.innerText = album
    listUl.appendChild(liElement)
}
