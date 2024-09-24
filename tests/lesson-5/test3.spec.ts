import { test } from '@playwright/test';

test("Exercise 3", async ({ page }) => {
    await test.step("Truy cập trang https://material.playwrightvn.com/", async () => {
        await page.goto("https://material.playwrightvn.com/");
    });
    
    await test.step("Click vào 'Bài học 3: Todo Page'", async () => {
        await page.locator("//a[@href='03-xpath-todo-list.html']").click();
    });

    await test.step("a. Thêm mới 100 todo item", async () => {
        for (let i = 1; i <= 100; i++) {
            await page.locator("//input[@id='new-task']").fill(`Todo ${i}`);
            await page.locator("//button[@id='add-task']").click();
        }
    });

    await test.step("b. Xóa các todo có số lẻ", async () => {
        page.on("dialog", async dialog => dialog.accept());
        for (let i = 1; i <= 100; i++) {
            if (i % 2 !== 0) {
                await page.locator(`//button[@id="todo-${i}-delete"]`).click();
            }
        }
    });
});