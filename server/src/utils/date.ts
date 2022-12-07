/* eslint-disable @typescript-eslint/no-var-requires */
const moment = require('moment');

export enum DATE_FORMATS {
  DATE_TIME_UTC = 'YYYY-MM-DD hh:mm:ss Z',
}

export const getCurrentTimeFormatted = (
  format = DATE_FORMATS.DATE_TIME_UTC,
) => {
  return moment().format(format);
};
