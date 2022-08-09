/* eslint-disable no-unused-vars */
/* eslint-disable no-empty-function */
/* eslint-disable no-useless-constructor */

class HandlerAbstract {
  /**
   * @protected
   * @type {Error}
   */
  err;

  /**
   * @protected
   * @type {import('../providers/providerAbstract').default}
   */
  provider;

  /**
   * @protected
   * @param {Error} err
   * @param {import('../providers/providerAbstract').default} provider
   */
  constructor(provider, err = null) {
    this.err = err;
    this.provider = provider;
  }

  /**
   * @param {import('../providers/providerAbstract').default} provider
   */
  changeProvider(provider) {
    this.provider = provider;
  }

  /**
   * @abstract
   */
  handle() {}
}

export default HandlerAbstract;
