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
      let filterText2 = await ClientPage.registerIOption.getText()
      let filterText3 = await ClientPage.registerAnddOption.getText()
      let filterText4 = await ClientPage.registerRWOption.getText()
      let filterText5 = await ClientPage.registerRXOption.getText()
      let filterText6 = await ClientPage.registerWebOption.getText()
      await expect(filterText).toHaveTextContaining(Все)
      await expect(filterText1).toHaveTextContaining(CRM)
      await expect(filterText2).toHaveTextContaining(iOS)
      await expect(filterText3).toHaveTextContaining(Android)
      await expect(filterText4).toHaveTextContaining(Резерв(web))
      await expect(filterText5).toHaveTextContaining(Резерв([хостес]))
      await expect(filterText6).toHaveTextContaining(WebRegistration)
})

it( 'should open Search:Restaurant Select', async ()=> {
   await browser.pause(10000);
   await ClientPage.createClientButton.waitForDisplayed({ timeout:10000});
   await ClientPage.openSearch.click();
   await ClientPage.restaurantSelect.click();
   let filterText1 = await ClientPage.restaurantSelect1.getText()
   let filterText2 = await ClientPage.restaurantSelect2.getText()
   let filterText3 = await ClientPage.restaurantSelect3.getText()
   let filterText4 = await ClientPage.restaurantSelect4.getText()
   let filterText5 = await ClientPage.restaurantSelect5.getText()
   await expect(filterText1).toHaveTextContaining(ЫрКесе)
   await expect(filterText2).toHaveTextContaining(Уголек)
   await expect(filterText3).toHaveTextContaining(ZoldenBeer)
   await expect(filterText4).toHaveTextContaining(Нико)
   await expect(filterText5).toHaveTextContaining(Pamukkale)
})
it( 'should open Search:Loyalty Level', async ()=> {
   await browser.pause(10000);
   await ClientPage.createClientButton.waitForDisplayed({ timeout:10000});
   await ClientPage.openSearch.click();
   await ClientPage.loyaltylevel.click();
   let filterText = await ClientPage.loyaltyBronze.getText()
   await expect(filterText).toHaveTextContaining(БРОНЗА)
})

it( 'should open Search:Check Level', async ()=> {
   await browser.pause(10000);
   await ClientPage.createClientButton.waitForDisplayed({ timeout:10000});
   await ClientPage.openSearch.click();
   await ClientPage.Checklevel.click();
   let filterText1 = await ClientPage.Check1Option.getText()
   let filterText2 = await ClientPage.Check2Option.getText()
   let filterText3 = await ClientPage.Check3Option.getText()
   let filterText4 = await ClientPage.Check4Option.getText()
   let filterText5 = await ClientPage.Check5Option.getText()
   let filterText6 = await ClientPage.Check6Option.getText()
   let filterText7 = await ClientPage.Check6Option.getText()

   await expect(filterText1).toHaveTextContaining(Все)
   await expect(filterText2).toHaveTextContaining(до1000сом)
   await expect(filterText3).toHaveTextContaining(1001-2000)
   await expect(filterText4).toHaveTextContaining(2001-4000)
   await expect(filterText5).toHaveTextContaining(4001-8000)
   await expect(filterText6).toHaveTextContaining(8001+сом)
   await expect(filterText7).toHaveTextContaining(от0до3000сом)
})
})
