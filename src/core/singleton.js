/* eslint-disable new-cap */
/* eslint-disable no-empty-function */
/* eslint-disable no-useless-constructor */

/**
 * @category core
 * @module singleton
 */

/**
 * @category core
 * @class
 */
class Singleton {
  /**
   * @type {object}
   * @private
   * @static
   */
  static instance;

  /**
   * @type {object}
   * @protected
   * @static
   * @abstract
   */
  static target = () => {
    throw new Error('must be implemented by subclass!');
  };

  /**
   * @protected
   */
  constructor() {}

  /**
   * @public
   * @static
   * @return {object}
   */
  static getInstance() {
    if (typeof Singleton.instance === 'undefined') {
      Singleton.instance = new this.target();
    }

    return Singleton.instance;
  }
}

export default Singleton;
