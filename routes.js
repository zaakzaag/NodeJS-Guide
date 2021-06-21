const fs = require("fs");

const requestHandler = (req, res) => {
  const { url, method } = req;
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Enter messe</title></head>");
    res.write(
      '<body><h2><form action="/message" method="POST"><input type="text" name="messe"><button type="submit">Press</button></form></h2></body>'
    );
    res.write("</html>");
    return res.end();
  }

  if (url === "/message" && method === "POST") {
    const body = [];

    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });

    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      fs.writeFile("message.txt", message, (err) => {
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  }

  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My first page</title></head>");
  res.write("<body><h2>ELOs</h2></body>");
  res.write("</html>");
  res.end();
};
exports.handler = requestHandler;
