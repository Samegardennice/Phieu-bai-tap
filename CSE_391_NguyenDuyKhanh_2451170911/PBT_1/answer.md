# PBT_1

---

# Câu A1 — HTTP & Browser

## Trả lời

### 1. DNS Lookup

Đầu tiên máy tính phải tiến hành "DNS look up", tức là phân giải địa chỉ DNS tên miền của `shopee.vn` thông qua trình duyệt đang sử dụng.

Ví dụ của em hay dùng là Cốc Cốc thì:

* Cốc Cốc sẽ tự tìm từ bộ nhớ cache xem trong vài giờ trước đã từng vào `Shopee.vn` chưa.
* Nếu rồi thì có thể lấy ra luôn IP chính xác.
* Nếu không tìm được:

  * Gửi request hỏi router WiFi phòng trọ xem trong cache còn chứa địa chỉ IP của Shopee không.
  * Nếu cũng không:

    * Gửi request hỏi DNS Server nhà mạng VNPT.

Tới đây chắc chắn có vì DNS Server của VNPT có hầu hết IP web phổ biến ở Việt Nam.

### 2. Gửi HTTP Request

Sau khi có được địa chỉ IP chính xác của `shopee.vn`, trình duyệt từ máy tính sẽ gửi HTTP Request:

```text
Laptop → Router nhà trọ → Nhà mạng VNPT → Máy chủ Shopee
```

### 3. Server xử lý Request

Server của Shopee sẽ xử lí request đó, xử lí xong thì tạo một HTTP Response.

Bên trong response có chứa:

* HTML
* CSS
* JavaScript
* JSON

### 4. Response trả ngược lại

```text
Cáp quang → VNPT → Router trọ → Máy tính
```

### 5. Browser Render

Cốc Cốc nhận file HTML, CSS, JS → render ra giao diện của Shopee bản PC gồm:

* Các page
* Danh sách sản phẩm
* ...

## Tài liệu tham khảo

`01_introduction_html_universe.md`

> Cuộc Hành Trình 0.3 Giây Xuyên Đại Dương

---

# Câu A2 — Semantic HTML

## Code gốc đề bài

```html
<div class="header">
    <div class="logo">ShopTLU</div>
    <div class="menu">
        <div><a href="/">Trang chủ</a></div>
        <div><a href="/products">Sản phẩm</a></div>
    </div>
</div>

<div class="main">
    <div class="product">
        <div class="title">iPhone 16 Pro</div>
        <div class="price">25.990.000đ</div>
        <div class="image"><img src="iphone.jpg"></div>
    </div>
</div>

<div class="footer">© 2026 ShopTLU</div>
```

## Nhận xét

Web này bị Google đánh giá SEO thấp vì khi đọc Google không hiểu được cấu trúc web do dùng toàn thẻ `div`.

Google không hiểu được ngữ cảnh rõ ràng của trang web khiến có thể hiểu sai nội dung web, từ đó SEO giảm đi.

## Các lỗi semantic trong code đề bài

* `<div class="header">` phải dùng `<header>`
* `<div class="footer">` phải dùng `<footer>`
* `<div class="menu">` phải dùng `<nav>`
* `<div class="image">` phải dùng `<figure>`
* `<div class="main">` nên dùng `<main>`

## Sửa lại code

```html
<header>
    <div class="logo">ShopTLU</div>

    <nav>
        <div><a href="/">Trang chủ</a></div>
        <div><a href="/products">Sản phẩm</a></div>
    </nav>
</header>

<main>
    <div class="product">
        <div class="title">iPhone 16 Pro</div>
        <div class="price">25.990.000đ</div>
        <figure><img src="iphone.jpg"></figure>
    </div>
</main>

<footer>© 2026 ShopTLU</footer>
```

## Tài liệu tham khảo

`04_visible_part_html.md`

> 🏗️ Semantic HTML5 — "Thẻ có ý nghĩa"

---

# Câu A3 — Block vs Inline

## Code gốc của đề bài

```html
<div>Hộp 1</div>
<span>Text A</span>
<span>Text B</span>
<div>Hộp 2</div>
<span>Text C</span>
<strong>Text D</strong>
<div>Hộp 3</div>
```

## Kết quả hiển thị theo textart

```text
Hộp 1
Text A Text B
Hộp 2
Text C TEXT D
Hộp 3
```

## Giải thích

### Thẻ `<div>`

* Là thẻ block.
* Luôn xuống dòng mới khi được viết.
* Luôn chiếm nguyên một dòng.

