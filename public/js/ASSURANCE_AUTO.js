  document.addEventListener("DOMContentLoaded", function() {
            const fadeElements = document.querySelectorAll('.fade-in-up');

            function checkFade() {
                fadeElements.forEach(element => {
                    const elementTop = element.getBoundingClientRect().top;
                    const windowHeight = window.innerHeight;
                    if (elementTop < windowHeight - 100) {
                        element.classList.add('visible');
                    }
                });
            }

            window.addEventListener('scroll', checkFade);
            checkFade(); // Check on initial load
        });