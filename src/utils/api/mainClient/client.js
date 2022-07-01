import axios from 'axios';
import config from '@/config';

/**
 * This class is just an axios wrapper
 *
 * @category Utils
 * @class
 * @memberof module:api/mainClient
 */
class Client {
  constructor() {
    const client = /** @type {axios} */ (
      axios.create({
        baseURL: config.mainClient.baseURL,
        headers: {
          Accept: 'application/json',
        },
        withCredentials: true,
      })
    );

    delete client.create;
    Object.freeze(client.defaults);

    Object.assign(this, client);
  }
}

export default Client;

/**
 * @template V
 */
/**
 * @typedef {import('axios').AxiosRequestConfig.<any>} AxiosRequestConfig.<any>
 * @typedef {import('axios').AxiosDefaults<any>} AxiosDefaults
 * @typedef {import('axios').AxiosInterceptorManager.<V>} AxiosInterceptorManager.<V>
 * @typedef {import('axios').AxiosResponse.<any,any>} AxiosResponse.<any,any>
 */

/**
 * @name #defaults
 * @type {AxiosDefaults}
 * @readonly
 * @memberof module:api/mainClient.Client
 */

/**
 * @name #interceptors
 * @type {Object}
 * @property {AxiosInterceptorManager.<AxiosRequestConfig.<any>>} request
 * @property {AxiosInterceptorManager.<AxiosResponse.<any,any>>} response
 * @memberof module:api/mainClient.Client
 */

/**
 * @name #delete
 * @method
 * @param {String} url
 * @param {AxiosRequestConfig} [config]
 * @return {Promise.<AxiosResponse>}
 * @memberof module:api/mainClient.Client
 */

/**
 * @name #get
 * @method
 * @param {String} url
 * @param {AxiosRequestConfig} [config]
 * @return {Promise.<AxiosResponse>}
 * @memberof module:api/mainClient.Client
 */

/**
 * @name #getUri
 * @method
 * @param {AxiosRequestConfig} [config]
 * @return {String}
 * @memberof module:api/mainClient.Client
 */

/**
 * @name #head
 * @method
 * @param {String} url
 * @param {AxiosRequestConfig} [config]
 * @return {Promise.<AxiosResponse>}
 * @memberof module:api/mainClient.Client
 */

/**
 * @name #options
 * @method
 * @param {String} url
 * @param {AxiosRequestConfig} [config]
 * @return {Promise.<AxiosResponse>}
 * @memberof module:api/mainClient.Client
 */

/**
 * @name #patch
 * @method
 * @param {String} url
 * @param {any} [data]
 * @param {AxiosRequestConfig} [config]
 * @return {Promise.<AxiosResponse>}
 * @memberof module:api/mainClient.Client
 */

/**
 * @name #patchForm
 * @method
 * @param {String} url
 * @param {any} [data]
 * @param {AxiosRequestConfig} [config]
 * @return {Promise.<AxiosResponse>}
 * @memberof module:api/mainClient.Client
 */

/**
 * @name #post
 * @method
 * @param {String} url
 * @param {any} [data]
 * @param {AxiosRequestConfig} [config]
 * @return {Promise.<AxiosResponse>}
 * @memberof module:api/mainClient.Client
 */

/**
 * @name #postForm
 * @method
 * @param {String} url
 * @param {any} [data]
 * @param {AxiosRequestConfig} [config]
 * @return {Promise.<AxiosResponse>}
 * @memberof module:api/mainClient.Client
 */

/**
 * @name #put
 * @method
 * @param {String} url
 * @param {any} [data]
 * @param {AxiosRequestConfig} [config]
 * @return {Promise.<AxiosResponse>}
 * @memberof module:api/mainClient.Client
 */

/**
 * @name #putForm
 * @method
 * @param {String} url
 * @param {any} [data]
 * @param {AxiosRequestConfig} [config]
 * @return {Promise.<AxiosResponse>}
 * @memberof module:api/mainClient.Client
 */

/**
 * @name #request
 * @method
 * @param {String} url
 * @param {any} [data]
 * @param {AxiosRequestConfig} [config]
 * @return {Promise.<AxiosResponse>}
 * @memberof module:api/mainClient.Client
 */
