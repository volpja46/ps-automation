const webdriver = require("selenium-webdriver");
By = webdriver.By,
until = webdriver.until;
const chai = require("chai");
const expect = require('chai').expect;
const assert = require('assert');

// Using Example 1 of the Sortable Tables come up with a set of test cases and automate them.
// Task #2 Task 2: Sortable Tables: http://the-internet.herokuapp.com/tables


var driver = new webdriver.Builder().forBrowser("chrome").build();


const tablesPage =	"http://the-internet.herokuapp.com/tables";


function sortableTables (driver) {

  describe('sort the tablesPage', function(){
      it('should sort by the due amount asc', function(){

      });
    })
}



sortableTables(driver)
