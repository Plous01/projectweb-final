/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars:
true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/

//updated 1st time


function like(elt) {
    if (elt.classList.contains("like")) {
        elt.src = "Afbeeldingen/thumbs-up-regular.svg";
        elt.classList.remove("like");
        elt.classList.add("unlike");
        let audioUnlike = document.getElementById("audio-unlike");
        audioUnlike.play();
        window.navigator.vibrate(100)

        let likeCount = elt.nextElementSibling.textContent;
        likeCount--;
        elt.nextElementSibling.textContent = likeCount;

    } else {
        elt.src = "Afbeeldingen/thumbs-up-solid.svg";
        elt.classList.remove("unlike");
        elt.classList.add("like");
        let audioLike = document.getElementById("audio-like");
        audioLike.play();

        let likeCount = elt.nextElementSibling.textContent;
        likeCount++;
        elt.nextElementSibling.textContent = likeCount;

    }
}

function download(elt) {
    elt.classList.remove("downloaded");
    let containerElt = elt.parentElement.parentElement;
    containerElt.style.opacity = 0.3;
    let articleElt = containerElt.parentElement;
    let loadingImgElt = articleElt.querySelector(".loading");
    loadingImgElt.style.display = "block";


    setTimeout(function () {
        containerElt.style.opacity = 1;
        loadingImgElt.style.display = "none";
        elt.src = "Afbeeldingen/check-solid.svg";
        elt.classList.add("downloaded");
        let audioDing = document.getElementById("audio-ding");
        audioDing.play();
    }, 3000);




}

function showHideCategory(elt) {
    console.log(elt);
    let ulElt = elt.nextElementSibling;
    if (ulElt.style.display === "block") {
        ulElt.style.display = 'none';
    } else {
        ulElt.style.display = 'block';
    }
}
