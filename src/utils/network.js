import { HTTP, HTTPS } from '../constants/api'

/**
 * url from http to https
 * @param {String} url - url for changing 
 * @returns {String} - url from HTTPS
 */

export const changeHTTP = url => {
    const result = url ? url.replace(HTTP, HTTPS) : url;

    return result
}

/**
 * send a request - Fetch
 * @param {String} url - url for request 
 * @returns {Promise} - Promise with result of request
 */

export const getApiResource = async (url) => {
    try {
        const res = await fetch(url);

        if (!res.ok) {
            console.error('Could not fetch.', res.status);
            return false;
        }

        return await res.json(); 
    } catch (error) {
        console.error('Could not fetch.', error.message);
        return false;
    }
}

// getApiResource(SWAPI_ROOT+SWAPI_PEOPLE)
//     .then(body => console.log(body))

// (async () => {
//     const body = await getApiResource(SWAPI_ROOT+SWAPI_PEOPLE);
//     console.log(body);
// })();