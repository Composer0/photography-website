let controller;
let slideScene;


// Slides that occur throughout the page. Primarily from left to right concerning images and text.
function animateSlides() {
    //Init Controller
    controller = new ScrollMagic.Controller();
    //Selct some things
    const sliders = document.querySelectorAll('.slide')
    const nav = document.querySelector('.nav-header');
    // Loop over each slide
    sliders.forEach(slide =>{
        const revealImg = slide.querySelector('.reveal-img');
        const img = slide.querySelector('img');
        const revealText = slide.querySelector('.reveal-text');
        // GSAP
        gsap.to(revealImg, 1, { x: "100%"});
        const slideTl = gsap.timeline({defaults: {duration: 1, ease: 'power2.inOut'}});
        slideTl.fromTo(revealImg, {x: '0%'}, {x: '100%'});
        slideTl.fromTo(img, {scale: 2}, {scale: 1}, '-=1');
        // after the two objects, the -=1 makes the animation occur 1 second sooner for a simultaneous effect.
        slideTl.fromTo(revealText, {x: '0%'}, {x:'100%'}, '-=0.75');
        slideTl.fromTo(nav, {y: '-100%'}, {y:'0%'}, '=-0.5');
    }
)};

animateSlides()