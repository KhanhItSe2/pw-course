import { test, expect } from '@playwright/test';

test("Exercise 2", async ({ page }) => {
    await test.step("Truy cập trang https://material.playwrightvn.com/", async () => {
        await page.goto("https://material.playwrightvn.com/");
    })
    await test.step("Click vào 'Bài học 2: Produce Page'", async () => {
        await page.locator("//a[@href='02-xpath-product-page.html']").click();
    })
    await test.step("a. Thêm Sản Phẩm 1", async () => {
        await page.locator("//button[@data-product-id='1']").click({ clickCount: 2 });
    })
    await test.step("b. Thêm Sản Phẩm 2", async () => {
        await page.locator("//button[@data-product-id='2']").click({ clickCount: 3 });
    })
    await test.step("c. Thêm Sản Phẩm 3", async () => {
        await page.locator("//button[@data-product-id='3']").click();
    })
});