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

// Get the scroll-to-top button
const scrollToTopButton = document.getElementById('scrollToTop');

// Show or hide the button based on scroll position
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopButton.classList.add('visible');
    } else {
        scrollToTopButton.classList.remove('visible');
    }
});

// Smooth scroll to top when the button is clicked
scrollToTopButton.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});





// document.addEventListener("DOMContentLoaded", function() {
//     const scrollDown = document.getElementById('scrollDown');
//     const skillBars = document.querySelectorAll('.skill-bar');

//     // Smooth scrolling for scroll down arrow
//     scrollDown.addEventListener('click', function(e) {
//         e.preventDefault();
//         document.querySelector(scrollDown.getAttribute('href')).scrollIntoView({
//             behavior: 'smooth'
//         });
//     });

//     // Skills bar animation on scroll
//     function animateSkillBars() {
//         skillBars.forEach(bar => {
//             const skillLevel = bar.getAttribute('data-skill');
//             bar.style.width = skillLevel;
//         });
//     }

//     function checkScroll() {
//         const sectionPos = document.getElementById('about').getBoundingClientRect().top;
//         const screenPos = window.innerHeight / 1.3;

//         if (sectionPos < screenPos) {
//             animateSkillBars();
//             window.removeEventListener('scroll', checkScroll);
//         }
//     }

//     window.addEventListener('scroll', checkScroll);
// });


// about section

document.addEventListener("DOMContentLoaded", function() {
    const aboutContent = document.querySelector('.about-content');

    function checkScroll() {
        const sectionPos = aboutContent.getBoundingClientRect().top;
        const screenPos = window.innerHeight / 1.3;

        if (sectionPos < screenPos) {
            aboutContent.classList.add('fade-in');
            window.removeEventListener('scroll', checkScroll);
        }
    }

    window.addEventListener('scroll', checkScroll);
});


// education section

// Function to activate timeline items with fade-in effect
function activateTimelineItems() {
    const timelineItems = document.querySelectorAll('.timeline-item');

    timelineItems.forEach((item, index) => {
        setTimeout(() => {
            item.classList.add('active');
        }, index * 300); // Adjust delay time as needed
    });
}

// Activate timeline items when they come into view
window.addEventListener('scroll', () => {
    const timeline = document.getElementById('timeline');
    const timelineTop = timeline.getBoundingClientRect().top;

    if (timelineTop < window.innerHeight / 1.3) {
        activateTimelineItems();
    }
});

// Activate timeline items immediately if already in view on page load
window.addEventListener('load', () => {
    const timeline = document.getElementById('timeline');
    const timelineTop = timeline.getBoundingClientRect().top;

    if (timelineTop < window.innerHeight / 1.3) {
        activateTimelineItems();
    }
});
