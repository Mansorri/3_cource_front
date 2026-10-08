// 4 ЛР
const secondElement = document.getElementById('element2');
const thirdElement = document.querySelector('.element3');

function toggleColors(element) {
    const changed = element.dataset.changed === 'true';

    if (!changed) {
        element.style.backgroundColor = '#118f8f';
        element.style.color = '#ffffff';
        element.dataset.changed = 'true';
    } else {
        element.style.backgroundColor = '#f5f511';
        element.style.color = '#000000';
        element.dataset.changed = 'false';
    }
}

secondElement.addEventListener('click', function () {
    toggleColors(secondElement);
});

thirdElement.addEventListener('click', function () {
    toggleColors(thirdElement);
});

const image = document.getElementById('budapest-image');
const copiesContainer = document.getElementById('image-copies');
const addButton = document.getElementById('add-image');
const increaseButton = document.getElementById('increase-image');
const decreaseButton = document.getElementById('decrease-image');
const deleteButton = document.getElementById('delete-image');

let currentWidth = image.width || 600;

addButton.addEventListener('click', function () {
    const copy = image.cloneNode(true);
    copy.removeAttribute('id');
    copy.style.width = currentWidth + 'px';
    copiesContainer.appendChild(copy);
});

increaseButton.addEventListener('click', function () {
    currentWidth += 50;
    image.style.width = currentWidth + 'px';
});

decreaseButton.addEventListener('click', function () {
    if (currentWidth > 100) {
        currentWidth -= 50;
        image.style.width = currentWidth + 'px';
    }
});

deleteButton.addEventListener('click', function () {
    const copies = copiesContainer.querySelectorAll('img');

    if (copies.length > 0) {
        copies[copies.length - 1].remove();
    } else {
        image.style.display = 'none';
    }
});