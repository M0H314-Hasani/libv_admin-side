/* eslint-disable no-console */
/* eslint-disable no-useless-constructor */

import ProviderAbstract from './providerAbstract';

class ConsoleProvider extends ProviderAbstract {
  /**
   * @public
   */
  constructor() {
    super();
  }

  /**
   * @override
   */
  provide() {
    console.error(`${this.title}: ${this.text}`);
  }
}

export default ConsoleProvider;
