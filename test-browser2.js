const puppeteer = require('puppeteer');
(async () => {
  try {
    console.log('Launching browser...');
    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();
    page.on('console', msg => {
      console.log('BROWSER_CONSOLE:', msg.type(), msg.text());
    });
    page.on('pageerror', err => {
      console.log('PAGE_ERROR:', err.message);
    });
    console.log('Going to home page...');
    await page.goto('http://localhost:4200', { waitUntil: 'load', timeout: 15000 });
    console.log('Waiting...');
    await new Promise(r => setTimeout(r, 2000));
    console.log('Going to investors page...');
    await page.goto('http://localhost:4200/investors', { waitUntil: 'load', timeout: 15000 });
    console.log('Waiting...');
    await new Promise(r => setTimeout(r, 2000));
    console.log('Done.');
    await browser.close();
  } catch (err) {
    console.error('SCRIPT_ERROR:', err);
  }
})();
