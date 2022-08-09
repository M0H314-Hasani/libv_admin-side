/* eslint-disable no-useless-constructor */
import HandlerAbstract from './handlerAbstract';

class DefaultHandler extends HandlerAbstract {
  /**
   * @public
   * @param {Error} err
   * @param {import('../providers/providerAbstract').default} provider
   */
  constructor(err, provider) {
    super(provider, err);
  }

  /**
   * @override
   */
  handle() {
    this.provider.setTitle(this.err.name);
    this.provider.setSubTitle(null);
    this.provider.setText(this.err.message);

    this.provider.provide();
  }
}

export default DefaultHandler;
