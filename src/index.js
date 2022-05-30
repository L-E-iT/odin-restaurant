import './style.css'
import json from './data/reviews.json'
import StarSVG from './images/star.svg'
import StarOutlineSVG from './images/star-outline.svg'
import {generateSiteContent} from "./tabs/tabs";
require('./tabs/tabs');

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

    return siteContent;
}

function createReview() {
    const reviewJson = json.reviews;
    const reviewIndex =  Math.floor(Math.random() * 4);

    const review = document.createElement("div");
    review.classList.add("review");

    const reviewText = document.createElement("p");
    reviewText.classList.add("review-text");
    reviewText.textContent = reviewJson[reviewIndex].text;

    const reviewRating = document.createElement("div");
    reviewRating.classList.add("review-rating");

    // Add Review stars
    for (let i = 0; i < reviewJson[reviewIndex].rating; i++) {
        const star = new Image();
        star.src = StarSVG;
        reviewRating.appendChild(star);
    }
    for (let i = 5; i > reviewJson[reviewIndex].rating; i--) {
        const starOutline = new Image();
        starOutline.src = StarOutlineSVG;
        reviewRating.appendChild(starOutline);
    }

    const reviewAuthor = document.createElement("p");
    reviewAuthor.classList.add("review-author");
    reviewAuthor.textContent = "- " + reviewJson[reviewIndex].author

    review.appendChild(reviewText);
    review.appendChild(reviewRating);
    review.appendChild(reviewAuthor);

    return review;
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
content.appendChild(createReview());
content.appendChild(createFooter());

body.appendChild(content);

generateSiteContent("Breakfast");