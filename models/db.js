require("dotenv").config();

const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: "mysql"
    }
);

 /*Then é um método de promeça então tudo que trabalha no servidor de forma assincrona tem que retorna dentro de Then */
sequelize.authenticate().then((function(){
    console.log("Banco de dados deu certo");
})).catch(function(erro){
    console.log(`Erro ao se conectar no banco de dados ${erro} `)
}); /*Catch é outro metodo de promeça */ 

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}; 