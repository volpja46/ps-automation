const webdriver = require("selenium-webdriver");
By = webdriver.By,
  until = webdriver.until;
const chai = require("chai");
const expect = require('chai').expect;
const assert = require('assert');

// Using the Checkboxes example, load the page and create a method which clicks on both checkboxes.
// The method should click each checkbox at least 1 but no more than 10; the number of times selected is randomly generated for each checkbox.


var driver = new webdriver.Builder().forBrowser("chrome").build();
const checkboxesPage = "http://the-internet.herokuapp.com/checkboxes";
const checkbox2 = driver.findElement(webdriver.By.css('#checkboxes > input[type="checkbox"]:nth-child(3)'));
const checkbox1 = driver.findElement(webdriver.By.css('#checkboxes > input[type="checkbox"]:nth-child(1)'));


function checkIt() {
  driver.get(checkboxesPage)
    .then(getRandomNumber)
}

function getRandomNumber() {
  var randomNum = Math.floor(Math.random() * (10 - 1));
  checkBox1(randomNum)
}

function checkBox1(randomNum) {
  let i = 0
  while (i <= randomNum) {
    //  check box #1 will be checked randomNum times
    checkbox1.click()
    i++
  }
  checkBox2();
}


function checkBox2(num) {
  var num = Math.floor(Math.random() * (10 - 1));
  let i = 0
  while (i <= num) {
    //  check box #2 will be checked num times
    checkbox2.click()
    i++
  }
}

checkIt()
