const puppeteer = require('puppeteer');
const WA_PAGE = 'https://web.whatsapp.com/';
const EventEmitter = require('events');

module.exports = class BotClient extends EventEmitter{

    browser;
    page;

    constructor(){  
        super();      
        this.init();
    }

    async init(){ 
        this.browser = await puppeteer.launch({headless: false});
        this.page = await this.browser.newPage();
        await this.page.goto(WA_PAGE);
        //await page.waitForSelector('img[src^="'+WA_PAGE+'"]', {visible: true}).then(success, error);
        this.emit("ready");
        await this.page.waitForSelector('img[src^="'+WA_PAGE+'"]', {visible: true, timeout: 0});
        this.emit("authenticated");
    }

    
}