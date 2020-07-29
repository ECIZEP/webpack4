import { a } from '../src/common/utils';

Promise.resolve('sdf');

const obj = Object.assign({}, {
    a: 1
});
a();

[1, [2, 3], [4, [5]]].flat(2);
console.log('hhe', obj);