const LoginPage = require('../pageobjects/LoginPage')
const ClientPage = require('../pageobjects.ClientPage')

describe('clients test', () => {
    beforeEach(async() => {
        await browser.url(browser.options.baseurl + 'login');
        await LoginPage.doLogin();
        await
    })

    it('should create new client', async ()=> {
    
        await ClientPage.createClieantButton.click();
        await ClientPage.surnameField.setValue("Тестовая Фамилия")
        await ClientPage.firstameField.setValue("Тестовая Имя")

        let testingUser ={
            surname:"Тестовая Фамилия"
        }
        await ClientPage.fillForm(testingUser)
        await browser.pause(5000);
    })
    it 'remain test cases', async () =>

})