const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);
server.listen(8001, () => {
  console.info(`JSON Server is running on port 8001`);
});