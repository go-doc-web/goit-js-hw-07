import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const refs = {
  gallery: document.querySelector('.gallery'),
};

console.log(refs.gallery);

// Создаеи разметку Галлереи из моделли данных

function createGallaryItemsMurkup(galleryItems) {
  return galleryItems
    .map(
      ({ preview, original, description }) =>
        `<li>
         <a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
         </a>
         </li>`
    )
    .join('');
}

// Рендер в HTML

function render() {
  const murkupRender = createGallaryItemsMurkup(galleryItems);
  refs.gallery.innerHTML = '';
  refs.gallery.insertAdjacentHTML('beforeend', murkupRender);
}

render();

// Инициализация библиотеки SimpleLightbox!

const lightbox = new SimpleLightbox('.gallery a', {
  // get the caption from given attribute
  captionsData: 'alt',
  // adds a delay before the caption shows (in ms)
  captionDelay: 250,
});
