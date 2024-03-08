window.addEventListener("mousemove", function(details){
    // console.log(details.clientX);
    let rect = this.document.querySelector("#center")
    let  xval = gsap.utils.mapRange(0,
        this.window.innerWidth,
         100 + rect.getBoundingClientRect().width/2,
         this.window.innerWidth-(100 + rect.getBoundingClientRect().width/2),
         details.clientX)

    gsap.to('#center', {
        left: xval + "px",
        ease: Power3
    })
})


