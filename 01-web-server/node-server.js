const http = require("http");

const hostname = "127.0.0.1";
const PORT = "3000";

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("home");
  } else if (req.url === "/login") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("login");
  } else if (req.url === "/register") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("register");
  } else {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/plain");
    res.end("404 error");
  }
});

server.listen(PORT, () => {
  console.log(`Server running at http://${hostname}:${PORT}/`);
});
