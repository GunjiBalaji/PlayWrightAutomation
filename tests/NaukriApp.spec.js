const{expect,test} = require('@playwright/test');


test('Naukri Login', async({browser})=>
    
    {


const context = await browser.newContext();
const page = await context.newPage();
await page.goto("https://www.naukri.com/");
await page.locator("#login_Layer").click();
await page.locator("input[placeholder='Enter your active Email ID / Username']").type("bgunji@gmail.com");
await page.locator("input[placeholder='Enter your password']").type("Balu123G#");
await page.locator("button[type='submit']").click();
console.log(await page.locator(".view-profile-wrapper").textContent());
await expect(page.locator(".view-profile-wrapper")).toContainText("profile");





});

