import AsyncStorage from '@react-native-async-storage/async-storage';

export const ENV = 'local';

export const BASE_URL =
  ENV === 'dev' ? '192.168.100.45:5000/' : 'https://webapi-bae.herokuapp.com/';

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

export const isExisting = AsyncStorage.getItem('isExisting');
export const token = AsyncStorage.getItem('token');
export const userdata = AsyncStorage.getItem('userdata');
