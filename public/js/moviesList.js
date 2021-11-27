console.log("vinculadooo")

window.addEventListener("load",()=>{
    let body = document.querySelector("body")
    let h1 = document.querySelector("h1")
    

    let bg = confirm("¿Desea modo oscuro?")

    if(bg == true){
        body.classList.add("fondoMoviesList")
        body.style.backgroundColor="#7f7f7f"
    }
    h1.innerText += "LISTADO DE PELÍCULAS"
    h1.style.color = "white"
    h1.style.backgroundColor= "teal"
    h1.style.padding= "20px"
})
    

    
