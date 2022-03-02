const express = require("express");
const cors = require("cors");
const app = express();

//app.use('/api/libros');



var corsOptions = {
  origin: "http://localhost:8081"
};
app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// simple route

const db = require("./models");
db.sequelize.sync();

app.get("/", (req, res) => {
  res.json({ message: "Bienvenido a Doctus." });
});

require('./routes/librosRoutes')(app);
require('./routes/ejemplaresRoutes')(app);
require('./routes/estudiantesRoutes')(app);
require('./routes/documentosRoutes')(app);
// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});