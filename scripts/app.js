//creating hamburger toggle functionality
const primaryNav = document.querySelector('.primary-navigation');
const navToggle = document.querySelector('.mobile-nav-toggle');

navToggle.addEventListener('click', () => {
    const visibility = primaryNav.getAttribute('data-visible');

    if (visibility === 'false') {
        primaryNav.setAttribute('data-visible', true);
        navToggle.setAttribute('aria-expanded', true);
    }

    else if (visibility === 'true') {
        primaryNav.setAttribute('data-visible', false);
        navToggle.setAttribute('aria-expanded', false);

    }
});

//scroll to section when link is clicked
const links = document.querySelectorAll('.primary-navigation a');

links.forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault(); //prevent default link behavior
        const href = link.getAttribute('href'); //get section id from href attribute
        const section = document.querySelector(href); //get corresponding section element
        section.scrollIntoView({ behavior: 'smooth' });

        //close menu after 500ms delay
        setTimeout(() => {
            primaryNav.setAttribute('data-visible', false); //close menu
            navToggle.setAttribute('aria-expanded', false); //update toggle button
        }, 500);
    });
});


// Marquee section
const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
const marqueeContent = document.querySelector(".marquee-content");

root.style.setProperty("--marquee-elements", marqueeContent.children.length);

for (let i = 0; i < marqueeElementsDisplayed; i++) {
    marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}

// IntersectionObserver
