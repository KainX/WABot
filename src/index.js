const puppeteer = require('puppeteer');
const BotClient = require('./controller/BotClient.js');
let page;

exports.BotClient = BotClient;

let client = new BotClient();
client.on('ready', () =>{console.log("listo para iniciar sesión")});