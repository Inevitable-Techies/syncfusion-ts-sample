/**
 * Replace the ts code of the component in thebelow code.
 */

import { DatePicker } from '@syncfusion/ej2-calendars';
/**
 * Default DatePicker sample
 */

let datepicker: DatePicker = new DatePicker({
placeholder: 'Choose a date',
});
datepicker.appendTo('#datepicker');
var button = document.getElementsByClassName('e-date-icon')[0];
button.addEventListener(
'touchstart',
function () {
    console.log(navigator.userAgent);
    console.log((window as any).browserDetails);
    console.log((window as any).browserDetails.isDevice);
},
true
);
button.addEventListener(
'click',
function () {
    console.log(navigator.userAgent);
    console.log((window as any).browserDetails.isDevice);
},
true
);

