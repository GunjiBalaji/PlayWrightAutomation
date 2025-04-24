const{test, expect} = require('@playwright/test');



test('Browser first test login', async({browser})=>
    {
            
            const context= await browser.newContext();
            const page = await context.newPage();
            const username = page.locator('#username');
            const sign = page.locator("#signInBtn");
            const cardtitles = page.locator(".card-body a")
            await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
            await username.type("Balaji");
            await page.locator("[type='password']").type("learning");
            await sign.click();
            console.log(await page.locator("[style*='block']").textContent());
            await expect(page.locator("[style*='block']")).toContainText("Incorrect");
            await username.type("");
            await username.fill("rahulshettyacademy");
            await sign.click();
            console.log(await cardtitles.first().textContent());
            console.log(await cardtitles.nth(1).textContent());
            const alltitles = await cardtitles.allTextContents();
            console.log(alltitles);




});



test('page second test', async({page})=>{

    await page.goto("https://google.com");
    console.log(await page.title());
await expect(page).toHaveTitle("Google");


});


test.only('UI controls', async({browser})=>
    {
        const context = await browser.newContext();
        const page = await context.newPage();
        
        await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
        //dropdown select
        const documentlink = page.locator("[href*='documents-request']");
        const dropdown = page.locator("select.form-control");
        await dropdown.selectOption("consult");
        await page.locator(".radiotextsty").last().click();
        await page.locator("#okayBtn").click();
        console.log(await page.locator(".radiotextsty").last().isChecked());
        await expect(page.locator(".radiotextsty").last()).toBeChecked();
        await page.locator("#terms").click();
        await expect(page.locator("#terms")).toBeChecked();
        await page.locator("#terms").uncheck();
        expect(await page.locator("#terms").isChecked()).toBeFalsy();
        await expect(documentlink).toHaveAttribute("class", "blinkingText");


});


test('child window handl', async({browser})=>
{
    const context = await browser.newContext();
    const page =await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const username = page.locator('#username');
    const documentlink = page.locator("[href*='documents-request']");
    const [newPage] = await Promise.all(
        [
        context.waitForEvent('page'),
        documentlink.click(),
        ]
)
const text = await newPage.locator(".red").textContent();
const arraytext = text.split("@");
const domain = arraytext[1].split(" ")[0];
console.log(domain);
await page.locator('#username').fill(domain);
console.log(await page.locator('#username').textContent());

});