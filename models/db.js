const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
    "pessoa",
    "root",
    "#Pedro130825",
    {
        host: "localhost",
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