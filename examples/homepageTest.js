var Page= require("../pageobjects/TestPage.js");

describe ("TestFile to test the Helpers for this framework",()=>{
   it('Test 1',()=>{
    Page.openUrlAndMaximize("./");
    Page.titleAssertion('WebDriverUniversity.com');
   }) ;
});