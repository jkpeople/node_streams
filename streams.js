const { createReadStream } = require("fs");
const { join } = require("path");
const { createServer } = require("http");

const port = 3000;

const server = createServer((req, res) => {
  const { url, method } = req;

  if (url === "/" && method === "GET") {
    res.setHeader("Content-Type", "text/html");
    const readStream = createReadStream(join(__dirname, "./public/index.html"));
    readStream.pipe(res);
  } else {
    res.setHeader("Content-Type", "text/html");
    const readStream = createReadStream(
      join(__dirname, "./public/notFound404.html")
    );
    readStream.pipe(res);
  }
});

server.listen(port, () => console.log("Server listening on " + port + "..."));