let hader = document.querySelector('header')

let link = document.getElementById("link")
let menu = document.getElementById("menu")
let span = document.getElementById("span")
console.log(menu);





//  scrolتستخدم هذه الدلة حتى معرفة موقع ال 
window.onscroll = function () {

    if (this.scrollY >= 850) {
        span.classList.add("acriv")
    }

     else{
        span.classList.remove("acriv")

    }



}

function sclroup(){
    window.scrollTo({
        top:0,
        behavior:"smooth",
    })
}





function sclro1() {
    window.scrollTo({
        top: 151.11111450195312,
        behavior: "smooth",
    })
}


function sclro2() {
    window.scrollTo({
        top: 624.888916015625,
        behavior: "smooth",
    })
}



function scrol3() {
    window.scrollTo({
        top: 1299,
        behavior: "smooth",
    })
}

function scrol4() {

    window.scrollTo({
        top: 2129,
        behavior: "smooth",
    })
}





function scrol5() {


    window.scrollTo({

        top: 2982.22216796875,
        behavior: "smooth",

    })

}


