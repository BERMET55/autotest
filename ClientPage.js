const { getAnswers } = require("@wdio/cli/build/utils")

class ClientPage {
  get createClientButton() { return $('button.clients-add-user-dialog') }


  get surnameField() { return $('input[formcontrolname="userSurname"]')}
  get firstnameField() { return $('input[formcontrolname="userName"]')}

  get genderRadio() { return $('mat-radio-group mat-radio-button div.mat-radio-label-content')}

  get emailField() { return $('input[type="email"]')}
  get phoneField() { return $('input[formcontrolname="phone"]')}
  get birthdayField() { return $('input[formcontrolname="birthday"]')}
  get middleNameField() { return $('input[formcontrolname="userMiddleName"]')}
  get saveButton() { return $('button[name="save"]')}

  get openChildrenModalPageButton() { return $('div.add-user-children span i')}
  get childsModalPage() { return $('mat-dialog-container app-children-dialog')}
  get childsModalPageAddChildOption() { return this.childsModalPage.$( 'button.mat-raised-button ')}
  get childEnterRow() { return this.childsModalPage.$('div.crm-row')}
  get childNameField() { return this.childEnterRow.$('input[formcontrolname="Name"]')}
  get childBirthDateField() { return this.childEnterRow.$('input[formcontrolname="Birthday"]')}
  get childGenderSelect() { return this.childEnterRow.$('mat-select')}
  get childGenderSelectOption() { return $('//mat-option/span[contains(text(),"М")]')}
  get addChild() { return this.childsModalPage.$('//mat-dialog-actions/button[contains(text(),"Сохранить")]')}

  get openSearch() { return $('form.search-form')}
  get ageSelect()  { return $('app-client-age-filter div.age')}
  get genderSelect() { return $('app-client-sex-filter[class="options-wrap sex active"]')}
  get registerForm() { return $('app-client-registration-channel-filter')}
  get restaurantSelect() { return $('div[class="options-select orders"]')}
  get loyaltylevel() { return $('div[class="options-select orders counter-shown"]')}
  get CheckLevel() { return $('div[class="options-select ac"]')}
    
  get ageAllOption() { return $('div[class="option age all select"]')}
  get age18o23Option() { return $('div[ class="option age identified"]')}
  get age24To31Option() { return $('div[ div[class="option age identified"]')}
  get age32To44Option() { return $('div[class="option age identified"]')}
  get ageMaximumOption() { return $('div[ class="option age maximum"]')}
  get age0To100Option() { return $('div [ class="option age range select"]')}


  get genderAllOption() { return $('div[class="option gender select"]')}
  get genderMOption() { return $('div[class="option gender"]')}
  get genderWOption() { return $('div[class="option gender"]')} 
  get genderNOption() { return $('div[class="option gender"]')}

  get registerAllOption() { return $('div[class="option gender select"]')}
  get registerCRMOption() { return $('div[class="option gender ng-star-inserted"]')}
  get registerIOption() {return $('div[class="option gender ng-star-inserted select"]')}
  get registerAnddOption() { return $('div[class="option gender ng-star-inserted select"]')}
  get registerRWOption() { return $('div[class="option gender ng-star-inserted"]')}
  get registerRXOption() { return $('div[class="option gender ng-star-inserted select"]')}
  get registerWebOption() { return $('div[class="option gender ng-star-inserted"]')}

  get restaurantSelect1() { return $('mat-checkbox[class="checkbox custom mat-checkbox mat-accent ng-star-inserted"]')}
  get restaurantSelect2() { return $('mat-checkbox[class="checkbox custom mat-checkbox mat-accent ng-star-inserted"]')}
  get restaurantSelect3() { return $('mat-checkbox[class="checkbox custom mat-checkbox mat-accent ng-star-inserted"]')}
  get restaurantSelect4() { return $('mat-checkbox[class="checkbox custom mat-checkbox mat-accent ng-star-inserted"]')}
  get restaurantSelect5() { return $('mat-checkbox[class="checkbox custom mat-checkbox mat-accent ng-star-inserted"]')}

  get loyaltyBronze() { return $('mat-checkbox[class="option checkbox custom mat-checkbox mat-accent ng-star-inserted mat-checkbox-anim-checked-unchecked"]')}
  

  get Check1Option() { return $('div[class="option ac all select"]')}
  get Check2Option() { return $('div[class="option ac identified select"]')}
  get Check3Option() { return $('div[class="option ac identified"]')}
  get Check4Option() { return $('div[class="option ac identified"]')}
  get Check5Option() { return $('div[class="option ac identified select"]')}
  get Check6Option() { return $('div[class="option ac maximum"]')}
  get Check6Option() { return $('div[class="option ac range-double"]')}
  //    async fillForm(testingUser){
//           await this.surnameField.setValue(testingUser.surname)
//       }
     
//    async fillChild(childName="Bakai", birthdate="05/06/2000"){
//       await this.openChildrenModalPageButton.click();
//       await this.childsModalPageAddChildOption.click();
//       await this.childNameField.setValue(childName);
//       await this.childBirthDateField.setValue(birthdate);
//       await this.childGenderSelect.click();
//       await browser.pause(5000)
//       await this.childGenderSelectOption.click();
//       await this.addChild.click();
//   }

//  async open(){
//       await browser.url(browser.options.baseUrl + 'clients');
 }

module.exports = new ClientPage()
