let pesoImperial=document.querySelector("#peso-imperial")
let pesoMetrica=document.querySelector("#peso-metrica")
let listaTemperatura=document.querySelector("#lista-temperatura")
let origenOrigen=document.querySelector("#origen-origen")
let origenCodigo=document.querySelector("#origen-codigo")
let descricion=document.querySelector("#descricion")
let vidaUtil=document.querySelector("#vida-util")
let fisicoPelo=document.querySelector("#fisico-pelo")
let fisicoRaro=document.querySelector("#fisico-raro")
let fisicoCola=document.querySelector("#fisico-cola")
let fisicoPierna=document.querySelector('#fisico-piernas')
let adaptabilidad=document.querySelector("#adaptabilidad")
let afecto=document.querySelector("#Afecto")
let apto=document.querySelector("#Apto")
let amigable=document.querySelector("#amigable")
let nivel=document.querySelector("#nivel")
let aseo=document.querySelector("#aseo")
let salud=document.querySelector("#salud")
let inteligencia=document.querySelector("#inteligencia")
let amigableExtrano=document.querySelector("#amigable-extrano")
let buttonWikipedia=document.querySelector("#button-wikipedia")
let buttonVetstreet=document.querySelector("#button-vetstreet")
let buttonVcahospitals=document.querySelector("#button-vcahospitals")
let buttonCfa=document.querySelector("#button-cfa")
let containerInfoInfo=document.querySelector(".container-info-info")
let buttongift=document.querySelector("#button-gift")
let imggift=document.querySelector("#cats")
let input=document.querySelector("#input-text")

//container button gift
buttongift.addEventListener("click",()=>name())

function name() {
    imggift.firstElementChild.remove()
        let valor
        
        input.value == "" ? valor="deviste de ingresar una palabra":valor=input.value
        let imgss=document.createElement('img')
        imgss.className="img-cat"
        imgss.src=`https://cataas.com/cat/says/${valor}`
        imggift.append(imgss)
}

export default function ElementInfo(response,imgs){

    let arraysTemperatura=Separador(response.temperament,",")
    let containerH2=document.querySelector("#titulo-nombre-cat")
    let elementImg=document.querySelector("#img-container")
    let buttonVerinfo=document.querySelector('#button-ver-informacion')
    containerH2.textContent=response.name
    elementImg.setAttribute("src",imgs[0].url)
    let button =buttonVerinfo.classList.replace("hidden","cssbuttons-io")
    buttonVerinfo.addEventListener("click",()=>{
        containerInfoInfo.id="no"
    })

    //Container peso
    pesoImperial.textContent=response.weight.imperial
    pesoMetrica.textContent=response.weight.metric

    //Container temperatura
    listaTemperatura.innerHTML=" "
    arraysTemperatura.map(index=>{
        let elementLi=document.createElement("li")
        elementLi.textContent=index
        listaTemperatura.appendChild(elementLi)
    })

    //Container origen 
    origenOrigen.textContent=response.origin
    origenCodigo.textContent=response.country_codes

    //Container descricion
    descricion.textContent=response.description

    //Container vida util
    vidaUtil.textContent=response.life_span

    //Container fisico
    fisicoPelo.textContent=CondicionReturn(response.hairless)
    fisicoRaro.textContent=CondicionReturn(response.rare)
    fisicoCola.textContent=CondicionReturn(response.suppressed_tail)
    fisicoPierna.textContent=CondicionReturn(response.short_legs)

    //Container tabla 
    adaptabilidad.innerHTML=" "
    adaptabilidad.appendChild(range(response.adaptability))
    afecto.innerHTML=" "
    afecto.appendChild(range(response.affection_level))
    apto.innerHTML=" "
    apto.append(range(response.child_friendly))
    amigable.innerHTML=" "
    amigable.append(range(response.dog_friendly))
    nivel.innerHTML=" "
    nivel.append(range(response.energy_level))
    aseo.innerHTML=" "
    aseo.append(range(response.grooming))
    salud.innerHTML=" "
    salud.append(range(response.health_issues))
    inteligencia.innerHTML=" "
    inteligencia.append(range(response.intelligence))
    amigableExtrano.innerHTML=" "
    amigableExtrano.append(range(response.stranger_friendly))

    //container button
    buttonWikipedia.setAttribute("href",response.wikipedia_url)
    buttonVetstreet.setAttribute("href",response.vetstreet_url)
    buttonVcahospitals.setAttribute("href",response.vcahospitals_url)
    buttonCfa.setAttribute("href",response.cfa_url)
}

//funcion para convertir un conjunto de string en arrays 
const Separador=(text,separador)=>{
    let arraysSeparado=text.split(separador);
    return arraysSeparado
  }

const CondicionReturn=(num)=> num == 0? "No":"Si"

//funcion para mostrar el rango
function range(num) {
    let container=document.createElement("div")
    container.id="container-rango"
    let rango=["item1","item2","item3","item4","item5"]

for (let index = 0; index < num; index++) {
    let elementItem=document.createElement("div")
    elementItem.className=rango[index]
    elementItem.textContent="*"
    container.appendChild(elementItem)
}
return container

}