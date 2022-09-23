import * as dotenv from 'dotenv'
dotenv.config()
import ElementInfo from '../Infocat'

const API_KEY=process.env.API_KEY
const API_URL_RAZA=process.env.API_URL_RAZA

let catsName=[]
let containerSelect=document.querySelector("#select")
let elementimg=document.querySelector("#logo-cat-container")
let containerFotos=document.querySelector('#container-fotos')

    containerSelect.addEventListener("change",()=>{
        MostrarTodasLasFotos(containerSelect.value)
    })
    

//funcion para mostrar todas las fotos
function MostrarTodasLasFotos(name){

    fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${name}&limit=20`,{headers:{'x-api-key':API_KEY}})
        .then(response=>response.json())
        .then(response=>CrearElementImg(response,name))

}

//funcion para crear las imagenes  y la info
function CrearElementImg(imgs,name){

    let infoCat
    
    fetch(`https://api.thecatapi.com/v1/breeds/${name}`)
        .then(response=>response.json())
        .then(response=>infoCat=response)
        .then(response=>{
            ElementInfo(response,imgs)
        })

        //condicion para borrar todas las foto si existe
        while (containerFotos.firstElementChild) { 
            containerFotos.firstElementChild.remove()
        }
        
    imgs.map(img=>{
       let elementImg=document.createElement("img")
        elementImg.src=img.url
        elementImg.id=img.id
        elementImg.className="fotos"
        containerFotos.appendChild(elementImg)
    })
}

//funcion para agregar todas las razas en el select
function elementselect(nameCasts) {
    nameCasts.map(index=>{
        let elementOption=document.createElement("option")
        elementOption.textContent=index.name
        elementOption.value=index.id
        containerSelect.appendChild(elementOption)
    })
}
//funcion para extrar de la api todo los nombre de razas
export function catsNameReturn(){

    fetch(API_URL_RAZA,{headers:{'x-api-key':API_KEY}})
        .then(response=>response.json())
        .then(response=>{
            response.map(index=>catsName.push(index))
            elementselect(catsName)
        })
}


export function Header(){
    catsNameReturn()
}

