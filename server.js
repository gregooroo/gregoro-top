const app = require("./app");
const { port } = require("./config.json");

const server = app.listen(port || 3000, () => {
  console.log(`Server is running on port ${server.address().port}`);
});
