'use strict';

const puppeteer = require('puppeteer');

function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
function once(emitter, event) {
  return new Promise(resolve => emitter.once(event, resolve));
}

(async() => {

  try {
    const browser = await puppeteer.launch({args: ['--no-sandbox', '--disable-setuid-sandbox']});
    const page = await browser.newPage();

    const cookie = process.env.TWITTER_COOKIE;
    const cookieList = cookie.split('; ').map(elem => {
      const [name, value ] = elem.split('=');
      return {
        value,
        name,
        domain: '.twitter.com',
        expires: Date.now() + 600000000
      };
    });
    await page.setCookie(...cookieList);
    await page.emulate({
      viewport: {
        width: 1024,
        height: 768
      },
      userAgent: 'fruta'
    });
    await page.goto('https://cards-dev.twitter.com/validator', {
      waitLoad: true
    });

    const textSelector = '#ValidationForm > div > div:nth-child(1) > input.FormControl';
    const clickSelector = '#ValidationForm > div > div.Grid-cell.u-sizeFill.u-marginTm > input';
    await page.click(textSelector);
    await page.keyboard.type(process.argv[2]);
    await page.click(clickSelector);
    await page.waitForSelector('#CardPreview > div.CardPreview-preview.js-cardPreview iframe');

    const frame = await once(page, 'framenavigated');
    await frame.waitForSelector('body > div > div > a > div.SummaryCard-image > div > div > img');
    await timeout(1200);

    const fileName = `${Date.now()}.png`;
    await page.screenshot({path: fileName});
    console.log(fileName);

    await page.close();
    await browser.close();
  } catch(err) {
    process.stderr.write(`There was an error taking the screenshot: ${err.message}`);
    process.stderr.write(err.stack);
    process.exit(1);
  }
})();
