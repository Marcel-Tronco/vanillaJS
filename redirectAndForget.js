/**
 * This function redirects the browser in a way that it is impossible to navigate back.
 * For more info see here:
 * @param {string} destination 
 */

function redirectAndForget(destination) {
    document.location.replace(destination)
}