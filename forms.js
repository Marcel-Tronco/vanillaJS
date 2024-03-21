/**
 * The FormData Object let's you handle HTML-FormElements easily
 */

/**
 * You can just use FormData obj as a body of a fetch request.
 * @param {HTMLFormElement} form 
 * @returns
 */
function formToFetchBody(form) { return new FormData(form) }


/**
 * You can gather the data from the form as an object.
 * @param {HTMLFormElement} form 
 * @returns
 */
function formToObj(form) { return Object.fromEntries((new FormData(form)).entries())}
