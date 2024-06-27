document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById('menu-toggle');
    const nav = document.querySelector('header nav ul');
    
    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('open');
    });

    const sections = document.querySelectorAll('.section');
    const options = {
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            }
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });

    const typingText = document.querySelector('.typing');
    const words = ["Web Developer", "Graphic Designer", "Python Developer"];
    let wordIndex = 0;
    let letterIndex = 0;
    let currentWord = "";
    let currentLetters = "";

    function type() {
        if (letterIndex < words[wordIndex].length) {
            currentWord = words[wordIndex];
            currentLetters = currentWord.slice(0, ++letterIndex);
            typingText.textContent = currentLetters;
            setTimeout(type, 200);
        } else {
            setTimeout(erase, 2000);
        }
    }

    function erase() {
        if (letterIndex > 0) {
            currentLetters = currentWord.slice(0, --letterIndex);
            typingText.textContent = currentLetters;
            setTimeout(erase, 100);
        } else {
            wordIndex = (wordIndex + 1) % words.length;
            setTimeout(type, 200);
        }
    }

    type();
});
