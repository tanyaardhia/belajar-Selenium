const { Builder, Browser, By, Key, until } = require('selenium-webdriver')

async function start() {
  let driver = await new Builder().forBrowser("chrome").build();

  await driver.get('https://www.lazada.co.id/');
  await driver.findElement(By.className(`search-box__input--O34g`)).sendKeys('Sepatu', Key.RETURN);
  await driver.sleep(10000);
  await driver.quit();
}

start();