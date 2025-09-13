const http = require('http');
const port = 3000;

http.createServer((req, res) => {
  res.end("Hello from Docker + CI/CD 🚀");
}).listen(port, () => {
  console.log(`Server running on port ${port}`);
});
