export const TMDBApiURL = 'https://api.themoviedb.org/3';
export const TMDBHeaders = {
    Authorization: `Bearer ${process.env.MOVIE_DB_TOKEN}`,
    Accept: 'application/json'
};

export const TMDBImageOriginalURL = 'https://image.tmdb.org/t/p/original';
export const TMDBImage500URL = 'https://image.tmdb.org/t/p/w500';
