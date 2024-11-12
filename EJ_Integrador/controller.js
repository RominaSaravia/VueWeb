function pickColorItem(el){     
    imgElemet = el.parentElement.parentElement.parentElement.parentElement.querySelector("img") ;
    imgElemet.src = "./img/taza-item-"+el.id+".jpg"

}

function handleHover(el){
    console.log('hover')
    el.querySelector(".details-child").style = "height:80px;color:black";

}

function handleHoverLeave(el){
    el.querySelector(".details-child").style = "height:20px;color:white";

}