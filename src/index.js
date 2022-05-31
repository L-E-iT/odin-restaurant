import './style.css'
import {generateSiteContent} from "./modules/tabs";
import {createReviewObject} from "./modules/reviews";
require('./modules/tabs');

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
    const pages = ["Breakfast","Lunch","Dinner"];

    const navContainer = document.createElement("div");
    navContainer.classList.add("navigation");

    const navUl = document.createElement("ul");
    navUl.classList.add("navigation-list");

    pages.forEach((pageText) => {
       const navLi = document.createElement("li");
       navLi.classList.add("navigation-list-item");
       navLi.textContent = pageText;
       navUl.appendChild(navLi);
       navLi.addEventListener("click", (e) => {
           generateSiteContent(pageText);
           const current = document.getElementsByClassName("active");
           current[0].className = current[0].className.replace(" active", "");
           e.target.classList.add("active");
       });
       if (pageText === "Breakfast") {
           navLi.classList.add("active");
       }
    });

    navContainer.appendChild(navUl);

    return navContainer;
}

function createSiteContent() {
    const siteContent = document.createElement("div");
    siteContent.classList.add("site-content");
    siteContent.classList.add("site-content-grid")

    return siteContent;
}

function createFooter() {
    const footer = document.createElement("div")
    footer.classList.add("footer");
    footer.textContent = "© CityFood";

    return footer;
}

content.appendChild(createHeader());
content.appendChild(createNav());
content.appendChild(createSiteContent());
content.appendChild(createReviewObject());
content.appendChild(createFooter());

body.appendChild(content);

// Initial population of site content
generateSiteContent();