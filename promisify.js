/**
 * @callback errorFirstCallback
 * @param { Error | undefined } error
 * @param { * } value
 * @returns
 */

/**
 * @callback errorFirstCallbackExpecter
 * @param { ...* } params
 * @param { errorFirstCallback } errorFirstCb
 * 
 */


/**
 * Returns a promisified Version of the given callback based function 
 * @param {errorFirstCallbackExpecter} functionToBePromisified 
 * @returns promisifiedFunction
 */
function promisify(callbackFn) {
  return async (...params) => {
    return new Promise((resolve, reject) => {
      callbackFn(
        ...params,
        (err, res) => {
          if (err) {
            reject(err)
          }
          else {
            resolve(res)
          }
        }
      )
    })
  }
}
