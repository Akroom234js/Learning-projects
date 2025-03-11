const dotenv = require("dotenv");
dotenv.config({ path: `./config.env` });

const app = require("../backend/app");

const port = 3000;
app.listen(port, () => {
  console.log(`the server is running on port ${port}`);
});
