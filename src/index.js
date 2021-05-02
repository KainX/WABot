const puppeteer = require('puppeteer');
const controller = require('./controller/start.js')

exports.start = (success, error) =>{
    return controller.start(puppeteer, success, error);
};

this.start(() => console.log("cargado"), () => console.log("no cargado"));
