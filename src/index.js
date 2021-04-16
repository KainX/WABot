const puppeteer = require('puppeteer');

 export const start = async() =>{
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.goto('https://web.whatsapp.com/');
    await page.waitForSelector('._3LtPa', {visible: true});
};

start();