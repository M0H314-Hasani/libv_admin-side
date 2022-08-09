/**
 * DOM functionality related modules
 * @module Auth
 * @category Services
 */
import API from '@/utils/api/mainClient';
import InvalidCredentialsException from './invalidCredentialsException';

/**
 * This class is just an axios wrapper
 *
 * @category Services
 * @class
 * @memberof module:Auth
 */
class AuthService {
  /**
   *
   * @static
   * @param {object} credentials
   * @returns
   */
  static async login(credentials) {
    let result;
    try {
      result = await (await API.post('v1/login', credentials)).data;
      return result;
    } catch (error) {
      throw new InvalidCredentialsException(error.response.data.message);
    }
  }
}

export default AuthService;
