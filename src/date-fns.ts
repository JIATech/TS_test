import { format, sub } from 'date-fns';

const date = new Date( Date.now() );
const rta = sub(date, { days: 2 });
const str = format(rta, 'dd/MM/yyyy');
console.log(str);
