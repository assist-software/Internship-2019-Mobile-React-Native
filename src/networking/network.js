export const moviesAPIUrl = 'http://192.168.151.218:3000/api/movies/';

export default async function getDataFromAPI(url) {
    return await fetch(url)
        .then((response) => response.json())
        .then((responseJson) => {
            return responseJson
        })
        .catch((error) => {
            console.error(error);
        });
}
