/* eslint-disable new-cap */
/* eslint-disable dot-notation */

import ErrorHandlerFactory from './errorHandlerFactory';

class ErrorService {
  /**
   * @param {Error} err
   */
  static onError(err) {
    const errHandler = ErrorHandlerFactory.makeHandler(err);

    errHandler.handle();
  }
}

export default ErrorService;
