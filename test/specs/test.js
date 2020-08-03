var HomePage= require("../pageobjects/homePage.js");
var ContactUsPage=require("../pageobjects/ContactUsPage.js");
describe ("TestFile to test the Helpers for this framework",()=>{

   it('Test 1: HomePage Test',()=>{
      HomePage.openUrlAndMaximize("./");
      HomePage.titleAssertion('WebDriverUniversity.com');
   }) ;

   it.only('Test 2: Contact Us Page Test',()=>{
      ContactUsPage.Open();
      ContactUsPage.setFormValues('John');
      browser.pause(5000);
   });
   
});