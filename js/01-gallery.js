import { galleryItems } from './gallery-items.js';

const refs = {
  gallery: document.querySelector('.gallery'),
};

// Создаеи разметку Галлереи из моделли данных

function createGallaryItemsMurkup(galleryItems) {
  return galleryItems
    .map(
      ({ preview, original, description }) =>
        `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
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

// Вешаю обработчик событий на контейнер

refs.gallery.addEventListener('click', onGallaryItemClick);

function onGallaryItemClick(e) {
  e.preventDefault();
  if (e.currentTarget === e.target) return;

  const {
    alt,
    dataset: { source },
  } = e.target;

  createModalGallary(source, alt);
  logicModal.show();
}

// Глобальная переменная для хранения результата basicLightbox
let logicModal;

// Функция createModalGallary создает модалку галлереи

function createModalGallary(a, b) {
  const htmlOriginalImg = `<img src="${a}" alt="${b}">`;

  logicModal = basicLightbox.create(htmlOriginalImg, {
    // Когда модалка открыта вешаю слушатель на Escape
    onShow: () => {
      window.addEventListener('keydown', modalGallaryCloseOnEsc);
    },
    // Когда модалка закрыта  снимаю слушатель  с Escape
    onClose: () => {
      window.removeEventListener('keydown', modalGallaryCloseOnEsc);
    },
  });
}

// Функция закрывает модалку по Esc

function modalGallaryCloseOnEsc(e) {
  if (e.code !== 'Escape') return;
  logicModal.close();
}
