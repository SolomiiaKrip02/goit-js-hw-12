import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
} from './js/render-functions.js';

const form = document.querySelector('.search-form');
const loadMoreBtn = document.querySelector('.load-more');

let query = '';
let page = 1;
let totalHits = 0;

form.addEventListener('submit', async e => {
  e.preventDefault();
  query = form.elements.searchQuery.value.trim();
  if (!query) return;

  page = 1;
  clearGallery();
  hideLoadMoreButton();

  await fetchImages();
});

loadMoreBtn.addEventListener('click', async () => {
  page += 1;
  await fetchImages(true);
});

async function fetchImages(isLoadMore = false) {
  try {
    showLoader();
    const data = await getImagesByQuery(query, page);

    if (data.hits.length === 0 && page === 1) {
      iziToast.error({ message: 'No images found. Try again!' });
      hideLoader();
      return;
    }

    createGallery(data.hits);

    totalHits = data.totalHits;

    if (page === 1 && totalHits > 15) {
      showLoadMoreButton();
    }

    if (page * 15 >= totalHits) {
      hideLoadMoreButton();
      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
      });
    }

    if (isLoadMore) {
      smoothScroll();
    }
  } catch (error) {
    iziToast.error({ message: 'Something went wrong!' });
  } finally {
    hideLoader();
  }
}

function smoothScroll() {
  const { height: cardHeight } = document
    .querySelector('.gallery')
    .firstElementChild.getBoundingClientRect();

  window.scrollBy({
    top: cardHeight * 2,
    behavior: 'smooth',
  });
}
