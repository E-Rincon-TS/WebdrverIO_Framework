class BasePage{
    constructor(){

    }
    

    openUrlAndMaximize(url){
        browser.url(url);
        browser.maximizeWindow();
    }

    setValue(selector , value){
        try{
            browser.sendKeys(selector,value);
        }catch(error){
            console.log('A Error trying to send keys ocurred,  the error was: '+error);
        }        
    }

    waitAndSendKeys(selector,key){
        try{
            $(selector).waitForExist();
            $(selector).setValue(key);
           }catch(error){
               throw new Error("Could not send value to selector: "+ $(selector));
           }
    }

    getUrlAndTitle(){
        return{
            url: browser.getUrl(),
            title: browser.getTitle()
        };
    }

    waitAndClick(selector){
        try{
            $(selector).waitForExist();
            $(selector).click();
           }catch(error){
               throw new Error("Could not click on selector: "+ $(selector));
           }
    }
    
    //Assertions
    expectEqualTo(current, expected){
        try{
            expect(current).to.equal(expected);
        }catch(error){
            console.log("El ERROR fue: "+error);
            assert.fail();
        }
    }

    titleAssertion(expected){
        this.expectEqualTo(this.getUrlAndTitle().title, expected);
    }
}
module.exports = BasePage;