Vì vậy:

* "Hộp 1"
* "Hộp 2"
* "Hộp 3"

sẽ nằm trên các dòng riêng.

### Thẻ `<span>`

* Là thẻ inline.
* Không xuống dòng.
* Nằm trên cùng một dòng nếu viết cạnh nhau.

Vì vậy:

* `Text A`
* `Text B`
* `Text C`

sẽ nằm cùng dòng.

### Thẻ `<strong>`

Thẻ `<strong>`` cũng giống span nhưng sẽ bôi đậm nội dung bên trong.

Vì vậy `Text D` sẽ được in đậm.

## Tài liệu tham khảo

`04_visible_part_html.md`

> 📊 Block vs Inline — Hai loại element cơ bản

---

# Câu A4 — Table

## Sự khác nhau giữa `<thead>`, `<tbody>`, `<tfoot>`

### `<thead>`

Dùng để chứa tiêu đề của bảng gồm tiêu đề của các cột.

### `<tbody>`

Là thân bảng, nơi chứa nội dung chính của bảng bao gồm các dòng dữ liệu.

### `<tfoot>`

Có vai trò là footer, dùng để tổng kết bảng.

---

## Không nên dùng table để tạo layout cho trang web vì

### 1. Sai mục đích sử dụng

`<table>` được thiết kế để hiển thị dữ liệu dạng bảng, không phải để dựng layout.

Nếu dùng table dựng layout:

* Code không đúng ý nghĩa.
* Sai semantic.
* SEO bị giảm.

### 2. Khó quản lí và mở rộng

Làm layout bằng table thường:

* Rối.
* Phải lồng nhiều thẻ table.
* Khó chỉnh sửa.

Dùng Grid/Flexbox sẽ hợp lí hơn.

### 3. Responsive kém

Khó tương thích trên:

* Điện thoại
* Máy tính bảng
* Các màn hình nhỏ

vì table khó co giãn theo kích thước màn hình.

## Tài liệu tham khảo

* `05_tables_hyperlinks.md`

  * "Bảng Giá Sản Phẩm Đầu Tiên" — Minh làm trang e-commerce
* `05_tables_hyperlinks.md`

  * 📊 Table — Bảng dữ liệu

---

# Bài B3 — Debug HTML

## Code gốc của đề bài

```html
<!DOCTYPE>
<html>
<head>
    <title>Trang web
    <meta charset="utf8">
</head>
<body>
    <h1>Welcome to ShopTLU<h1>

    <header>
        <nav>
            <a href="home">Trang chủ<a>
            <a href="products">Sản phẩm</a>
        </nav>
    </header>

    <main>
        <section>
            <h3>Sản phẩm hot</h3>
            <img src=iphone.jpg>
            <p>iPhone 16 Pro</p>
            <p>Giá: <b>25.990.000đ</p></b>
        </section>

        <section>
            <h3>Thông tin</h3>
            <table>
                <tr>
                    <td>Tên</td>
                    <td>Giá</td>
                </tr>
                <tr>
                    <td>iPhone</td>
                    <td>25tr</td>
                </tr>
            </table>
        </section>
    </main>

    <main>
        <p>Sidebar content</p>
    </main>

    <footer>
        <p>Copyright 2026
    </footer>
