const apiKey = 'yMwJKe8FphgKPn4Wh4AywIZAwJCNOcTJR7-r8IBlXu0';
const count = 30;
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;
const imageContainer = document.getElementById('imageDiv');
const loader = document.getElementById('loading');

let isDownloaded = false;
let imagesloaded = 0;
let totalImages = 0;
let imagesArray = [];

getImages();

async function getImages() {
    try {
        const response = await fetch(apiUrl);
        imagesArray = await response.json();

        console.log(imagesArray);

        displayImages();


    } catch (error) {

    }
}

function displayImages() {
    imagesloaded = 0;
    totalImages = imagesArray.length;
    imagesArray.forEach(image => {
        const item = document.createElement('a');
        setAttributeS(item, { href: image.urls.regular });
        // item.setAttribute('href', image.urls.regular);
        const img = document.createElement('img');
        setAttributeS(img, { src: image.urls.regular });
        setAttributeS(img, { alt: image.alt_description })
        // img.setAttribute('src', image.urls.regular);
        // img.setAttribute('alt', image.alt_description);
        img.addEventListener('load', imageLoaded);
        item.appendChild(img);
        imageContainer.appendChild(item);

    });
}

function setAttributeS(element, attributes) {
    for (const key in attributes) {
        element.setAttribute(key, attributes[key])
    }
}


window.addEventListener('scroll', () => {

    // window.innerHeight browser yüksekliği
    // window.scrollY yukarıdan scroll olana kadarki mesafemiz 

    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 && isDownloaded) {
        getImages();
        isDownloaded = false;
    }
});

function imageLoaded() {
    isDownloaded = false;
    loader.hidden = false;

    imagesloaded++;
    if (imagesloaded == totalImages) {
        isDownloaded = true;
        loader.hidden = true;
    }
}



