const express = require("express");
const logger = require("morgan");
const handlebars = require('express-handlebars');
const sass = require('node-sass-middleware');
const router = require("./config/router")
const app = express();

//Configurando o Logger Morgan
app.use(logger("combined"));

//Configurando as Views com Handlebars
app.engine("handlebars",handlebars({
    layoutsDir: `${__dirname}/app/views/layout`,
    defaultLayout: 'main.handlebars',
    helpers: require(`${__dirname}/app/views/helpers/index.js`),
   }));
app.set("view engine", "handlebars");
app.set("views", `${__dirname}/app/views`);

//Configurando o CSS com SASS
app.use(sass({
    src: `${__dirname}/public/scss`,
    dest: `${__dirname}/public/css`,
    outputStyle: 'compressed',
    prefix: '/css',
   }));

app.use('/css', [
    express.static(`${__dirname}/public/scss`), 
    express.static(`${__dirname}/public/css`)
]);

//Configurando acesso a scripts da aplicação
app.use('/webfonts', express.static(`${__dirname}/node_modules/@fortawesome/fontawesome-free/webfonts`));
app.use('/js', [
    express.static(__dirname + '/node_modules/jquery/dist/'),
    express.static(__dirname + '/node_modules/popper.js/dist/umd/'),
    express.static(__dirname + '/node_modules/bootstrap/dist/js/'),
    express.static(`${__dirname}/public/js`)
   ]);

//Disponibilizando as imagens 
app.use('/img', express.static(`${__dirname}/public/img`)); 

//Configurando o roteador
app.use(express.urlencoded({extended: false}));
app.use(router);


//Porta onde a aplicação está sendo rodada
app.listen(3000); 