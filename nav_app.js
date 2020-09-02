const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.links');
    const navLinks = document.querySelectorAll('.links li');

burger.addEventListener('click', ()=>{
    //Toggle Nav in Mobile View
    nav.classList.toggle('nav-active');

    //Animate the li elements
    navLinks.forEach((link, index) => {
        if(link.style.animation){
            link.style.animation = ''
        } else {
            link.style.animation = link.style.animation = `navLinkFade 1s ease forwards ${index / 7 + 1}s`;
        }
    });
    //Burger Animation
    burger.classList.toggle('toggle');
});

}

navSlide();