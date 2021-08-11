const request = require('supertest');

const app = require('../src/app');

// eslint-disable-next-line no-undef
test('test 200 status /', (done) => {
  request(app)
    .get('/')
    .expect(200)
    .expect('Content-Type', /html/)
    .end((err) => {
      if (err) { return done(err); }
      return done();
    });
});

// eslint-disable-next-line no-undef
test('test  /404 route', (done) => {
  request(app)
    .get('/error')
    .expect(404)
    .expect('Content-Type', /html/)
    .end((err) => {
      if (err) { return done(err); }
      return done();
    });
});
