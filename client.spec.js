const LoginPage = require('../pageobjects/login.page')
const ClientPage = require('../pageobjects/ClientPage')

describe('Clients test', () => {
    beforeEach( async() => {
        await LoginPage.open();
        await LoginPage.doLogin();
        // await ClientPage.open();
    })
    afterEach('Clear browser', async()=>{
        await browser.reloadSession();
    })

    it('should create new client', async ()=> {
        await ClientPage.createClientButton.waitForDisplayed({ timeout: 10000 });
        await ClientPage.createClientButton.click();
        await ClientPage.surnameField.setValue("Тестовая фамилия")
        await ClientPage.firstnameField.setValue("Тестовое имя")
        await ClientPage.genderRadio.click();
        await ClientPage.emailField.setValue("father208@gmail.com");
        await ClientPage.middleNameField.setValue("Отчество");
        await browser.pause(5000);
        await ClientPage.birthdayField.setValue("01/06/1996");
        await browser.pause(5000);
        await ClientPage.phoneField.setValue("996777888999");
        await browser.pause(5000);


        await ClientPage.fillChild();
        await ClientPage.saveButton.click();
        await browser.pause(5000);

        await browser.acceptAlert();

        //let testingUser = {
           // surname: "Тестовая фамилия"
        //}
        //await ClientPage.fillForm(testingUser)
        // окончание второго способ
    })

     xit('remain test cases', async () => {

    })

})