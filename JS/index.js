/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars:
true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/

//updated 1st time

window.onload = function() {
    let articleTitles = document.querySelectorAll("main section.stories article h2");
    for(let articleTitle of articleTitles) {
        articleTitle.addEventListener("click",clickArticleTitle);
    }

    let articleTexts = document.querySelectorAll("main section.stories article p");
    for(let articleText of articleTexts) {
        articleText.addEventListener("click",clickArticleText);
    }

    let likeIcons = document.querySelectorAll("img.like-icon");
    for(let likeIcon of likeIcons) {
        likeIcon.addEventListener("click",like);
    }

    let downloadIcons = document.querySelectorAll("img.download-icon");
    for(let downloadIcon of downloadIcons){
        downloadIcon.addEventListener("click",download);
    }

    let categoryDiv = document.getElementById("category");
    categoryDiv.addEventListener("click", showHideCategory);
}

function clickArticleTitle(event) {
    let titleElt = event.target;
    let aElt = titleElt.nextElementSibling.nextElementSibling;
    aElt.click();
}

function clickArticleText(event) {
    let pElt = event.target;
    let aElt = pElt.nextElementSibling;
    aElt.click();
}


function like(event) {
    let likeIcon = event.target;
    if (likeIcon.classList.contains("like")) {
        likeIcon.src = "Afbeeldingen/thumbs-up-regular.svg";
        likeIcon.classList.remove("like");
        likeIcon.classList.add("unlike");
        let audioUnlike = document.getElementById("audio-unlike");
        audioUnlike.play();
        window.navigator.vibrate(100)

        let likeCount = likeIcon.nextElementSibling.textContent;
        likeCount--;
        likeIcon.nextElementSibling.textContent = likeCount;

    } else {
        likeIcon.src = "Afbeeldingen/thumbs-up-solid.svg";
        likeIcon.classList.remove("unlike");
        likeIcon.classList.add("like");
        let audioLike = document.getElementById("audio-like");
        audioLike.play();

        let likeCount = likeIcon.nextElementSibling.textContent;
        likeCount++;
        likeIcon.nextElementSibling.textContent = likeCount;
    }
}

function download(event) {
    let downloadIcon = event.target;
    downloadIcon.classList.remove("downloaded");
    let containerElt = downloadIcon.parentElement.parentElement;
    containerElt.style.opacity = 0.3;
    let articleElt = containerElt.parentElement;
    let loadingImgElt = articleElt.querySelector(".loading");
    loadingImgElt.style.display = "block";


    setTimeout(function () {
        containerElt.style.opacity = 1;
        loadingImgElt.style.display = "none";
        downloadIcon.src = "Afbeeldingen/check-solid.svg";
        downloadIcon.classList.add("downloaded");
        let audioDing = document.getElementById("audio-ding");
        audioDing.play();
    }, 3000);




}

function showHideCategory(event) {
    let divElt = event.target;
    let ulElt = divElt.nextElementSibling;
    if (ulElt.style.display === "block") {
        ulElt.style.display = 'none';
    } else {
        ulElt.style.display = 'block';
    }
}
