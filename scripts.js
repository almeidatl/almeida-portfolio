//ANIMATION -- HERO TITLE APPEARING

document.addEventListener('DOMContentLoaded', function () {
    const animatedText = document.querySelector('.animatedText');
    const text = animatedText.textContent;
    animatedText.innerHTML = ''; // Clear the text content

    // Iterate through each character and create a span for it
    for (let i = 0; i < text.length; i++) {
        const span = document.createElement('span');
        span.textContent = text[i] === ' ' ? '\u00A0' : text[i]; // Use '\u00A0' for non-breaking space
        span.style.animationDelay = `${i * 0.1}s`; // Adjust the delay as needed
        animatedText.appendChild(span);
    }

    animatedText.style.opacity = 1; // Make the text visible

    //HAMBURGUER MENU TRANSFORM WHEN RESPONSIVE


    // const mobileBtn = document.querySelector('.mobileMenuBtn')
    // const mobileMenu = document.querySelector('.mobileMenu')

    // mobileBtn.addEventListener('click', () => {
    
    // mobileMenu.classList.add('mobileMenuOpen')    
    // })

    const mobileBtn = document.querySelector('.mobileMenuBtn');
    const mobileMenu = document.querySelector('.mobileMenu');
    const burgerIcon = document.querySelector('.burgerIcon');
    const closeIcon = document.querySelector('.closeIcon');

    mobileBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('mobileMenuOpen');
        burgerIcon.classList.toggle('hide');
        closeIcon.classList.toggle('show');
    });

});

