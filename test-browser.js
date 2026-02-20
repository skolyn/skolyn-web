const puppeteer = require('puppeteer');
(async () => {
  try {
    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();
    page.on('console', msg => {
      if (msg.type() === 'error') console.log('BROWSER_ERROR:', msg.text());
    });
    page.on('pageerror', err => {
      console.log('PAGE_ERROR:', err.message);
    });
    await page.goto('http://localhost:4200', { waitUntil: 'networkidle0', timeout: 30000 });
    // Let's also navigate to the investors page
    console.log('Navigating to /investors...');
    await page.goto('http://localhost:4200/investors', { waitUntil: 'networkidle0', timeout: 30000 });
    await browser.close();
  } catch (err) {
    console.error('SCRIPT_ERROR:', err);
  }
})();
