import '../css/main.css';
import gsap from 'gsap';
import barba from '@barba/core';


const animation = () => {
    const tl = gsap.timeline();
    tl.from('h1', {
        y: 100,
        opacity: 0,
        duration: 1.5
    }).from('.btn', {
        scale: 0,
        opacity: 0,
        duration: 1.5,
        
    })
}


const pageTransition = () => {
    let tl = gsap.timeline();
    tl.to(".loader", {
        duration: 1.2,
        width: "100%",
        left: "0%",
        ease: "Expo.easeInOut"
    });

    tl.to(".loader", {
        duration: 1,
        width: "100%",
        left: "100%",
        ease: "Expo.easeInOut",
        delay: 0.3
    });

    tl.set('.loader', {left: "-100%"});
}


function delay(n) {
    n = n || 2000;
    return new Promise((done) => {
        setTimeout(() => {
            done();
        }, n);
    });
}

barba.init({
    sync: true,

    transitions: [
        {
            async leave(data) {
                pageTransition();
                await delay(1000);
                console.log("leaving");
                // data.current.container.remove();
            },

            async enter(data){
                animation();
            },

            async once(data) {
                animation();
            }

        },
    ]
})

