/* eslint-disable no-useless-constructor */

import HandlerAbstract from './handlerAbstract';

class AxiosHandler extends HandlerAbstract {
  /**
   * @public
   * @param {import('axios').AxiosError} err
   * @param {import('../providers/providerAbstract').default} provider
   */
  constructor(err, provider) {
    super(provider);
    this.err = err;
  }

  /**
   * @override
   */
  handle() {
    switch (this.err.code) {
      case 'ERR_BAD_REQUEST':
        this.handleBadRequest();
        break;
      case 'ERR_BAD_RESPONSE':
        this.handleBadResponse();
        break;
      default:
        this.provider.setTitle(this.err.name);
        this.provider.setSubTitle(this.err.code);
        this.provider.setText(this.err.message);
    }

    this.provider.provide();
  }

  handleBadRequest() {
    this.provider.setTitle(this.err.response.status);
    this.provider.setSubTitle(this.err.response.statusText);
    this.provider.setText(this.err.response.data.message);
  }

  handleBadResponse() {
    this.provider.setTitle(this.err.response.status);
    this.provider.setSubTitle(this.err.response.statusText);
    this.provider.setText($trans('hh'));
  }
}

export default AxiosHandler;
