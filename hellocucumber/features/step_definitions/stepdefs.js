const { Given, When, Then } = require('@cucumber/cucumber');
var assert = require("assert")
const { Builder, By } = require('selenium-webdriver');

let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;

const chrome = require('selenium-webdriver/chrome');
const chromedriver = require('chromedriver');

chrome.setDefaultService(new chrome.ServiceBuilder(chromedriver.path).build());

let driver = new Builder().forBrowser('chrome').build();

Given('I gо tо webdriver.io', function () {
    driver.get('https://webdriver.io/');
});

When('I click on button', function () {
    driver.findElement(By.xpath('//a[text()="Docs"]')).click();
});

Then('I should see redirect', function () {
    console.log(driver.getCurrentUrl());
    
    url.then(function (result) {
        console.log(result)
    })
    //assert.equal(driver.getCurrentUrl(), 'https://webdriver.io/docs/gettingstarted.html')
    //expect(Promise.resolve(driver.getCurrentUrl())).to.equal('https://webdriver.io/docs/gettingstarted.html');

});