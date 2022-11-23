require("dotenv").config();
const express = require("express");
const app = express();
const { Sequelize } = require("sequelize");
const cors = require("cors");

const { SERVER_PORT, CONNECTION_STRING } = process.env;

app.use(cors());
app.use(express.json());

const sequelize = new Sequelize(CONNECTION_STRING, {
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
});

sequelize.authenticate().then(() => {
  app.get("/tables", async (req, res) => {
    const tablesResponse = await sequelize.query("SELECT * FROM TABLES");
    const tables = tablesResponse[0];
    console.log(tables);
    res.status(200).send(tables);
  });

  app.put("/login", async (req, res) => {
    const name = req.body.name;
    const pword = req.body.pword;
    console.log({ name, pword });
    const findUserResponse = await sequelize.query(
      `SELECT * from users WHERE username = '${name}'`
    );
    console.log(findUserResponse[0][0]);

    res.sendStatus(200);
  });

  app.post("/menu", async (req, res) => {
    const menu = req.body.menuList;
    console.log(menu);
    // const MenuResponse = await sequelize.query(
    //   `INSERT INTO tables() values('${menu}')`
    // );

    // console.log(MenuResponse);
  });

  app.listen(SERVER_PORT, () => {
    console.log(`Server listening on port ${SERVER_PORT}`);
  });
});
