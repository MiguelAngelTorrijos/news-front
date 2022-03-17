import { apiURL } from '../shared/constants';

export const getNews = async () => {
  return fetch(apiURL, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  });
};

export const getNewsByTopic = async (q) => {
  return fetch(`${apiURL}?q=${q}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  });
};
