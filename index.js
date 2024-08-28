const port = process.env.PORT || 3000;
const mongoose = require('mongoose');
const app = require('./app');

// Usa la variable de entorno MONGODB_URI para conectar con MongoDB
const mongoURI = process.env.MONGODB_URI;

mongoose.connect(mongoURI)
  .then(() => console.log('Conexión a MongoDB exitosa'))
  .catch(err => console.error('Error de conexión a MongoDB:', err));

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});



/*const port = 3000;
const app = require("./app");
const mongoose = require("mongoose");
require('dotenv').config();
//const urlMongoDb = "mongodb+srv://admin:0761163@cluster0.rkwsje2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";



mongoose.connect(urlMongoDb, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("La conexión a la base de datos es correcta");
  
    app.listen(port, () => {
      console.log("Server running at http://localhost:" + port);
    });
  })
  .catch((error) => {
    console.error("Error de conexión:", error);
  }); */





/*mongoose.connect(urlMongoDb,(err,res) => {
    try {
        if(err){
            throw err;
        }
        else {
            console.log("la conexion a la base de datos es correcta");

            
        app.listen(port, () => {
        console.log("Server running at http://localhost:" + port);
        })

           
        }

    }catch (error) {
        console.log(error);
    }

})*/







