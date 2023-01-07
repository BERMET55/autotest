class ClientPage {
   get createClientButton() { return $ ('button.clients-add-user-dialog')} 


   get surnameField() {return $('input[formcontrolname="userSurname"]')} 
   get firstnameField(){ return $('input[formcontrolname="userSurname"]')}

   async fillform(){
       await this.surnameField.setValue('testingUser.surname')
   }
 }

 module.exports = new ClientPage()
