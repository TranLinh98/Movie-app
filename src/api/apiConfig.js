const apiConfig = {
  baseUrl: 'https://api.themoviedb.org/3/',
  apiKey: '9b9b93400d4b0f208c89828e7c117171',
  language: 'vi',
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
