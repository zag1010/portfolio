let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');


window.onscroll = () =>{
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id +']').classList.add('active');
            });
        };
    });

  // navbar on-------------scroll---------------------------- 
    let header = document.querySelector('.header');
    
    header.classList.toggle('sticky', window.scrollY > 100);
};
// dark----------------- mode--------------------------------
let darkModeIcon = document.querySelector('#darkMode-icon');

darkModeIcon.onclick = () => {
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
};


// scroll------------ reveal----------------------------------------
ScrollReveal({
    reset: true,
    distance: '90px',
    duration: 3000,
    delay: 200
});

ScrollReveal().reveal('.home-content', { origin: 'top' });
ScrollReveal().reveal('.heading', { origin: 'top' });
ScrollReveal().reveal('.home-img img', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1', { origin: 'left' });
ScrollReveal().reveal('.home-content h3', { origin: 'right' });
ScrollReveal().reveal('.home-content p', { origin: 'right' });
ScrollReveal().reveal('.about-img img', { origin: 'left' });
ScrollReveal().reveal('.about-img img', { origin: 'left' });
ScrollReveal().reveal('.about-content', { origin: 'right' });
ScrollReveal().reveal('.services-container', { origin: 'bottom' });
ScrollReveal().reveal('.portfolio h3', { origin: 'bottom' });
ScrollReveal().reveal('.contact-row', { origin: 'bottom' });



