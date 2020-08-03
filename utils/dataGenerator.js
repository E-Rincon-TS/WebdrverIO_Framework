const fs=require('fs');

module.exports={
    randomEmail: function(length=5,number=false,especial=false){
        //let emailAddress="Mail."+Math.random().toString().replace('0.','')+"@mail.com";
        let emailAddress=this.randomString(length,number,especial)+"@mail.com";
        return emailAddress;
    },
    randomString: function makeid(length=5,number=false,especial=false) {
        var result = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        if(number==true){
            characters      += '1234567890';
        }
        if(especial==true){
            characters+='_________';
        }     
        for ( var i = 0; i < length; i++ ) {
           result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return result;
     },
     jsonKey: function(path){
        try{
            var jsonString=fs.readFileSync(path);
            try{
                var json =JSON.parse(jsonString);
                return json;
            }catch(err){
                console.log(error);
                return;
            }
        }catch(error){
            console.log(error);
            return;
        }
     }
}