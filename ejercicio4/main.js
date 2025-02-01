

/* 1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el 
evento click que ejecute un console log con la información del evento del click */

let btn = document.createElement("button")
btn.innerText = "Ver Evento Click en Consola"
btn.id = "btnToClick"
document.body.appendChild(btn)

btn.addEventListener("click", (ev) => {
    console.log(ev)
})


/* 1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input. */

let inputFocus = document.querySelector(".focus")

inputFocus.addEventListener("focus", (ev) => {
    console.log(ev)
})


/* 1.3 Añade un evento 'input' que ejecute un console.log con el valor del input. */

let inputEvent = document.querySelector(".value")

inputEvent.addEventListener("input", (ev) => {
    console.log(ev)
})

