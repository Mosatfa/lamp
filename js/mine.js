let btnOn = document.querySelector("#btnOn");
let btnOff = document.querySelector("#btnOff");
let btnOnOff = document.querySelector("#turnOnOff");

btnOn.addEventListener("click",turnOn)
btnOff.addEventListener("click",turnOff)

function turnOn(){
    document.body.style.backgroundColor = "yellow";
    document.images[0].src = "images/on.png"
    btnOnOff.innerHTML = "Turn off"
}   

function turnOff(){
    document.body.style.backgroundColor = "gray";
    document.images[0].src = "images/off.png"
    btnOnOff.innerHTML = "Turn on"
}

btnOnOff.addEventListener("click",()=>{
    if(btnOnOff.innerHTML == "Turn on"){
        turnOn()
    }
    else{
        turnOff()
    }
})
