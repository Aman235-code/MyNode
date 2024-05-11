import http from "http";
const port = process.env.PORT;

const server = http.createServer((req, res) => {
  //   res.write("hello world");
  //   res.setHeader("Content-Type", "Text/html");
  //   res.statusCode = 404;
  console.log(req.url);
  console.log(req.method);
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end("<h1>Hello</h1>");
});

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
