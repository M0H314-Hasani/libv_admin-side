import { isFunction } from '@/utils/helpers';
import config from '@/config';

class ErrorHandlerFactory {
  /**
   * @param {any} err
   * @returns {import('./handlers/HandlerAbstract').default}
   */
  static makeHandler(err) {
    const ErrHandler = this.acquireErrHandler(err);

    const ErrProvider = this.acquireErrProvider(err);

    return new ErrHandler(err, new ErrProvider());
  }

  /**
   * @private
   * @param {any} err
   */
  static acquireErrHandler(err) {
    const errType = config.errorService[err.name] ? err.name : 'default';

    const ErrHandler = config.errorService[errType].handler;

    return ErrHandler;
  }

  /**
   * @private
   * @param {any} err
   */
  static acquireErrProvider(err) {
    const errType = config.errorService[err.name] ? err.name : 'default';

    let ErrProvider;

    if (Array.isArray(config.errorService[errType].provider)) {
      const errProviders = config.errorService[errType].provider.reduce(
        (obj, val) => {
          const { code, provider } = val;
          return { ...obj, [code]: provider };
        },
        {}
      );

      ErrProvider = errProviders[err.code] ?? errProviders.default;
    } else {
      ErrProvider = config.errorService[errType].provider;
    }

    if (isFunction(ErrProvider)) {
      ErrProvider = ErrProvider(err);
    }

    return ErrProvider;
  }
}

export default ErrorHandlerFactory;
