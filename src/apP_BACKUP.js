const http = require("http");
const express = require('express');
const spoilersRoute = require('./routes/spoilers');
const sequelize = require('./database/database');
const app = express();

const hostname = "127.0.0.1";
const port = 3000;

app.set("port", port)

app.use(express.json());

app.use("/api", spoilersRoute);

app.use((request, response, next) =>{
    response.status(404).send();
});


app.use((error, request, response, next) => {
    response.status(500).json({ error });
})

//const server = http.createServer(app);

//server.listen(port, hostname, () => {
    //console.log(`Servidor em execução em http://${hostname}:${port}/`);
//});


/**CRIA AS TABELAS   E SE CASO JA EXISTIR
 * IRA APAGAR OS DADOS E QUE JA EXISTEM
 * E REECRIAR AS TABELAS. ISSO E DEFINIDO PELO force: true **/
/**MAS O BANCO DE DADOS JA TEM QUE EXISTIR**/
sequelize.sync({ force : true }).then(() => {


    
} );


//<property name="hibernate.connection.url" value="jdbc:mysql://localhost:3306/tarefas?createDatabaseIfNoExist=true" />