Câu A1 - 3 Cách nhúng CSS

*Inline 
- Ưu điểm: Có thể code trực tiếp vào trong thẻ html, dùng nhanh được cho 1 phần tử riêng lẻ 
- Nhược điểm:
+) Code bị lặp lại nhiều, mỗi phần tử lại cần viết thuộc tính style cho nó lại 1 lần nữa
+) Không tách biệt được giao diện và nội dung, code rối khó đọc
VD: <h1 style="color:red; text-align:center;">
    Xin chào
</h1>

- Chỉ dùng khi muốn test nhanh một phần tử hoặc đang cần gán style đơn giản cho 1 phần tử khi đang cần gấp để demo
*Internal
-Ưu điểm: Quản lý cả trang dễ dàng, không cần tạo file css riêng
- Nhược điểm:
+) Chỉ dùng được cho 1 trang duy nhất, không có tính tái sử dụng cho nhiều trang
+) Có thể khiến file html bị phình to dài ra 
VD:
<style>
    <h1>{
        color:blue;
        font-size:36px;
    }</h1>
</style>

- Chỉ nên dùng cho web nhỏ chỉ có 1 trang duy nhất, hoặc bài tập nhỏ,bài demo

*External
-Ưu điểm:
+) Dễ bảo trì, tái sử dụng được cho nhiều trang khác nhau
+) Tách biệt html và css giúp code sạch hơn và chia nội dung rõ ràng hơn
- Nhược điểm:
+) Phải tạo thêm file css riêng
+) Lỡ ghi sai đường link thì coi như không chạy được css 

VD:
(trong file html ghi)
<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="style.css">
</head>
<html>

(trong file css ghi)
h1{
    color: purple;
}

p{
    font-size:20px;
    color: orange;
}

- Chỉ nên dùng khi web có nhiều page, cần tái sử dụng style, hoặc khi làm dự án lớn


*Nếu dùng cả 3 cách CSS đồng thời được áp dụng thì k có cái nào thắng mà chỉ có cái nào được ưu tiên sử dụng. Nếu cùng sử dụng trong 1 file html thì cách dùng CSS nằm ở vị trí dưới cùng sẽ được ưu tiên áp dụng cho trang web vì code sẽ được đọc từ trên xuống dưới và cái nằm dưới cùng sẽ được ưu tiên chạy cao nhất 

Câu A2  — CSS Selectors — Dự đoán kết quả
<div id="app">
    <header class="top-bar dark">
        <h1>ShopTLU</h1>
        <nav>
            <a href="/" class="active">Home</a>
            <a href="/products">Products</a>
            <a href="/about">About</a>
        </nav>
    </header>
    <main>
        <article class="product">
            <h2>iPhone 16</h2>
            <p class="price">25.990.000đ</p>
            <p>Mô tả sản phẩm...</p>
        </article>
        <article class="product featured">
            <h2>MacBook Pro</h2>
            <p class="price">45.990.000đ</p>
            <p>Mô tả sản phẩm...</p>
        </article>
    </main>
</div>

Các element sẽ được chọn bởi các selector tương ứng

1. h1                           → Chọn: ShopTLu
2. .price                       → Chọn: 45.990.000
3. #app header                  → Chọn: ShopTlu Home Products About
4. nav a:first-child             → Chọn: Home
5. .product.featured h2         → Chọn: Macbook pro 
6. article > p                  → Chọn: 25.990.000 Mô tả sản phẩm  45.990.000 Mô tả sản phẩm 
7. a[href="/"]                  → Chọn: Home Products About
8. .top-bar.dark h1              → Chọn: ShopTLU

Câu A3  — Box Model — Tính toán kích thước

/* Trường hợp 1: content-box (mặc định) */
.box-1 {
    width: 400px;
    padding: 20px;
    border: 5px solid black;
    margin: 10px;
}
→ Chiều rộng hiển thị = 400 + 20.2 + 5.2 = 400 + 40 + 10 = 450px
→ Không gian chiếm trên trang = 450 + 10.2 = 470px

/* Trường hợp 2: border-box */
.box-2 {
    box-sizing: border-box;
    width: 400px;
    padding: 20px;
    border: 5px solid black;
    margin: 10px;
}
→ Chiều rộng hiển thị = 400px
→ Kích thước content thực tế = 400 - 20.2 - 5.2 = 400-50 =350px
→ Không gian chiếm trên trang = 400+10.2=420px 

/* Trường hợp 3: Margin collapse */
.box-a { margin-bottom: 25px; }
.box-b { margin-top: 40px; }
→ Khoảng cách giữa box-a và box-b = 40px
→ Giải thích tại sao KHÔNG PHẢI 65px
Bởi vì chúng có thể gộp margin tức khi 2 margin 25px và 40px chạm nhau thì sẽ gộp luôn vào nhau và lấy thằng có kích thước lớn nhất
làm khoảng cách giữa 2 box thế nên sẽ lấy 40px thay vì là 65px




