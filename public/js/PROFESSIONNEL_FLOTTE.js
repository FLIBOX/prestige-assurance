  document.addEventListener("DOMContentLoaded", function() {
            const fadeElements = document.querySelectorAll('.fade-in-up');
            function checkFade() { fadeElements.forEach(element => { if (element.getBoundingClientRect().top < window.innerHeight - 100) element.classList.add('visible'); }); }
            window.addEventListener('scroll', checkFade); checkFade();
        });