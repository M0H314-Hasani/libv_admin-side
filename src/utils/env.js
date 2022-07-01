import * as config from '@/config/env';
/**
 * Environment variable access module
 * @module env
 * @category Utils
 */

/**
 * prefix of environment variables
 * @type {string}
 */
const prefix = config.prefix;

/**
 *
 * @param {string} envVar
 * @return {string}
 */
function env(envVar) {
  return import.meta.env[prefix + envVar];
}

export default env;
