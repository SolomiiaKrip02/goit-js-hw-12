import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const loadMoreBtn = document.querySelector('.load-more');
const loader = document.querySelector('.loader');
const gallery = document.querySelector('.gallery');

let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

export function createGallery(images) {
  const markup = images
    .map(
      img => `
      <li class="gallery-item">
        <a href="${img.largeImageURL}">
          <img src="${img.webformatURL}" alt="${img.tags}" loading="lazy" />
        </a>
        <div class="info">
          <span>Likes: ${img.likes}</span>
          <span>Views: ${img.views}</span>
          <span>Comments: ${img.comments}</span>
          <span>Downloads: ${img.downloads}</span>
        </div>
      </li>`
    )
    .join('');
  gallery.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}

export function clearGallery() {
  gallery.innerHTML = '';
}

export function showLoader() {
  loader.classList.remove('hidden');
}

export function hideLoader() {
  loader.classList.add('hidden');
}

export function showLoadMore() {
  loadMoreBtn.classList.remove('hidden');
}

export function hideLoadMore() {
  loadMoreBtn.classList.add('hidden');
}
