const modal = document.getElementById('modal');

const modelShow = document.getElementById('show-modal');
const modelClose = document.getElementById('close-model');
const websiteName = document.getElementById('website-name');
const websiteUrl = document.getElementById('website-url');


const backlinksContainer = document.getElementById('backlinks-container');

const backLinkForm = document.getElementById('backlink-form');

let backLinks = [];


function showModal() {
    modal.classList.add('show-model');
    websiteName.focus();
}

function validate(name, url) {
    const expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/g;
    const regex = new RegExp(expression);

    if (!name || !url) {
        alert("Lütfen Gerekli Alanları Doldurunuz.")
        return false;
    }

    if (!url.match(regex)) {
        alert("Lütfen Geçerli Bir Website Adresi Giriniz!");
        return false;
    }

    return true;
}

function deleteBackLink(url) {
    backLinks.forEach((backlink, i) => {
        if(backlink.url === url) {
            backLinks.splice(i,1);
        }
    });

    localStorage.setItem("backlinks", JSON.stringify(backLinks));
    fetchBackLinks();

}

function buldBackLinks() {
    backlinksContainer.textContent = '';

    backLinks.forEach((backLink) => {
        const { name, url } = backLink;
        const item = document.createElement('div');
        item.classList.add('item');
        const closeIcon = document.createElement('i');
        closeIcon.classList.add('fas','fa-times');
        closeIcon.setAttribute('onclick', `deleteBackLink('${url}')`)
        


        const linkInfo = document.createElement('div');
        linkInfo.classList.add('name');
        const link =document.createElement('a');
        link.setAttribute('href', `${url}`);
        link.setAttribute('target', '_blank');
        link.textContent = name;

        linkInfo.appendChild(link);

        item.append(closeIcon, linkInfo);
        // item.appendChild(closeIcon);
        // item.appendChild(linkInfo);

        backlinksContainer.appendChild(item);

    })
}

function fetchBackLinks() {
    if (localStorage.getItem("backlinks")) {
        backLinks = JSON.parse(localStorage.getItem("backlinks"));
    }

    buldBackLinks();
}

function storeBackLink(e) {

    e.preventDefault();

    const nameValue = websiteName.value;
    let urlValue = websiteUrl.value;

    if (!urlValue.includes('https://') && !urlValue.includes('http://')) {
        urlValue = `https://${urlValue}`;
    }

    console.log(nameValue, urlValue);

    if (!validate(nameValue, urlValue)) {
        return;
    }

    const backLink = {
        name: nameValue,
        url: urlValue
    }

    backLinks.push(backLink);

    localStorage.setItem("backlinks", JSON.stringify(backLinks));
    modal.classList.remove('show-model');
    fetchBackLinks();
    backLinkForm.reset();
    // websiteName.focus();
}

modelShow.addEventListener('click', showModal);
modelClose.addEventListener('click', () => {
    modal.classList.remove('show-model');
});

backLinkForm.addEventListener('submit', storeBackLink);

fetchBackLinks();
