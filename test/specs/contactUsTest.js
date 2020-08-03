var ContactUsPage=require("../pageobjects/ContactUsPage.js");
beforeEach(function(){
    ContactUsPage.Open();
});
describe ("TestFile to test the Helpers for this framework",()=>{
   it('Test 1: Contact Us Page Test send all fields',()=>{
      ContactUsPage.setFormValues('John','Hamon','john_hamon@mail.com','This is the test comment',true,true,true);
   });
   it('Test 2: sen all fields except comments',()=>{
      ContactUsPage.setFormValues('John','Hamon','john_hamon@mail.com', null ,true,true,false);
   });
   
});