const express = require("express"); /*Aqui estou puxando a a Api express */
const app = express(); /*Aqui estou jogando a Api em uma variável consyante  */



app.get("/",function(req,res){ /*Aqui estou criando uma rota pro meu servidor  */
    res.send("Seja bem vindo ao meu primeiro servidor!");
});

app.get("/artigos/:id/:data",function(req,res){ /*Aqui estou fazendo uma requisição utilizando Id e data do dia para achar um caminho do servidor, no caso todos os outros vão achar só de colocar o número sómente o 1 que além de colocar o número eu tenho que colocar a data*/ 
    if(req.params.id == "1" && req.params.data == "13-08-2026"){
        res.send("1°Artigos escolares");
    }else if(req.params.id=="2"){
        res.send("2°Artigos de jogos");
    }else if(req.params.id=="3"){
        res.send("3°Artigos de filmes");0
    }else if(req.params.id=="4"){
        res.send("4°Artigos de serie.");
    }else{
        res.send("Ai não pia!");
    }
});

app.get("/contato",function(req,res){
    res.send("Deixe seu contato.");
});

app.listen(8081,function(){ /* Aqui estou criando o meu servidor local dentro do meu pc */
    console.log("Olá mundo deu certo! o servidor está rodando.");
});