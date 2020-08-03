var ContactUsPage=require("../pageobjects/ContactUsPage.js");
var data=require("../../utils/dataGenerator.js");
var json;

beforeEach(function(){
    ContactUsPage.Open();
    json=data.jsonKey("./utils/dataJson.json");
});

describe ("TestFile to test the Helpers for this framework",()=>{
   it('Test 1: Contact Us Page Test send all fields using Json Data',()=>{
      ContactUsPage.setFormValues(json.firstName,json.lastName, json.email , json.comment,true,true,true);
    });
   it('Test 2: send all fields except comments using Random Data',()=>{
      ContactUsPage.setFormValues(data.randomString(10,true),data.randomString(5), data.randomEmail(20,false,true) , null ,true,true,false);
   });   
   it('Test 3: send all fields except comments and email using Random Data',()=>{
    ContactUsPage.setFormValues(data.randomString(10,true),data.randomString(5), null , null ,true,true,false);
 });   
});