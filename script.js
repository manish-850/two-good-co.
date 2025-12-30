function startAnim(top,bottom){

    return document.querySelector(top).addEventListener("mouseenter", () => {
            gsap.to(bottom, {
                top: "calc(50% - 2vw)",
                height: "22vw",
                paddingTop: "6vw",
                paddingBottom: "1vw",
                ease: "expoScale",
                duration: 0.25,
                delay: 0.1
            })
        });
}

function endAnim(top,bottom){

    return document.querySelector(top).addEventListener("mouseleave", () => {
            gsap.to(bottom, {
                top: "calc(50% - 2vw)",
                height: "4vw",
                paddingTop: 0,
                paddingBottom: 0,
                ease: "pexpoScale",
                duration: 0.25,
                delay: 0.1
            })
        });
}

startAnim("#top1", "#bottom1");
endAnim("#top1", "#bottom1");

startAnim("#top2", "#bottom2");
endAnim("#top2", "#bottom2");

startAnim("#top3", "#bottom3");
endAnim("#top3", "#bottom3");















// Initialize Lenis
const lenis = new Lenis({
    autoRaf: true,
});

// Listen for the scroll event and log the event data
lenis.on('scroll', (e) => {
    console.log(e);
});