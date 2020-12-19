import axios from 'axios';

const KEY = '19419978-f0acf28c61118c5b5b844fb84';

const requestApi = ({ query, crntPage }) => {
  return axios
    .get(
      `https://pixabay.com/api/?key=${KEY}&q=${query}&page=${crntPage}&image_type=photo&orientation=horizontal&per_page=12`,
    )
    .then(responce => {
      if (responce.data.total) {
        return responce.data.hits;
      }
      return Promise.reject(new Error(`No photos of ${query}`));
    });
};

export default requestApi;
