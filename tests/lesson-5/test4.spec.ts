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
let content;
let title;
test("Exercise 4 - Type 2", async ({ page }) => {

    await test.step("1. Access to https://vnexpress.net/khoa-hoc", async () => {
        await page.goto("https://vnexpress.net/khoa-hoc", { waitUntil: "domcontentloaded" });
    });

    await test.step("2. Get Titles and Contents", async () => {
        title = await page.locator("//article/h3[@class='title-news']/a").allTextContents();
        content = await page.locator("//article/p[@class='description']").allTextContents();
    });

    await test.step("3. Access https://material.playwrightvn.com/ and go to Personal Notes page", async () => {
        await page.goto("https://material.playwrightvn.com/");
        await page.locator("//a[@href='04-xpath-personal-notes.html']").click();
    });

    await test.step("4. Add 10 notes", async () => {
        for (let i = 0; i < 10; i++) {
            await page.locator("//input[@id='note-title']").fill(title[i]);
            await page.locator("//textarea[@id='note-content']").fill(content[i]);
            await page.locator("//button[@id='add-note']").click();
        }
    });

    await test.step("5. Search random page title page", async () => {
        await page.locator("//input[@id='search']").fill(title[1].trim());
    });
});