const app = require('./app');

app.listen(app.get('port'), () => {
  // eslint-disable-next-line no-console
  console.log(`app running at http://localhost:${app.get('port')}`);
});
