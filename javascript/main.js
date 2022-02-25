
const imgURL = [
  "https://picsum.photos/id/240/200/300",
  "https://picsum.photos/id/241/200/300",
  "https://picsum.photos/id/242/200/300",
];

let indiceImgActual = 0
const btnRetroceder = document.getElementById("retroceder")
const btnAvanzar = document.getElementById("avanzar")
const img = document.getElementById("imgCarrusel")

document.addEventListener("DOMContentLoaded",(e) => cargarImagen() )
btnAvanzar.addEventListener("click",(e) =>  mostrarSiguiente())
btnRetroceder.addEventListener("click",(e) => mostrarAnterior())

function cargarImagen(){
  img.style.backgroundImage = `url(${imgURL[indiceImgActual]})`
}
function mostrarSiguiente(e){

  if(indiceImgActual == imgURL.length -1 ){
   indiceImgActual = 0
  }else{
    indiceImgActual++
  }
  cargarImagen();


}
function mostrarAnterior(e){
  if(indiceImgActual <= 0){
    indiceImgActual = imgURL.length -1
  }else{
    indiceImgActual--
  }
  cargarImagen()
}