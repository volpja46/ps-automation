const webdriver = require("selenium-webdriver");
By = webdriver.By,
  until = webdriver.until;
const expect = require('chai').expect;
const assert = require('assert');
const chai = require("chai");

// task #1 - Form Authentication
// 1) Enter the username and password to login.
// 2) Validate you have logged in
// 3) Log Out
// 4) Validate you’ve logged out

var driver = new webdriver.Builder().forBrowser("chrome").build();
// new browser created
const loginPage = "http://the-internet.herokuapp.com/login";
// my link

function formAuthentication() {
  driver.get(loginPage).then(() => driver.wait(until.elementIsVisible(By.xpath('//*[@id="login"]/button'))))

  var username = driver.findElement(By.css("#username"))
  // find username input field
  username.sendKeys('tomsmith')
  // enter this as username
  var password = driver.findElement(By.css('#password'))
  // find password input field
  password.sendKeys('SuperSecretPassword!')
  // enter this as password

  var button = driver.findElement(By.className('fa fa-2x fa-sign-in'));
  // find submit button on page
  button.submit();
  // simulate press of submit button
  var finish = driver.wait(until.elementLocated(By.xpath('//*[@id="content"]/div/a/i')));
  finish.click()
  // validate log out
}

formAuthentication();
