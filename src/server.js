require('dotenv').config();
const app = require('./api');
const { checkEmailFormat, 
  errorHandler, 
  authenticationMiddleware } = require('./database/middlewares');
const routes = require('./routes');

// não remova a variável `API_PORT` ou o `listen`
const port = process.env.API_PORT || 3000;

// não remova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});
app.get('/user/:id', authenticationMiddleware, routes.getUserById, errorHandler);
app.get('/user', authenticationMiddleware, routes.getUser, errorHandler);
app.get('/categories', authenticationMiddleware, routes.getCategory, errorHandler);
app.get('/post/:id', authenticationMiddleware, routes.getPostById, errorHandler);
app.get('/post', authenticationMiddleware, routes.getPost, errorHandler);

app.post('/login', routes.login);
app.post('/user', checkEmailFormat, routes.user, errorHandler);
app.post('/categories', authenticationMiddleware, routes.category, errorHandler);
app.post('/post', authenticationMiddleware, routes.post, errorHandler);

app.put('/post/:id', authenticationMiddleware, routes.putPost, errorHandler);

app.delete('/post/:id', authenticationMiddleware, routes.deletePost, errorHandler);
app.delete('/user/me', authenticationMiddleware, routes.deleteMe, errorHandler);

app.listen(port, () => console.log('ouvindo porta', port));
