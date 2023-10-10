import http from 'http'
import routes from './adapters/example';

const server = http.createServer(routes);

const porta = 3000;

server.listen(porta, () => {
  console.log(`Servidor está ouvindo na porta ${porta}`);
});

export default server
