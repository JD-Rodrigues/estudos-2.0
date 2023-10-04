const http =  require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, World!\n');
});

const porta = 3000;

server.listen(porta, () => {
  console.log(`Servidor está ouvindo na porta ${porta}`);
});
