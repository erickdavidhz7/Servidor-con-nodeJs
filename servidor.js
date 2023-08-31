// Load HTTP module
import http from "http";
import chalk from "chalk";


const host = "localhost";
const port = 8000;

const requestListener = function (req, res) {
  const url = new URL(req.url, `https://localhost:${port}/`);
  if (req.method === "GET"){
    res.writeHead(200, {"Content-Type": "application/json"});
    res.write(JSON.stringify({"name": "Erick Henriquez", "mensaje": "Enviando un mensaje desde un servidor!"}))
  } 
  res.end();
};

const server = http.createServer(requestListener);

server.listen(port, host, () => {
  console.log(chalk.green(`El servidor esta corriendo en http://${host}:${port}`));
});
