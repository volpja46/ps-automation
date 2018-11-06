const webdriver = require("selenium-webdriver");
By = webdriver.By,
  until = webdriver.until;
const expect = require('chai').expect;
const assert = require('assert');
const chai = require("chai");



var driver = new webdriver.Builder().forBrowser("chrome").build();
// new browser created
// create a method which scrolls down the page a set number of times.
// reload 3 times before stopping WAIT

const infiniteScrollPage = "http://the-internet.herokuapp.com/infinite_scroll";

// reload pg


function infiniteScroll(scrollNumber) {
  driver.get(infiniteScrollPage)
  // wait until pg is loaded
  setTimeout(function() {

    driver.wait(webdriver.until.elementLocated(webdriver.By.className('jscroll-added')));
    driver.findElement(webdriver.By.className('no-js')).sendKeys(webdriver.Key.PAGE_DOWN);
    let i = 0
    // while we are under iteration 3, scroll again
    while (i < 3) {
      i++;
      infiniteScroll(scrollNumber);
      // console.log(scrollNumber) 
    }
  }, 5000)
}

infiniteScroll(5)
