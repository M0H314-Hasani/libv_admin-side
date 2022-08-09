import { I18n } from 'i18n-js';
import fa from '@/lang/fa.json';

const i18n = new I18n();

i18n.store(fa);

i18n.defaultLocale = 'fa';
i18n.locale = 'fa';

export default (t) => i18n.t(t);