</body>
```

## Các lỗi sai bao gồm

1. `<!DOCTYPE>` phải sửa thành `<!DOCTYPE html>`
2. Thiếu đóng thẻ `</title>`
3. Sai đóng thẻ `</h1>`
4. Sai đóng thẻ `</a>`
5. `src=iphone.jpg` thiếu dấu `""`
6. Sai thứ tự đóng thẻ:

```html
<p>Giá: <b>25.990.000đ</p></b>
```

phải sửa thành:

```html
<p>Giá: <b>25.990.000đ</b></p>
```

7. Một body không nên có nhiều `main`

   * Nên thay `main` thứ hai bằng `aside`

8. Thiếu đóng thẻ `</p>`

9. Thiếu đóng thẻ `</html>`

10. Sai semantic:

    * `<tr>` nên dùng kết hợp `<thead>`
    * `<td>` tiêu đề nên đổi thành `<th>`

11. Sai đường dẫn tương đối thay vì anchor link

---

# Bài B4 — Phân tích trang web thật

## 1. Semantic HTML trên Shopee

Em đã chọn trang web `shopee.vn` và nhận thấy họ có dùng các thẻ semantic sau:

### `<header>`

Đặt ở đầu body chứa:

* Logo
* Layout màu cam phía trên
* Thanh tìm kiếm

```text
Bai 4_TimHieuElement_03.png
```

### `<nav>`

Đặt bên trong `<header>`.

Chứa các link:

* Kênh người bán
* Trở thành người bán hàng
* ...

```text
Bai 4_TimHieuElement_02.png
```

### `<section>`

Viết bên dưới phần header.

Có vẻ dùng để chia bố cục chi tiết hơn và liên quan tới hình ảnh.

```text
Bai 4_TimHieuElement_01.png
```

## Nhận xét thêm

Shopee không dùng `<main>` rõ ràng mà dùng nhiều `<div>` và `<section>`.

---

## 2. Shopee không dùng table

Trên Shopee hầu như không thấy dùng `<table>`.

Có thể với các web lớn thì table đã lỗi thời và không phù hợp để dựng giao diện.

---

## 3. Phân tích form

Vì trong form không có:

* `action="_"`
* `method="_"`

nên:

* Action có thể gửi tới URL hiện tại.
* Method mặc định sẽ là `GET`.

Ngoài ra:

```html
<input __________ value="">
```

không có type cụ thể nên browser mặc định sẽ coi là `text`.

```text
Bai 4_TimHieuElement_04.png
```

---

# PBT_2

# Câu A1 — Input Types

1. `type="email"`

   * Ô nhập text
   * Tự kiểm tra có `@`
   * Dùng cho form đăng ký

2. `type="password"`

   * Ô nhập text nhưng bị ẩn
   * Dùng cho form mật khẩu

3. `type="text"`

   * Ô nhập kí tự bình thường
   * Dùng nhập tên, địa chỉ

4. `type="number"`

   * Ô nhập số
   * Có nút tăng giảm
   * Có thể dùng `min`, `max`

5. `type="tel"`

   * Ô nhập số điện thoại
   * Mobile hiện bàn phím số

6. `type="date"`

   * Hiện bộ chọn ngày
   * Dùng nhập ngày sinh

7. `type="radio"`

   * Chọn một trong nhiều lựa chọn

8. `type="checkbox"`

   * Tick chọn nhiều lựa chọn

9. `type="file"`

   * Upload file
   * Có thể dùng `accept`

10. `type="search"`

    * Ô tìm kiếm
    * Một số browser có nút xoá nhanh

---

# Câu A2 — Validation Attributes

```html
<!-- Trường hợp 1 -->
<input type="text" required value="">

<!-- Trường hợp 2 -->
<input type="email" value="abc">

<!-- Trường hợp 3 -->
<input type="number" min="1" max="10" value="15">

<!-- Trường hợp 4 -->
<input type="text" pattern="[0-9]{10}" value="abc123">

<!-- Trường hợp 5 -->
<input type="password" minlength="8" value="123">
```

## Giải thích

### Trường hợp 1

Browser sẽ bắt nhập vì có `required`.

### Trường hợp 2

Browser báo sai định dạng email.

### Trường hợp 3

Browser báo vượt quá `max="10"`.

### Trường hợp 4

Browser báo sai pattern.

### Trường hợp 5

Browser báo chưa đủ độ dài tối thiểu.

---

# Câu C1 — Debug Form

## Code đề bài

```html
<form>
    Tên: <input type="text">

    <input type="email" placeholder="Email của bạn">

    <input type="password" placeholder="Mật khẩu">
    <input type="password" placeholder="Nhập lại mật khẩu">

    Phone: <input type="text" value="0901234567">

    <select>
        <option>Hà Nội</option>
        <option>TP.HCM</option>
    </select>

    <label>
        Tôi đồng ý điều khoản
    </label>

    <input type="submit" value="Gửi">
</form>
```

## Các lỗi

### Lỗi 1

Thiếu:

```html
<label for="name"></label>
```

### Lỗi 2

Thiếu label cho email.

### Lỗi 3

Thiếu label cho password.

### Lỗi 4

Thiếu label cho confirm password.

### Lỗi 5

Mật khẩu và nhập lại mật khẩu không check chéo.

Cần dùng JavaScript.

### Lỗi 6

Thiếu label cho phone.

### Lỗi 7

Thiếu checkbox đồng ý điều khoản.

Nên sửa thành:

```html
<input type="checkbox" id="agree" name="agree" required>
<label for="agree">Tôi đồng ý điều khoản</label>
```

### Lỗi 8

Không nên dùng:

```html
<input type="submit">
```

Nên dùng:

```html
<button type="submit">Gửi</button>
```
