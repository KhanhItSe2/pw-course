# Lesson 2

`I. Verion Control System`

- VCS: Hệ thống quản lý các phiên bản
- 3 loại:
  1. **Local**: Lưu ở máy cá nhân
  2. **Centralize**: Lưu ở một máy chủ tập trung
  3. **Distributed**: Lưu ở nhiều máy khác nhau

`II. Git`

**1. So sánh Git & GitHub**

    - Git: là phần mềm, commandline tool được cài trên máy cá nhân
    - GitHub: là website, công cụ để upload git repository lên

**2. Ba trạng thái của Git**

    - Working Directory: các file mới hoặc file có thay đổi
    - Staging Area: các file đưa vào vùng chuẩn bị commit
    - Repository: các commit

**3. Key takeaways**

    - git init: Khởi tạo thư mục quản lý bởi git
    - git add <file_name>: Thêm file được chọn vào vùng staging
    - git add . : Thêm toàn bộ file vào vùng staging
    - git commit -m "message": Thêm những file ở vùng staging vào vùng repository
    - git status:  Xem trạng thái file -> đỏ - vùng working directory, xanh - vùng staging
    - git log: Kiểm tra lịch sử commit

**4. Simple Workflow**

- **Không dùng global config**

    init -> config -> add -> commit -> push
- **Dùng global config**    

    init -> add -> commit -> push

**5. Commit Convention**

- Cú pháp: type: short_description
- type:
  1. chore: sửa nhỏ lẻ, chính tả, xóa file không dùng tới,...
  2. feat: thêm tính năng mới, test case mới
  3. fix: sửa lỗi 1 test trước đó
- short_description: mô tả ngắn gọn (50 kí tự), tiếng Anh hoặc tiếng Việt không dấu.

`III. Javascript`

**1. Ghi vào dòng**

    console.log("");

**2. Variable - Biến**

    Dùng để lưu trữ giá trị có thể thay đổi giá trị được

var: phạm vi toàn cục (global)

let: phạm vi trong cặp ngoặc {}

    Khai báo:
        var <ten_bien> = <gia tri>;
        let <ten_bien> = <gia tri>;

**3. Constant - Hằng số**

    Dùng để khai báo các giá trị không thay đổi
    const <name> = <value>

**4. Datatype - Kiểu dữ liệu**

    Có 8 loại kiểu dữ liệu: String, Number, Bigint, Boolean, Undefined, Null,Symbol, Object.

**5. Comparision Operator**

    So sánh hơn kém: >, <
    So sánh bằng: ==, ===,!=, !==, >=, <=

**6. Unary Operator**

    Dùng để tăng hoặc giảm giá trị
    - i++ bằng với i=i+1
    - i-- bằng với i=i-1

**7. Arithmetic Operator**

    Dùng tính toán giá trị biểu thức
    Các phép toán: +, -, *, /

**8. Conditional**

    Dùng để kiểm tra có nên thực hiện một đoạn logic không.
    Cú pháp: if (<điều kiện>) { //code }. Nếu điều kiện đúng, sẽ chạy đoạn code

**7. Loops**

    Dùng để thực hiện một đoạn logic một số lần nhất định
    Cú pháp: for(<khởi tạo>; <điều kiện dừng>; <điều kiện tăng>) {//code }


`IV. Format Code`

    - Mac: Option + Shift + F
    - Window: Alt + Shift + F


# Lesson 5

`I. DOM`
 
    DOM: Document Object Model
    Ví dụ: <option value="usa">USA</option>
    Cấu trúc cơ bản bao gồm:
    - <option>: Thẻ tag mở
    - </option>: Thẻ tag đóng
    - value: Thuộc tính - attribute
    - "usa": Giá trị thuộc tính - value
    - USA: Nội dung thẻ (text)

Các thẻ HTML thường gặp
- Thẻ `<div>` (viết tắt của divide): dùng để chia các khối trong trang web
- Thẻ `<h1></h1>` đến `<h6></h6>` (viết tắt của heading): dùng để tạo ra các header phân cấp theo thứ tự từ lớn đến bé.
- Thẻ `<form></form>`: dùng để chứa một form thông tin.
- Thẻ input: text, email, radio, checkbox, file, color, range, date
- Thẻ textarea: hiển thị ô input, dạng to
- Thẻ radio button
- Thẻ checkbox
- Thẻ list và dropdown
- button
- Thẻ table
- Thẻ date picker
- Thẻ slider
- Thẻ iframe

`II. Selector`
    
    - Selector giúp tìm kiếm phần tử trên trang
        + XPath
        + CSS Selectore
        + Playwright Selector

**1. XPath**
    
    Có 2 loại XPath
    - Absolute (Tuyệt đối): đi dọc theo cây DOM và bắt đầu bởi / 
    - Relative (Tương đối): tìm dựa vào đặc tính và bắt đầu bới //, and và or

    *Note: Nên dùng XPath Relative.

Một số cú pháp của xpath:
- //tag[@attribute="value"]
- //tag[text()="value"]
- /parent/children
- //tag[contains(attribute, "value")]
- //tag[index] - index là thứ tự element
- //tag[@attribute = "value" and @attribute2 = "value" and @attribute3 = "value"]
- //tag[@attribute = "value" or @attribute2 = "value" or @attribute3 = "value"]
- //tag[@attribute = "value" and @attribute2 = "value" or @attribute3 = "value"]

**2. Playwright Basic Syntax**

    + test : đơn vị cơ bản khai báo một test

    import { test } from '@playwright/test';

    test('<tên test>', async ({ page }) => {
    // Code của test
    });

    + step: đơn vị nhỏ hơn test, để khai báo từng step của test case

    await test.step('Tên step', async () => {
        // Code here
    });

    test('<tên test>', async ({ page }) => {
        await test.step('Tên step', async () => {
            // Code here
        });
    });

`Basic Actions`

- Navigate: await page.goto("`<url>`");
- Click: 
    
    Single click: **await page.locator("//button").click();**
    
    Double click: **await page.locator("//button").dblclick()**;
    
    Click chuột phải: **page.locator("//button").click({button: 'right'})**
    
    Click chuột kèm bấm phím khác: **page.locator("").click({modifiers: ['Shift']})**

- Input:

    Fill: **page.locator("//input").fill('Playwright Viet Nam');**

    pressSequentially: Giống việc bạn gõ từng chữ cái vào ô input
    **page.locator("//input").pressSequentially('Playwright Viet Nam', {delay: 100});**

- Radio/Checkbox

    Lấy giá trị hiện tại đang là check hay không: **const isChecked = page.locator("//input").isChecked();** -> Return boolean(true/false)
    
    Check: **page.locator("//input").check();**
    
    UnCheck: **page.locator("//input").setChecked(false);**
