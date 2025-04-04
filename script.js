document.addEventListener("DOMContentLoaded", function() {
    

    const backgrounds = ['hero-bg1.jpg', 'hero-bg2.jpg', 'hero-bg3.jpg'];
    let Index = 0;

    function changeBackground() {
        document.querySelector('.hero').computedStyleMap.backgroundImage = `url('${backgrounds[index]}')`;
        Index = (Index + 1) % backgrounds.length;
    }

    setInterval(changeBackground, 5000);
    // Fade in effect on page load
    document.body.classList.add("loaded");

    // Smooth page transition
    const transition = document.createElement("div");
    transition.classList.add("page-transition");
    document.body.appendChild(transition);

    document.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", function(event) {
            if (!this.classList.contains("back-button")) {
                event.preventDefault();
                transition.classList.add("active");
                setTimeout(() => {
                    window.location.href = this.href;
                }, 500);
            }
        });
    });
    const textElement = document.querySelector(".typing-effect");
    const text = "Welcome to My Game Dev Blog";
    let index = 0;

    function typeText() {
        textElement.textContent = text.slice(0, index) + "|";
        index++;

        if(index <= text.length) {
            setTimeout(typeText, 100);
        } else {
            textElement.textContent = text;
        }
    }

    typeText();
});

