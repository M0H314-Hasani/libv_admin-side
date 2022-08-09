/* eslint-disable no-param-reassign */

import trans from '@/utils/trans';

export default {
  install: (app) => {
    app.config.globalProperties.$trans = (key) => {
      return trans(key);
    };
  },
};
