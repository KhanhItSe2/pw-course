import { test, expect } from '@playwright/test';
import path from 'path';
console.log(__dirname);
test("Exercise 1", async ({ page }) => {
    await test.step("Truy cập trang https://material.playwrightvn.com/", async () => {
        await page.goto("https://material.playwrightvn.com/");
    })
    await test.step("Click vào 'Bài học 1: Register Page'", async () => {
        await page.locator("//a[@href='01-xpath-register-page.html']").click();
    })
    await test.step("Nhập đầy đủ các thông tin", async () => {
        await page.locator("//input[@id ='username']").fill("Khanh Nguyen");
        await page.locator("//input[@id ='email']").fill("khanhnguyenitse@gmail.com");
        await page.locator("//input[@id ='male']").check();
        await page.locator("//input[@id ='reading']").check();
        await page.locator("//input[@id ='traveling']").check();
        await page.locator("//input[@id ='cooking']").check();
        await page.locator("//select[@id ='interests']").selectOption(['technology', 'sports']);
        await page.locator("//select[@id ='country']").selectOption('usa');
        await page.locator("//input[@id ='dob']").fill("2001-04-21");
        await page.locator("//input[@id ='profile']").setInputFiles(path.join(__dirname, 'test.txt'));
        await page.locator("//textarea[@id ='bio']").fill("My full name is Nguyen An Khanh");
        await page.locator("//input[@id ='newsletter']").check();
        await page.locator("//div[@class ='tooltip']").hover();
        await page.locator("//label[@class='switch']").click();
        await page.locator("//button[@type='submit']").click();
    })
});