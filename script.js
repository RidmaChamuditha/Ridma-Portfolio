
// =====================================
// RIDMA PORTFOLIO - JAVASCRIPT
// =====================================

document.body.classList.add("js-enabled");

document.addEventListener("DOMContentLoaded", () => {

    // CURRENT YEAR
    const yearElement =
        document.getElementById("current-year");

    if (yearElement) {
        yearElement.textContent =
            new Date().getFullYear();
    }

    // SCROLL REVEAL ANIMATIONS
    const revealElements =
        document.querySelectorAll(".reveal");

    if ("IntersectionObserver" in window) {

        const observer = new IntersectionObserver(
            (entries, currentObserver) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "visible"
                        );

                        currentObserver.unobserve(
                            entry.target
                        );
                    }

                });

            },
            {
                threshold: 0.08,
                rootMargin: "0px 0px -25px 0px"
            }
        );

        revealElements.forEach((element) => {
            observer.observe(element);
        });

    } else {

        revealElements.forEach((element) => {
            element.classList.add("visible");
        });

    }

});
