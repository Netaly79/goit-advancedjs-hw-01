import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items.js';

const gallery = document.querySelector('.gallery');
const fragment = document.createDocumentFragment();

galleryItems.forEach(image => {
  const item = document.createElement('li');
  item.classList.add('gallery-item');

  const link = document.createElement('a');
  link.classList.add('gallery-link');
  link.href = image.original;

  const imgElement = document.createElement('img');
  imgElement.classList.add('gallery-image');
  imgElement.classList.add('custom-cursor');
  imgElement.src = image.preview;
  imgElement.dataset.source = image.original;
  imgElement.alt = image.description;

  link.appendChild(imgElement);
  item.appendChild(link);
  fragment.appendChild(item);
});

gallery.appendChild(fragment);

document.addEventListener('DOMContentLoaded', () => {
  const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
  });
});
