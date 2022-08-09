/* eslint-disable no-empty-function */
/* eslint-disable no-useless-constructor */

class ProviderAbstract {
  /**
   * @type {String}
   * @protected
   */
  title;

  /**
   * @type {String}
   * @protected
   */
  subTitle;

  /**
   * @type {String}
   * @protected
   */
  text;

  /**
   * @protected
   */
  constructor() {}

  setTitle(value) {
    this.title = value;
  }

  setSubTitle(value) {
    this.subTitle = value;
  }

  setText(value) {
    this.text = value;
  }

  /**
   * @abstract
   */
  provide() {}
}

export default ProviderAbstract;
