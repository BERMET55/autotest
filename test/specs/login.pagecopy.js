

it('should login', async () => {
     await browser.url('http://167.114.201.175:5000/login');
     await (await browser.$('input[name="userName"]')).setValue('Admin');
     //password
     await browser.$('input[name="password"]').setValue('Admin@Navi1');
     //button submit
     await browser.$('button[type="submit"]').click();
     await browser.pause(10000);
     await expect(browser).toHaveUrlContaining('clients')
     
   })