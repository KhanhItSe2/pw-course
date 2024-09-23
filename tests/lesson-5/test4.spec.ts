import { test, expect } from '@playwright/test';
const newsPageper = {
    "1": {
        title: "Nhà phát minh thuộ",
        content: ""
    },
}
test("Exercise 4", async ({ page }) => {
    await test.step("Truy cập trang https://material.playwrightvn.com/", async () => {
        await page.goto("https://material.playwrightvn.com/");
    })
    await test.step("Click vào 'Bài học 4: Personal notes'", async () => {
        await page.locator("//a[@href='04-xpath-personal-notes.html']").click();
    })
    await test.step("a. Thêm mới 10 note có nội dung là tiêu đề với một phần ngắn (khoảng 3 dòng) tại báo https://vnexpress.net/khoa-hoc", async () => {
        
    })
    await test.step("b.Thực hiện search theo tiêu đề bài báo bất kì", async () => {
       
    })
});