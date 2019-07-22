export const moviesAPIUrl = "http://www.json-generator.com/api/json/get/bVQozNJcOa?indent=2";

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
