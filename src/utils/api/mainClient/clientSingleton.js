import Singleton from '@/core/singleton';
import Client from '@/utils/api/mainClient/client';

/**
 * @category Utils
 * @memberof module:api/mainClient
 * @class
 * @extends Singleton
 */
class ClientSingleton extends Singleton {
  /**
   * @override
   */
  static target = Client;
}

export default ClientSingleton;
