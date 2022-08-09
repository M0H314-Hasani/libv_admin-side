/* eslint-disable no-unused-vars */

// Handlers
import DefaultHandler from '@/services/error/handlers/defaultHandler';
import AxiosHandler from '@/services/error/handlers/axiosHandler';

// Providers
import ConsoleProvider from '@/services/error/providers/consoleProvider';
import SwalProvider from '@/services/error/providers/swalProvider';
import ErrorPageProvider from '@/services/error/providers/errorPageProvider';

export default {
  default: {
    handler: DefaultHandler,
    provider: ConsoleProvider,
  },
  InvalidCredentials: {
    handler: DefaultHandler,
    provider: SwalProvider,
  },
  AxiosError: {
    handler: AxiosHandler,
    provider: [
      {
        code: 'ERR_BAD_REQUEST',
        provider: (err) => {
          switch (err.response.status) {
            case 401:
              return SwalProvider;
            case 403:
              return ErrorPageProvider;
            case 404:
              return ErrorPageProvider;
            default:
              return ConsoleProvider;
          }
        },
      },
      {
        code: 'ERR_BAD_RESPONSE',
        provider: SwalProvider,
      },
      {
        code: 'default',
        provider: ConsoleProvider,
      },
    ],
  },
};
