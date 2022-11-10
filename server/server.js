const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 8000;
const DB = "pirates"


//----- MiddleWare -----
app.use(cors(), express.json(), express.urlencoded({extended:true}));
//----------------------

//Connect to the database
require("./config/mongoose.config")(DB);

//Connect to the DB
require("./routes/pirates.route")(app)



// Start the server
app.listen(PORT, () => console.log(`The server is up and running on ${PORT}`));