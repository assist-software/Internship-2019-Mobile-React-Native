
export const moviesAPIUrl = "http://192.168.151.218:3000/api/movies";
export const GenreExploreListAPI = 'http://www.json-generator.com/api/json/get/bTEQjkxRpe?indent=2';
export const ExploreScreenAPI = 'http://www.json-generator.com/api/json/get/ceTOllpSUO?indent=2';
export const WatchlistScreenAPI = 'http://www.json-generator.com/api/json/get/bTEQjkxRpe?indent=2';
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
