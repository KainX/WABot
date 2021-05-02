const WA_PAGE = 'https://web.whatsapp.com/';

exports.start = async(puppeteer, success, error) =>{
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.goto(WA_PAGE);
    await page.waitForSelector('img[src^="'+WA_PAGE+'"]', {visible: true}).then(success, error);
};