import './style.css'
import json from './data/testimonial.json'

const body = document.querySelector("body");
const content = document.createElement("div");
content.classList.add("content");

function createHeader() {
    const header = document.createElement("div");
    header.classList.add("header");
    header.textContent = "City Food";

    return header
}

function createNav() {
    const pages = ["Breakfast","Lunch","Dinner","Reservations","About"];

    const navContainer = document.createElement("div");
    navContainer.classList.add("navigation");

    const navUl = document.createElement("ul");
    navUl.classList.add("navigation-list");

    pages.forEach((pageText) => {
       const navLi = document.createElement("li");
       navLi.classList.add("navigation-list-item");
       navLi.textContent = pageText;
       navUl.appendChild(navLi)
    });

    navContainer.appendChild(navUl);

    return navContainer;
}

function createSiteContent() {
    const siteContent = document.createElement("div");
    siteContent.classList.add("site-content");

    const siteContentText = document.createElement("div");
    siteContentText.classList.add("site-content-display");
    siteContentText.textContent = "This is going to be a list of food";

    siteContent.appendChild(siteContentText);

    return siteContent;
}

function createTestimonial() {
    const testimonialJson = json.Testimonials;
    const testimonialIndex =  Math.floor(Math.random() * 4);

    const testimonial = document.createElement("div");
    testimonial.classList.add("testimonial");

    const testimonialText = document.createElement("p");
    testimonialText.classList.add("testimonial-text");
    testimonialText.textContent = testimonialJson[testimonialIndex].text;

    const testimonialAuthor = document.createElement("p");
    testimonialAuthor.classList.add("testimonial-author");
    testimonialAuthor.textContent = "- " + testimonialJson[testimonialIndex].author + " "
        + "*".repeat(testimonialJson[testimonialIndex].rating);c

    testimonial.appendChild(testimonialText);
    testimonial.appendChild(testimonialAuthor);

    return testimonial;
}

function createFooter() {
    const footer = document.createElement("div")
    footer.classList.add("footer");
    footer.textContent = "This is a footer";

    return footer;
}

content.appendChild(createHeader());
content.appendChild(createNav());
content.appendChild(createSiteContent());
content.appendChild(createTestimonial());
content.appendChild(createFooter());

body.appendChild(content);