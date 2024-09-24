import { test } from '@playwright/test';

const newsPapers = [
    {
        title: "Nhà phát minh thuốc kháng sinh bị lãng quên 1",
        content: "Nhà phát minh thuốc kháng sinh bị lãng quên"
    },
    {
        title: "Nhà phát minh thuốc kháng sinh bị lãng quên 2",
        content: "Nhà phát minh thuốc kháng sinh bị lãng quên"
    },
    {
        title: "Nhà phát minh thuốc kháng sinh bị lãng quên 3",
        content: "Nhà phát minh thuốc kháng sinh bị lãng quên"
    },
    {
        title: "Nhà phát minh thuốc kháng sinh bị lãng quên 4",
        content: "Nhà phát minh thuốc kháng sinh bị lãng quên"
    },
    {
        title: "Nhà phát minh thuốc kháng sinh bị lãng quên 5 ",
        content: "Nhà phát minh thuốc kháng sinh bị lãng quên"
    },
    {
        title: "Nhà phát minh thuốc kháng sinh bị lãng quên 6",
        content: "Nhà phát minh thuốc kháng sinh bị lãng quên"
    },
    {
        title: "Nhà phát minh thuốc kháng sinh bị lãng quên 7",
        content: "Nhà phát minh thuốc kháng sinh bị lãng quên"
    },
    {
        title: "Nhà phát minh thuốc kháng sinh bị lãng quên 8",
        content: "Nhà phát minh thuốc kháng sinh bị lãng quên"
    },
    {
        title: "Nhà phát minh thuốc kháng sinh bị lãng quên 9",
        content: "Nhà phát minh thuốc kháng sinh bị lãng quên"
    },
    {
        title: "Nhà phát minh thuốc kháng sinh bị lãng quên 10",
        content: "Nhà phát minh thuốc kháng sinh bị lãng quên"
    },
]

test("Exercise 4", async ({ page }) => {
    await test.step("Truy cập trang https://material.playwrightvn.com/", async () => {
        await page.goto("https://material.playwrightvn.com/");
    });
    
    await test.step("Click vào 'Bài học 4: Personal notes'", async () => {
        await page.locator("//a[@href='04-xpath-personal-notes.html']").click();
    });

    await test.step("a. Thêm mới 10 note có nội dung là tiêu đề với một phần ngắn (khoảng 3 dòng) tại báo https://vnexpress.net/khoa-hoc", async () => {
        for (let i = 0; i < newsPapers.length; i++) {
            await page.locator("//input[@id='note-title']").fill(newsPapers[i].title);
            await page.locator("//textarea[@id='note-content']").fill(newsPapers[i].content);
            await page.locator("//button[@id='add-note']").click();
        }
    });

    await test.step("b.Thực hiện search theo tiêu đề bài báo bất kì", async () => {
        await page.locator("//input[@id='search']").fill(newsPapers[2].title);
    });
});