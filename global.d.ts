import en from './messages/en.json';

declare global {
  // Use type safe message keys with `next-intl`
  type IntlMessages = typeof en;
}
