import axios from 'axios';

const API_KEY = '51941180-25d97e4841ef256248244227c';
const BASE_URL = 'https://pixabay.com/api/';

export default async function fetchData(query, page = 1) {
  const response = await axios.get(BASE_URL, {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page: page,
      per_page: 15,
    },
  });
  return response.data;
}
