export const ENV = 'local';

export const BASE_URL =
  ENV === 'development'
    ? 'http://localhost:5000'
    : 'https://webapi-bae.herokuapp.com/';

export const featuredBook = {
  title: 'People Strategy',
  subTitle:
    'How to Invest in People and Make Culture Your Competitive Advantage',
  author: ['Jack Altman'],
  cover:
    'https://www.perlego.com/books/RM_Books/wiley_hlvwyirv/9781119716945_500_750.jpg',
  publisher: 'Wiley',
  year: 2021,
  isbn: '9781119716945',
  topic: 'Business',
};

export const userExisting = false;
