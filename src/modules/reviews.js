import json from "../data/reviews.json";
import StarSVG from "../images/star.svg";
import StarOutlineSVG from "../images/star-outline.svg";
import ArrowLeft from "../images/arrow-left.svg";
import ArrowRight from "../images/arrow-right.svg";

function createReviewObject() {
    const review = document.createElement("div");
    review.classList.add("review");

    createReviewText(review, 0);
    createReviewButtons(review);

    return review;
}

function createReviewText(review, index) {
    const reviewJson = json.reviews;
    let reviewCarousel;

    if (document.querySelector(".review-carousel")) {
        reviewCarousel = document.querySelector(".review-carousel")
    } else {
        reviewCarousel = document.createElement("div")
        reviewCarousel.classList.add("review-carousel")
    }

    review.setAttribute("data-index", index);

    const reviewText = document.createElement("p");
    reviewText.classList.add("review-text");
    reviewText.textContent = reviewJson[index].text;

    const reviewRating = document.createElement("div");
    reviewRating.classList.add("review-rating");

    // Add Review stars
    for (let i = 0; i < reviewJson[index].rating; i++) {
        const star = new Image();
        star.src = StarSVG;
        reviewRating.appendChild(star);
    }
    for (let i = 5; i > reviewJson[index].rating; i--) {
        const starOutline = new Image();
        starOutline.src = StarOutlineSVG;
        reviewRating.appendChild(starOutline);
    }

    const reviewAuthor = document.createElement("p");
    reviewAuthor.classList.add("review-author");
    reviewAuthor.textContent = "- " + reviewJson[index].author

    reviewCarousel.appendChild(reviewText);
    reviewCarousel.appendChild(reviewRating);
    reviewCarousel.appendChild(reviewAuthor);
    review.appendChild(reviewCarousel);
}

function removeReviewText() {
    const review = document.querySelector(".review-carousel");
    while (review.firstChild) {
        review.firstChild.remove();
    }
}

function createReviewButtons(review) {
    const maxLength = json.reviews.length;

    const leftArrowImage = new Image();
    leftArrowImage.src = ArrowLeft;
    leftArrowImage.classList.add("review-btn","review-btn-left");
    leftArrowImage.addEventListener("click", () => {
        const index = Number(review.getAttribute("data-index"));
        if (index <= 0) {
            removeReviewText();
            createReviewText(review, maxLength - 1);
            return;
        }
        removeReviewText();
        createReviewText(review, index - 1);
    });

    const rightArrowImage = new Image();
    rightArrowImage.src = ArrowRight;
    rightArrowImage.classList.add("review-btn","review-btn-right");
    rightArrowImage.addEventListener("click", () => {
        let index = Number(review.getAttribute("data-index"));
        if (index >= maxLength - 1) {
            removeReviewText()
            createReviewText(review, 0)
            return;
        }
        removeReviewText()
        createReviewText(review, index+1)
    });

    review.appendChild(rightArrowImage);
    review.appendChild(leftArrowImage);
}

export { createReviewObject }