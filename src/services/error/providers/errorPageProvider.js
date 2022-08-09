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
    $router.push({
      name: 'Error',
      params: {
        code: this.title,
        title: this.subTitle,
        description: this.text,
      },
    });
  }
}

export default ConsoleProvider;
