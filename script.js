const images = [
    {
        "title": "Cambridge Central Mosque, Mill Road, Cambridge, UK",
        "url": "/images/img1.jpg",
    },
    {
        "title": "Image of a blue butterfly sitting on a cat's nose",
        "url": "/images/img2.jpg",
    },
    {
        "title": "Photo of the Taj Mahal taken during sunrise",
        "url": "/images/img3.jpg",
    },
    {
        "title": "Waterfall in Iceland",
        "url": "/images/img4.jpg",
    },
    {
        "title": "Female belted kingfisher pictured in Ontario, Canada",
        "url": "/images/img5.jpg",
    },
];


const sidebar = document.getElementsByClassName('image-description');
const imageElement = document.getElementById('image');
const imageField = document.getElementById('image-field');

const inputHandler = function(e) {
    let activeImageIndex = +imageField.name;
    sidebar[activeImageIndex].innerHTML = e.target.value;
}

const resetColors = function() {
    for(let i = 0; i < images.length; i++) {
        sidebar[i].style.backgroundColor = '#FFFFFF';
    }
}

const fillData = function(imageIndex) {
    imageField.name = "" + imageIndex;
    imageElement.src = images[imageIndex].url;
    imageField.value = images[imageIndex].title;
    sidebar[imageIndex].style.backgroundColor = '#87CEEB';
}

for(let index = 0; index < images.length; index++) {
    sidebar[index].addEventListener('click', function() {
        resetColors();
        fillData(index);
    });
}

imageField.addEventListener('input', inputHandler);
imageField.addEventListener('propertychange', inputHandler);