export const moviesAPIUrl = 'http://facebook.github.io/react-native/movies.json';
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
