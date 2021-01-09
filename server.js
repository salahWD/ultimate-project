let staticServer = require("static-server");
let server = new staticServer({
  rootPath: "./dist/",
  port: 8000,
});

server.start(() => {
  console.log(`Server Started At Port: ${server.port}`);
});
