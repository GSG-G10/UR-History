const supertest = require('supertest');
const { request } = require('../src/app');
const app = require('../src/app');
// eslint-disable-next-line no-undef
test('Initialise', () => {
  const num = 2;
  // eslint-disable-next-line no-undef
  expect(num).toBe(2);
});
// test('test home page ', () =>{

//   request(app)
//    .get('/'))
//    .expect(200)
// }
