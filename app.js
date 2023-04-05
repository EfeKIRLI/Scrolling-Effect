let forest = document.getElementById("forest1")
let moon = document.getElementById("mon1")
let text = document.getElementById("text")
let btn = document.getElementById("btn")
let sec = document.getElementById("sec")
let header = document.querySelector("header")

window.addEventListener("scroll",function(){
    let value = this.window.scrollY
    forest.style.left = value +"px" 
    //forest.style.left = value*0.25 +"px"
    // moon.style.top = value+ "px"
    // moon.style.bottom = value*2  + "px"
    moon.style.top = value*4+ "px"
    // forest.style.right = value + "px"
    text.style.marginRight = value*4 + "px"
    text.style.marginTop = value*1.5 + "px"
    header.style.top = value+"px"
})

