const paragrafo = document.createElement("p")
paragrafo.innerHTML = "Its Maik Fault" 

document.body.appendChild(paragrafo)

function mostrarTelefone(){
    document.getElementById("telefone").style.display = "block"
}

function apagarTelefone(){
    document.getElementById("telefone").style.display = "none"
}