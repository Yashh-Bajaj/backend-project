const express = require("express");
const cors = require("cors");
const { sequelize } = require("./config/database");
const { connectToDb } = require("./models/index");

const PORT = process.env.PORT || 3000;

const loginroute = require("./routes/loginroute");
const { tableInfo } = require("./controllers/loginController");

const app = express();



const corOptions = {
  origin: "http://localhost:3000",
};

//middleware

app.set("view engine", "hbs");
app.use(cors(corOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));


app.use("/", loginroute);
app.use('/admin',tableInfo)

// app.get('/',(req,res)=>{
//     res.json({
//         message:'Hello'
//     })
// })

app.listen(PORT, async () => {
  console.log(`Listening to the port ${PORT}`);
  await connectToDb();
});
