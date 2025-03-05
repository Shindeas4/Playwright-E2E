import test ,{expect} from"../pages/basePage" ;


test('Log in to LUMA',{tag :['@smoke', '@login' ]}, async ({ page,
loginPage }) => {
    await page.goto(process.env.BASE_URL!, {
        waitUntil: "domcontentloaded",
      });
    await loginPage.login(process.env.USERID! ,process.env.PASSWORD!);
    
    
});

 test.afterEach('loging out ' , async({  
loginPage})=>{
  await loginPage.logOut();
});
