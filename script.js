var icons = document.querySelectorAll(".icon");
var shadow = document.querySelector("#shadow");


icons.forEach(function(val, index){
    val.addEventListener("click",function(){
        change();
        gsap.to("#shadow",{
            x:index*100,
            ease: Expo.easeInOut,
            duration:.2
        })
        gsap.to(this.children,{
            opacity:1
        })
    })
})

function change(){
    gsap.to(".icon i",{
        opacity:0.3
    })
}