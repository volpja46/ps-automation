// http://the-internet.herokuapp.com/dropdown
// Task #5 - Using the Dropdown example,
 // load the page
 //  randomly select an option from the list

 const webdriver = require("selenium-webdriver");
 By = webdriver.By,
 until = webdriver.until;


 var driver = new webdriver.Builder().forBrowser("chrome").build();
 // new browser created
 const dropdownPage =	"http://the-internet.herokuapp.com/dropdown";
 // my link


function dropdown (driver) {

    var dropdown = driver.findElement(By.css("#dropdown"))
    driver.get(dropdownPage)

// grab options from dropfown
     var op1 = driver.findElement(webdriver.By.css('#dropdown > option:nth-child(2)'));
	   var op2 = driver.findElement(webdriver.By.css('//*[@id="dropdown"]/option[3]'));

// turn into an array of the options to use array methods
	   var options = [op1, op2];
	   var randomNumber = options[Math.floor(Math.random() * options.length)];
// select random item from array
	   randomNumber.click();
  }

dropdown(driver)
