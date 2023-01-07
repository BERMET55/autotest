    class LoginPage{
     get loginField () {return $ ('input[name="userName"]');}
     get passwordField () {return $ ('input[name="password"]');}
     get submitButton () {return $ ('button[type="submit"]');}

     async doLogin(username="Admin", password="Admin@Navi"){
         await this.loginField.setValue(username);
         await this.passwordFiled.setValue(password);
         await this.submitButton.click(); 
      }

}
    module.exports = new LoginPage();
