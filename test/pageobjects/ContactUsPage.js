const BasePage = require("./basePage");

class ContactUsPage extends BasePage {
    get firstName(){return $("[name='first_name']");}
	get lastName(){return $("[name='last_name']");}
	get comments(){return $("textarea");}
	get emailAddress(){return $("[name='email']");}
	get submitButton(){return "[type='submit']";}

	get successfulSubmissionHeader(){return "#contact_reply h1";}
	get unsuccessfulSubmissionHeader(){return "body";}
	get successfulSubmissionHeaderText(){return $(this.successfulSubmissionHeader).getText();}
    get unsuccessfulSubmissionHeaderText(){return $(this.unsuccessfulSubmissionHeader).getText();}
    
    Open(){
        super.openUrlAndMaximize("/Contact-Us/contactus.html");
    }

    setFormValues(firstName,lastName,emailAddress,comments=null,submit=false,verify=false,submission=null){
        if(firstName){
            this.setValue(this.firstName,firstName);
        }
        if(lastName){
            this.setValue(this.lastName,lastName);
        }
        if(emailAddress){
            this.setValue(this.emailAddress,emailAddress);
        }
        if(comments){
            this.setValue(this.comments,comments);
        }
        if(submit==true){
            this.submitForm();
        }
        if(verify==true){
            this.verifySubmissionHeader(submission);
        }
        
    }

    submitForm(){
        super.waitAndClick(this.submitButton);
    }

    verifySubmissionHeader(submission){
        switch(submission){
            case true:
                super.expectEqualTo(this.successfulSubmissionHeaderText,"Thank You for your Message!",true,this.successfulSubmissionHeader);
                break;
            case false:
                super.expectIncludeIn(this.unsuccessfulSubmissionHeaderText,"Error: all fields are required");
                break;
        }
    }
    
}
module.exports =ContactUsPage.prototype;