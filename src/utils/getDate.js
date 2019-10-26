import moment from 'moment';

export const getYear = (context) => context.format('Y');
export const getMonth = (context) => context.format('MMMM');
export const getDaysInMounth = (context) => context.daysInMonth();
export const getCurrentDate = (context) => context.get('date');
export const getCurrentDay = (context) => context.format('D');
export const getFirstDayOfMounth = (context) => moment(context).startOf('month').format('d');