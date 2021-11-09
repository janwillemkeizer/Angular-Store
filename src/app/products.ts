export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'Phone XL',
    price: 799,
    description: 'Een grote telefoon met een van de beste schermen. (What\'s in the name!)'
  },
  {
    id: 2,
    name: 'Phone Mini',
    price: 699,
    description: 'Een kleine grootheid met een goede camera.'
  },
  {
    id: 3,
    name: 'Phone Standard',
    price: 299,
    description: ''
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/