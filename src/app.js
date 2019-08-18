const http = require("http");
const express = require("express");
const status = require("http-status");
const spoilersRoute = require("./routes/spoilers");
const sequelize = require("./database/database");

const app = express();

app.use(express.json());

app.use("/api", spoilersRoute);

app.use((request, response, next) => {
    response.status(status.NOT_FOUND).send();
});


app.use((error, request, response, next) => {
    response.status(status.INTERNAL_SERVER_ERROR).json({ error });
});

/**CRIA AS TABELAS   E SE CASO JA EXISTIR
 * IRA APAGAR OS DADOS E QUE JA EXISTEM
 * E REECRIAR AS TABELAS. ISSO E DEFINIDO PELO force: true **/
/**MAS O BANCO DE DADOS JA TEM QUE EXISTIR**/
sequelize.sync({ force : false }).then(() => {

        const port = process.env.PORT || 3001;

        app.set('port', port);

        const server = http.createServer(app);

        server.listen(port);

} );


//<property name="hibernate.connection.url" value="jdbc:mysql://localhost:3306/tarefas?createDatabaseIfNoExist=true" />



//npm i http-status --save