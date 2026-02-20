const puppeteer = require('puppeteer');
(async () => {
  try {
    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 800 });
    
    // Go to home page
    await page.goto('http://localhost:4200', { waitUntil: 'networkidle0' });
    
    // Switch to dark mode
    await page.evaluate(() => {
      document.documentElement.setAttribute('data-theme', 'dark');
    });
    
    // Wait for repaint
    await new Promise(r => setTimeout(r, 500));
    
    // Take screenshot
    await page.screenshot({ path: 'dark-mode-preview.png', fullPage: false });
    console.log('Took screenshot of dark mode home page.');
    
    // Go to investors page
    await page.goto('http://localhost:4200/investors', { waitUntil: 'networkidle0' });
    
    // Ensure dark mode is on
    await page.evaluate(() => {
      document.documentElement.setAttribute('data-theme', 'dark');
    });
    
    // Wait for repaint
    await new Promise(r => setTimeout(r, 500));
    
    // Take screenshot
    await page.screenshot({ path: 'dark-mode-investors.png', fullPage: false });
    console.log('Took screenshot of dark mode investors page.');
    
    await browser.close();
  } catch (err) {
    console.error('SCRIPT_ERROR:', err);
  }
})();
