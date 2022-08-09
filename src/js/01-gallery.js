// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryEl = document.querySelector('.gallery');
const cardEl = createImg(galleryItems);

// galleryEl.addEventListener("click", handler);
galleryEl.insertAdjacentHTML('beforeend', cardEl);

function createImg(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <li class='gallery__link'>
    <a class="gallery__item" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
     </a>
    </li>
        `;
    })
    .join('');
}

const gallery = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});

console.log(galleryItems);
