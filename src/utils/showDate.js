import moment from 'moment';

export const showDate = (date) => {
  return moment(date).format('dddd, DD MMMM, YYYY');
};
