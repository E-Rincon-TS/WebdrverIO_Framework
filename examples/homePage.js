const { expect } = require("chai");

describe("Testear la página principal de WebDriverUniversity", ()=>{
    it('Validar que el titulo de la dirección Url sea el correcto', ()=>{
        browser.url('./');
        browser.pause(5000);
        var title= browser.getTitle();
        try{
            expect(title).to.equal('WebDriverUniversity.com');
        }catch(error){
            console.log("El ERROR fue: "+error);
            assert.fail();
        }
    });
});
