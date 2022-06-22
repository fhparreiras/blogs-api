require('dotenv').config();
const app = require('./api');
const { checkEmailFormat, 
  errorHandler } = require('./database/middlewares');
const routes = require('./routes');

// não remova a variável `API_PORT` ou o `listen`
const port = process.env.API_PORT || 3000;

// não remova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.post('/login', routes.login);
app.post('/user', checkEmailFormat, routes.user, errorHandler);

app.listen(port, () => console.log('ouvindo porta', port));
