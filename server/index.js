const express = require("express");
const cors = require("cors");
const app = express();
const port = 3001;
const mysql = require("mysql");
app.use(cors());
app.use(express.json());

// Dados da conexão com o Banco de Dados
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "chitchat",
});

app.post("/createUser", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;

  db.query("SELECT * from users where email = ?", [email], (err, result) => {
    if (result.length > 0) {
      res.send({ message: "Usuário já cadastrado!" });
    } else {
      db.query(
        "INSERT INTO users (name, email, password) VALUES (?,?,?)",
        [name, email, password],
        (err, result) => {
          if (err) {
            console.log(err);
          } else {
            res.send("Usuário cadastrado com sucesso!");
          }
        }
      );
    }
  });
});

app.get("/user", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`Estou rodando na porta http://localhost:${port}`);
});
