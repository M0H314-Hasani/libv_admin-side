/* eslint-disable no-console */
/* eslint-disable no-useless-constructor */

import Swal from 'sweetalert2';
import ProviderAbstract from './providerAbstract';

class SwalProvider extends ProviderAbstract {
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
    Swal.fire({
      title: this.title,
      text: this.text,
      icon: 'error',
      confirmButtonText: 'باشه',
    });
  }
}

export default SwalProvider;
