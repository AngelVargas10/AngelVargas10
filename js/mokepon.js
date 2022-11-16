function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
   }
function fuego() {
    ataqueJugador="Fuego"
    ataqueEnemigo()
   }
function agua() {
    ataqueJugador="Agua"
    ataqueEnemigo()
}
function tierra() {
    ataqueJugador="Tierra"
    ataqueEnemigo()
}
function seleccionarMascotaJugador() {
    if (document.getElementById("hipodoge").checked ==true) {
        document.getElementById("name_pet").innerHTML="Hipodogue"
        mascotaEnemiga()
        let selecionarMascota =document.getElementById("selecionar_mascota")
        selecionarMascota.style.display="none"
        let selecionarAtaque =document.getElementById("selecionar_ataque")
        selecionarAtaque.style.display="flex"
    }
    else if (document.getElementById("capipepo").checked ==true) {
        document.getElementById("name_pet").innerHTML="Capipepo "
        mascotaEnemiga()
        let selecionarMascota =document.getElementById("selecionar_mascota")
        selecionarMascota.style.display="none"
        let selecionarAtaque =document.getElementById("selecionar_ataque")
        selecionarAtaque.style.display="flex"
    }
    else if (document.getElementById("ratigueya").checked ==true) {
        document.getElementById("name_pet").innerHTML="Ratigueya "
        mascotaEnemiga()
        let selecionarMascota =document.getElementById("selecionar_mascota")
        selecionarMascota.style.display="none"
        let selecionarAtaque =document.getElementById("selecionar_ataque")
        selecionarAtaque.style.display="flex"
    }
    else{
        alert("Selecciona  una mascota")
    }
}
function mascotaEnemiga() {
    pc=getRandomInt(1,3)
    if (pc == 1) {
        document.getElementById("name_enemi_pet").innerHTML="Hipodogue"
    }else if (pc ==2 ){
        document.getElementById("name_enemi_pet").innerHTML="Capipepo"
    }else if(pc ==3){
        document.getElementById("name_enemi_pet").innerHTML="Ratigueya"
    }
}
function ataqueEnemigo() {
    pc=getRandomInt(1,3)
    if (pc == 1) {
        ataquesEnemigos="Fuego"
    }else if (pc ==2 ){
        ataquesEnemigos="Agua"
    }else if(pc ==3){
        ataquesEnemigos="Tierra"
    }
    ganador()
    crearMensaje()
}
function iniciarJuego() {
    let selecionarAtaque =document.getElementById("selecionar_ataque")
    selecionarAtaque.style.display="none"

    let reinicio =document.getElementById("reiniciar")
    reinicio.style.display="none"


    let botonMascotaJugador=document.getElementById("boton-mascosta")
    botonMascotaJugador.addEventListener("click",seleccionarMascotaJugador)

    let boton_fuego= document.getElementById("boton-fuego")
    let boton_agua = document.getElementById("boton-agua")
    let boton_tierra=document.getElementById("boton-tierra")
    let boton_reiniciar = document.getElementById("reiniciar")

    boton_reiniciar.addEventListener("click",reiniciarJuego)
    boton_agua.addEventListener("click",agua)
    boton_fuego.addEventListener("click",fuego)
    boton_tierra.addEventListener("click",tierra)
}
function crearMensaje() {

    revisarVidas()
    let sectionMensaje=document.getElementById("resultado")
    let ataquesDelJugador=document.getElementById("ataques-Del-Jugador")
    let ataquesDelEnemigo=document.getElementById("ataques-Del-Enemigo")

    let nuevoAtaqueDelJugador = document.createElement("p")
    let nuevoAtaqueDelEnemigo = document.createElement("p")
    
    // let parrafo = document.createElement("p")
    // parrafo.innerHTML="Tu Mascota Ataco con "+ataqueJugador+" La Macota del Enemigo Ataco con "+ ataquesEnemigos+resultado

    sectionMensaje.innerHTML=resultado
    nuevoAtaqueDelJugador.innerHTML=ataqueJugador
    nuevoAtaqueDelEnemigo.innerHTML=ataquesEnemigos

    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)

}
function ganador() {
    if (ataqueJugador =="Fuego" && ataquesEnemigos=="Tierra") {
        resultado=" Ganaste "
        vidas_enemigo -= 1
    }else if (ataqueJugador=="Agua" && ataquesEnemigos=="Fuego"){
        resultado=" Ganaste "
        vidas_enemigo -= 1
    }else if (ataqueJugador=="Tierra" && ataquesEnemigos=="Agua") {
        resultado= " Ganaste "
        vidas_enemigo -= 1
    }else if (ataqueJugador==ataquesEnemigos) {
        resultado= " Enpate "
    }else{
        resultado=" Perdiste "
        vidas_jugador -= 1
    }
    document.getElementById("vidas").innerHTML=vidas_jugador
    document.getElementById("vidas_enemi").innerHTML=vidas_enemigo
    if (vidas_enemigo ==0) {
        alert("Ganaste")
    }
    if (vidas_jugador==0) {
        alert("Perdiste")
    }
}
function revisarVidas() {
    if (vidas_enemigo==0) {
        crearMensajeFinal(" Fecilitaciones Ganaste ")
        let reinicio =document.getElementById("reiniciar")
        reinicio.style.display="block"
    }else if (vidas_jugador==0) {
        crearMensajeFinal(" Sigue Participando Perdiste ")
        let reinicio =document.getElementById("reiniciar")
        reinicio.style.display="block"
    }
}
function crearMensajeFinal(resultadoFinal) {
    let sectionMensaje=document.getElementById("resultado")

    let parrafo = document.createElement("p")
    parrafo.innerHTML=resultadoFinal

    let boton_fuego= document.getElementById("boton-fuego")
    let boton_agua = document.getElementById("boton-agua")
    let boton_tierra=document.getElementById("boton-tierra")

    // Desavilita los botones
    boton_fuego.disabled=true
    boton_agua.disabled=true
    boton_tierra.disabled=true

}
function reiniciarJuego() {
    location.reload()
}
let vidas_jugador=3
let vidas_enemigo=3
let resultado
let ataqueJugador
let ataquesEnemigos
window.addEventListener("load",iniciarJuego)
