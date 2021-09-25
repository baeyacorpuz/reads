export const ENV = 'local';

export const BASE_URL =
  ENV === 'development'
    ? 'http://localhost:5000'
    : 'https://webapi-bae.herokuapp.com/';
