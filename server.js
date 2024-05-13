import http from "http";
import fs from "fs/promises";
import url from "url";
import path from "path";
const port = process.env.PORT || 8000;

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log(__filename);
console.log(__dirname);
const server = http.createServer(async (req, res) => {
  try {
    // Check ig GET req
    if (req.method === "GET") {
      let filepath;
      if (req.url === "/") {
        filepath = path.join(__dirname, "public/index.html");
        // res.writeHead(200, { "Content-Type": "text/html" });
        // res.end("<h1>Home Page</h1>");
      } else if (req.url === "/about") {
        filepath = path.join(__dirname, "public/about.html");
        // res.writeHead(200, { "Content-Type": "text/html" });
        // res.end("<h1>About Page</h1>");
      } else {
        // res.writeHead(404, { "Content-Type": "text/html" });
        // res.end("<h1>Not found</h1>");
        throw new Error("Not Found");
      }

      const data = await fs.readFile(filepath);
      res.setHeader("Content-Type", "text/html");
      res.write(data);
      res.end();
    } else {
      throw new Error("Method not allowed");
    }
  } catch (error) {
    res.writeHead(500, { "Content-Type": "text/plain" });
    res.end("Server Error");
  }
});

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
