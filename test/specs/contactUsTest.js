var ContactUsPage=require("../pageobjects/ContactUsPage.js");
var data=require("../../utils/dataGenerator.js");
beforeEach(function(){
    ContactUsPage.Open();
});
describe ("TestFile to test the Helpers for this framework",()=>{
   it('Test 1: Contact Us Page Test send all fields',()=>{
      ContactUsPage.setFormValues(data.randomString(5),data.randomString(5), data.randomEmail(20,false,true) , data.randomString(50),true,true,true);
    });
   it('Test 2: send all fields except comments',()=>{
      ContactUsPage.setFormValues(data.randomString(10,true),data.randomString(5), data.randomEmail(20,false,true) , null ,true,true,false);
   });   
   it('Test 3: send all fields except comments and email',()=>{
    ContactUsPage.setFormValues(data.randomString(10,true),data.randomString(5), null , null ,true,true,false);
 });   
});