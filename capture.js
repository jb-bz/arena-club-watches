import { chromium } from 'playwright';

async function capture() {
  const browser = await chromium.launch();
  const page = await browser.newPage({
    viewport: { width: 1440, height: 900 }
  });
  
  console.log('Navigating to ArenaClub...');
  try {
    await page.goto('https://arenaclub.com/marketplace', { waitUntil: 'domcontentloaded', timeout: 30000 });
    await page.waitForTimeout(5000); // Wait for JS to render
    
    console.log('Capturing marketplace...');
    await page.screenshot({ path: 'arenaclub_marketplace.png' });
  } catch (e) {
    console.error('Failed to capture:', e);
  } finally {
    await browser.close();
  }
}

capture();
