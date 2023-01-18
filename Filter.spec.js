 const LoginPage = require('../pageobjects/login.page')
 const ClientPage = require('../pageobjects/ClientPage')


describe('Clients test ', () => {
    beforeEach( async() => {
        await LoginPage.open();
        await LoginPage.doLogin();
    })

 afterEach('Clear browser',async()=>{
    await browser.reloadSession();
 })

 it('should  open Search: Age Filter', async ()=> {
    await browser.pause(10000);
    await ClientPage.createClientButton.waitForDisplayed({ timeout: 10000});
    await ClientPage.openSearch.click();
    await ClientPage.ageSelect.click();
    let filterText = await ClientPage.ageAllOption.getText()
    let filterText1 = await ClientPage.age18To23Option.getText()
    let filterText2 = await ClientPage.age24To31Option.getText()
    let filterText3 = await ClientPage.age32To44Option.getText()
    let filterText4 = await ClientPage.ageMaximumOption.getText()
    let filterText5 = await ClientPage.age0To100Option.getText()
    await expect(filterText).toHaveTextContaining('Все')
    await expect(filterText1).toHaveTextContaining('18-23')
    await expect(filterText2).toHaveTextContaining('24-31')
    await expect(filterText3).toHaveTextContaining('32-44')
    await expect(filterText4).toHaveTextContaining('45+')
    await expect(filterText5).toHaveTextContaining('0-100')
    await browser.pause(10000);

   })

    it( 'should open Search:Gender Filter', async ()=> {
      await browser.pause(10000);
      await ClientPage.createClientButton.waitForDisplayed({ timeout:10000});
      await ClientPage.openSearch.click();
      await ClientPage.genderSelect.click();
      let filterText = await ClientPage.genderAllOption.getText()
      let filterText1 = await ClientPage.genderMOption.getText()
      let filterText2 = await ClientPage.genderWOption.getText()
      let filterText3 = await ClientPage.genderNOption.getText()
      await expect( filterText).toHaveTextContaining(Все)
      await expect(filterText1).toHaveTextContaining(Мужской)
      await expect(filterText2).toHaveTextContaining(Женский)
      await expect(filterText3).toHaveTextContaining(Полнеуказан)

    })
    it( 'should open Search:Registration Channel', async ()=> {
      await browser.pause(10000);
      await ClientPage.createClientButton.waitForDisplayed({ timeout:10000});
      await ClientPage.openSearch.click();
      await ClientPage.registerForm.click();
      let filterText = await ClientPage.registerAllOption.getText()
      let filterText1 = await ClientPage.registerCRMOption.getText()
      let filterText2 = await ClientPage.registeriOSOption.getText()
      await expect(filterText).toHaveTextContaining(Все)
      await expect(filterText1).toHaveTextContaining(CRM)
      await expect(filterText2).toHaveTextContaining(iOS)

})

})
