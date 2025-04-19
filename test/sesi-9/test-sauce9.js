const { Builder, By, until } = require('selenium-webdriver');
const assert = require('assert');
const chrome = require('selenium-webdriver/chrome');

describe('Google Search Test', function () {
    let driver;

    it('Visit SauceDemo dan cek page title', async function () {
        driver = await new Builder ().forBrowser('chrome').build();

        await driver.get('https://www.saucedemo.com');
        const title = await driver.getTitle();

        assert.strictEqual(title, 'Swag Labs');
        let inputUsername = await driver.findElement(By.css('[data-test="username"]'))
        let inputPassword = await driver.findElement(By.xpath('//*[@data-test="password"]'))
        let inputbuttonLogin = await driver.findElement(By.className('submit-button btn_action'))
        await inputUsername.sendKeys('standard_user')
        await inputPassword.sendKeys('secret_sauce')
        await inputbuttonLogin.click()

        let buttonCart = await driver.wait(
            until.elementLocated(By.xpath('//*[@data-test="shopping-cart-link"]')), 
            3000
        );
        await buttonCart.isDisplayed()

        let textAppLogo = await driver.findElement(By.className('app_logo'))
        let logotext = await textAppLogo.getText();
        assert.strictEqual(logotext, 'Swag Labs')

        await driver.sleep(3000);
        await driver.quit();

    });

});