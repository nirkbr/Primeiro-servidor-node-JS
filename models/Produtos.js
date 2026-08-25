const db = require("./db");
const { FORCE } = require("sequelize/lib/index-hints");

const Pessoa = db.sequelize.define("pessoa",{
    nome: {
        type: db.Sequelize.STRING,
        allowNull: false
    },
    idade: {
        type: db.Sequelize.INTEGER,
        allowNull: false
    },
    sexo: {
        type: db.Sequelize.TEXT,
        allowNull: false
    }
});
Pessoa.sync({force: false}).then(() => {
    Pessoa.create({
        nome: "Nanaoshi",
        idade: 17 ,
        sexo: "Mulher"
    });
})
