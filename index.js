const http = require("http");
const fs = require("fs");
const path = require("path");

const host = "localhost"
const port = 3000;

const server = http.createServer((req, res) => {
  const fromSrc = fs.createReadStream(path.join(__dirname, "./package.json"));

  res.writeHead(200, { "content-type": "application/json" });
  fromSrc.pipe(res);
});

server.listen(port, () =>
  console.log(`Server running on http://${host}:${port}`)
);

