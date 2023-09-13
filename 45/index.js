"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
(Cars);
Write;
a;
function that() { }
stores;
information;
about;
a;
car in a;
Object;
'The function should always receive a manufacturer and a model name. It should then accept an arbitrary'.
;
'number of keyword arguments. Call the function with the required information and two other name-value pairs ;
such;
color;
or;
an;
optional;
feature.Print;
the;
Object;
that;
s;
returned;
to;
make;
sure;
all;
the;
information;
was;
stored;
correctly.
;
function my_car() {
    const car, { manufacturer: manufacturer, model: model, ...args };
    return car;
}
console.warn(my_car('Kia', 'Pakanto', color, 'red', console.warn(my_car('Toyota', 'Corolla', { color: 'white' }, { year: 2005 }))));
