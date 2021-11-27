console.log("Vinculacion correcta")

window.addEventListener("load",()=>{
    let body = document.querySelector("body")
    let h2 = document.querySelector("h2")
    let a = document.querySelector("a")
    let p = document.querySelectorAll("p")
    let nombre = prompt("Ingrese su nombre")
    if (nombre == null) {
        h2.innerText += " invitado"
    }else{
        h2.innerText += ` ${nombre}`
    }
    h2.style.textTransform = "uppercase"
    a.style.color = "#E51B3E"
    let fondo = confirm("¿Desea colocar un fondo de pantalla?")
    if (fondo == true) {
        body.classList.add("fondo")
    }
    for (let i = 0; i < p.length; i++) {
        
        i%2 == 0 ? p[i].classList.add("descatadoPar") : p[i].classList.add("descatadoImpar")
    }

})
