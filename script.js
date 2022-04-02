let controller;
let slideScene;
let pageScene;


// Slides that occur throughout the page. Primarily from left to right concerning images and text.
function animateSlides() {
    //Init Controller
    controller = new ScrollMagic.Controller();
    //Selct some things
    const sliders = document.querySelectorAll('.slide')
    const nav = document.querySelector('.nav-header');
    // Loop over each slide
    sliders.forEach((slide, index, slides) =>{
        const revealImg = slide.querySelector('.reveal-img');
        const img = slide.querySelector('img');
        const revealText = slide.querySelector('.reveal-text');
        // GSAP
        // gsap.to(revealImg, 1, { x: "100%"});  This was the problem that left the images on the page when it first loaded up. It essential revealed the img before the scroll could take place.
        const slideTl = gsap.timeline({defaults: {duration: 1, ease: 'power2.inOut'}});
        let nextSlide = slides.length - 1 ===index ? 'end' : slides[index + 1]
        pageTl.fromTo(nextSlide, {y = '0%', y: '50%'});
        pageTl.fromTo(slide, {opacity: 1, scale: 1}, {opacity: 0, scale: 0});
        pageTl.fromTo(nextSlide, {y = '50%', y: '0%'} -=0.5);
        slideTl.fromTo(revealImg, {x: '0%'}, {x: '100%'});
        slideTl.fromTo(img, {scale: 2}, {scale: 1}, '-=1');
        // after the two objects, the -=1 makes the animation occur 1 second sooner for a simultaneous effect.
        slideTl.fromTo(revealText, {x: '0%'}, {x:'100%'}, '-=0.75');
        slideTl.fromTo(nav, {y: '-100%'}, {y:'0%'}, '=-0.5');
        slideScene = new ScrollMagic.Scene({
            triggerElement: slide,
            triggerHook: 0.25,
            reverse: false
            // reverse: false allows the page to leave the revealed information in place.
        })
        .setTween(slideTl)
        .addIndicators({
            colorStart: "white",
            colorTrigger: "white",
            name: "slide"
        })
        .addTo(controller)
        // New Animation
        const pageTl = gsap.timeline();
        pageTl.fromTo(slide, {opacity: 1, scale: 1}, {opacity: 0, scale: 0.5});

    });
    // Create New Scene
    pageScene = new ScrollMagic.Scene({
        triggerElement: slide,
        duration: '100%',
        triggerHook: 0
    })
        .addIndicators ({
            colorStart: "white",
            colorTrigger: "white",
            name: "page",
            indent: 200
        })
        .setPin(slide, {pushFOllowers: false})
        // pin has the image stay in spot that it was scrolled to and then fade to the back of the page.
        .setTween(pageTl)
        .addTo(controller);
    )};
    }

animateSlides();