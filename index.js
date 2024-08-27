const port = 3000;
const app = require("./app");
const mongoose = require("mongoose");
const urlMongoDb = "mongodb+srv://admin:0761163@cluster0.rkwsje2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";



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
  });





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







