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
        event.preventDefault(); 
        const href = link.getAttribute('href');
        const section = document.querySelector(href);
        section.scrollIntoView({ behavior: 'smooth' });

        //close menu after 500ms delay
        setTimeout(() => {
            primaryNav.setAttribute('data-visible', false); 
            navToggle.setAttribute('aria-expanded', false); 
        }, 500);
    });
});

// About section buttons color swap
const cvBtn = document.querySelector("#cv-btn");
const viewBtn = document.querySelector("#view-btn");

cvBtn.addEventListener("mouseenter", () => {
  cvBtn.style.backgroundColor = "black";
  cvBtn.style.color = "white";
  viewBtn.style.backgroundColor = "#f3f1ef";
  viewBtn.style.color = "black";
  cvBtn.style.transition = "all 0.1s ease-in-out";
  viewBtn.style.transition = "all 0.1s ease-in-out";
});

cvBtn.addEventListener("mouseleave", () => {
  cvBtn.style.backgroundColor = "#f3f1ef";
  cvBtn.style.color = "black";
  viewBtn.style.backgroundColor = "black";
  viewBtn.style.color = "white";
  cvBtn.style.transition = "all 0.1s ease-in-out";
  viewBtn.style.transition = "all 0.1s ease-in-out";
});

viewBtn.addEventListener("mouseenter", () => {
  viewBtn.style.backgroundColor = "#f3f1ef";
  viewBtn.style.color = "black";
  cvBtn.style.backgroundColor = "black";
  cvBtn.style.color = "white";
  cvBtn.style.transition = "all 0.1s ease-in-out";
  viewBtn.style.transition = "all 0.1s ease-in-out";
});

viewBtn.addEventListener("mouseleave", () => {
  viewBtn.style.backgroundColor = "black";
  viewBtn.style.color = "white";
  cvBtn.style.backgroundColor = "#f3f1ef";
  cvBtn.style.color = "black";
  cvBtn.style.transition = "all 0.1s ease-in-out";
  viewBtn.style.transition = "all 0.1s ease-in-out";
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
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const id = entry.target.getAttribute('id');
        const menuItem = document.querySelector(`.primary-navigation a[href="#${id}"]`);

        if (entry.isIntersecting) {
            menuItem.classList.add('active'); 
        } else {
            menuItem.classList.remove('active'); 
        }
    });
});

//observe each section in the document
const sections = document.querySelectorAll('section');

sections.forEach(section => {
    observer.observe(section);
}); 


