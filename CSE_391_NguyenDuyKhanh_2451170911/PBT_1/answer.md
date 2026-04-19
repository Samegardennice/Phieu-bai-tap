**Câu A1 — HTTP & Browser
Trả lời:

1. Đầu tiên máy tính phải tiến hành "DNS look up" tức là phân giải địa chỉ dns tên miền của shopee.vn thông qua trình duyệt đang sử dụng , ví dụ của em hay dùng là Cốc Cốc thì Cốc Cốc phải tự tìm từu bộ nhớ cache xem trong vài giờ trước đã từng vào Shopee.vn chưa nếu rồi thì có thể lấy ra luôn ip chính xác còn không tìm được -> gửi request hỏi router wifi phòng trọ xem trong cache còn chứa cái địa chỉ ip của shopee không, nếu cũng không -> gửi request hỏi DNS sever nhà mạng vnpt ( tới đây chắc chắn có vì dns sever của vnpt có hầu hết ip web phổ biến ở việt nam )

2. Sau khi có được địa chỉ ip chính xác của shopee.vn, trình duyệt từ máy tính sẽ gửi http request từ laptop của em -> router nhà trọ -> đi qua nhà mạng vnpt -> đến máy chủ của shopee 

3. Sever của shopee sẽ phải xử lí request đó, xử lí xong thì tạo 1 http response ,bên trong có chứa nội dung html,js,json,css

4. Response đó chạy ngược lại: cáp quang → VNPT → router trọ → máy tính

5. Cốc cốc nhận file HTML, CSS, JS → render ra giao diện của shopee bản pc gồm các page,danh sách sản phẩm,...


====>Tài liệu tham khảo: 01_introduction_html_universe.md (Cuộc Hành Trình 0.3 Giây Xuyên Đại Dương)

**Câu A2  — Semantic HTML

*Code gốc đề bài:

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


-> Web này bị google đánh giá SEO thấp vì khi đọc google không hiểu được cấu trúc web do dùng toàn thẻ div , google không hiểu được ngữ cảnh rõ ràng của trang web khiến google có thể hiểu sai nội dung web khiến SEO giảm đi

-> các lỗi sai semantic trong code đề bài:
+) <div class="header"> phải dùng <header>
+) <div class="footer"> phải dùng <footer>
+) <div class="menu"> phải dùng  <nav>
+) <div class="image"> phải dùng <figure>
+) <div class="main"> nên dùng <main>

*Sửa lại code:

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

====>Tài liệu tham khảo: 04_visible_part_html.md (🏗️ Semantic HTML5 — "Thẻ có ý nghĩa")


**Câu A3 — Block vs Inline

*Code gốc của đề bài:
<div>Hộp 1</div>
<span>Text A</span>
<span>Text B</span>
<div>Hộp 2</div>
<span>Text C</span>
<strong>Text D</strong>
<div>Hộp 3</div>

-> Kết quả hiển thị của code theo textart sẽ là:
[ Hộp 1
  Text A Text B
  Hộp 2
  Text C 𝐓𝐞𝐱𝐭 𝐃
  Hộp 3 ]

-> giải thích: 
+) Thẻ <div> là một thẻ block vì vậy nó sẽ luôn xuống 1 dòng mới khi được viết, đồng thời nó cũng sẽ luôn chiếm nguyên 1 dòng vì vậy nội dung text như "Hộp 1","Hộp 2","Hộp 3" sẽ được viết trên 1 dòng và chiếm luôn cả 1 dòng đó do chúng được bọc trong thẻ <div>
+) Thẻ <span> là thẻ inline nên nội dung bên trong không xuống dòng khi viết và nằm trên cùng 1 dòng luôn nếu đó là 2 thẻ inline viết cạnh nhau nên "Text A" , "Text B" hay "Text C" sẽ nằm trên cùng 1 dòng với nhau vì được bọc trong <span>
+) Thẻ <strong> cũng giống span nhưng chỉ khác là sẽ bôi đậm nội dung bên trong thế nên "Text D" sẽ được in đậm vì nằm trong thẻ <strong>

====>Tài liệu tham khảo: 04_visible_part_html.md (📊 Block vs Inline — Hai loại element cơ bản)

**Câu Câu A4  — Table

- Sự khác nhau giữa <thead>, <tbody>, <tfoot>
+) <thead>  dùng để chứa tiêu đề của bảng gồm tiêu đề của các cột trong bảng  
+) <tbody> là thân bảng,nơi chứa nội dung chính của bảng bao gồm các dòng dữ liệu
+) <tfoot> có vai trò là footer,chức năng là tổng kết lại bảng,được viết ở dưới cùng

- Không nên dùng table để tạo layout cho trang web vì:

1. <table> là thẻ được thiết kế để hiển thị dữ liệu dạng bảng, không phải để dựng layout, nếu dùng table dựng layout thì có thể làm code trở nên không đúng ý nghĩa khi được đọc bởi trình duyệt,sai semantic từ đó sẽ bị đánh giá SEO thấp đi

2. Làm layout bằng table sẽ khá rối và khó quản lí, mở rộng bởi nếu làm layout bằng table ta phải lồng nhiều thẻ <table> và các thẻ con của nó rất lằng nhằng, gây khó khăn khi muốn chỉnh sửa lớn trên giao diện. Dùng Grid/Flexbox sẽ hợp lí hơn

3. Khó tương thích trên các thiết bị khác ngoài máy tính như điện thoại,máy tính bảng vv... do table khó co giãn theo kích thước màn hình trên các thiết bị này 

====> Tài liệu tham khảo: 
+) 05_tables_hyperlinks.md ("Bảng Giá Sản Phẩm Đầu Tiên" — Minh làm trang e-commerce")
+) 05_tables_hyperlinks.md (📊 Table — Bảng dữ liệu)





Bài B3 — Debug HTML
- Code gốc của đề bài:
<!DOCTYPE>  // Sai phải DOCTYPE HTML 
<html>
<head>
    <title>Trang web
    <meta charset="utf8">      // Thiếu </title>
</head>
<body>
    <h1>Welcome to ShopTLU<h1> // Sai phải </h1>
    
    <header>
        <nav>
            <a href="home">Trang chủ<a>  // sai phải </a>
            <a href="products">Sản phẩm</a>
        </nav>
    </header>
    
    <main>
        <section>
            <h3>Sản phẩm hot</h3>
            <img src=iphone.jpg> // Sai thiếu ""
            <p>iPhone 16 Pro</p>
            <p>Giá: <b>25.990.000đ</p></b>   // Sai tự nhiên lòi ra </b>
        </section>
        
        <section>
            <h3>Thông tin</h3>
            <table>
                <tr> // Sai semantic 
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
    
    <main>                         // Sai thừa 1 main nên dùng aside
        <p>Sidebar content</p>
    </main>
    
    <footer>
        <p>Copyright 2026     // Sai thiếu </p>
    </footer>
</body>
  // Sai thiếu </html>
*Số dòng em sẽ đánh số theo như trong file answer.md này luôn
- Các lỗi sai bao gồm:
Lỗi 1: Dòng 118 - Sai khuôn mẫu html - <!DOCTYPE> phải sửa thành <!DOCTYPE html>
Lỗi 2: Dòng 121 - Thiếu đóng thẻ - Viết thêm thẻ đóng </title>
Lỗi 3: Dòng 125 - Đóng thẻ sai - sửa <h1> thành </h1>
Lỗi 4: Dòng 129 - Đóng thẻ sai - sửa <a> thành </a>
Lỗi 5: Dòng 137 - Sai syntax sau src - Sau src= phải có dấu "" thành "iphone.jpg" 
Lỗi 6: Dòng 139 - Viết sai thứ tự khi đóng thẻ - <p>Giá: <b>25.990.000đ</p></b> phải cho </b> vào trong thành <p>Giá: <b>25.990.000đ</b></p>
Lỗi 7: Dòng 157-159 - Sai semantic,một body chỉ cần 1 main chứ không cần nhiều main - Thay vì dùng main thì sẽ dùng thẻ aside cho các thành phần không phải thành phần chính
Lỗi 8: Dòng 162 - Thiếu đóng thẻ - thêm đóng thẻ </p>
Lỗi 9: Dòng 165 - Thiếu đóng thẻ - thêm đóng thẻ </html>
lỗi 10: Dòng 145-148 - Sai semantic về loại thẻ cần dùng - <tr> phải đổi thành <thead> và <td> phải đổi thành <th>




Bài B4  — Phân tích trang web thật
1.
- Em đã chọn trang web shopee.vn và nhận thấy họ có dùng các thẻ semantic sau:
+) Thẻ <header> ở đầu body chứa toàn bộ logo,phần layout màu cam trên cùng, và thậm chí là trong <header> còn chứa cả thanh tìm kiếm sản phẩm của trang web nữa
======> Bai 4_TimHieuElement_03.png

+) Thẻ <nav> đặt bên trong <header> và được viết ngay bên dưới header có chứa các đường link dẫn đến các danh mục khác của shopee như trang "kênh người bán" hay "trở thành người bán hàng" và sẽ điều hướng tới các trang khác ngoài shopee.vn
======> Bai 4_TimHieuElement_02.png

+) Thẻ <section> viết ngay bên dưới phần header được bao trong 1 thẻ <div> có vẻ như nó là một phần gì đó giúp chia bố cục chi tiết hơn cho thẻ <div> và còn liên quan tới hình ảnh vì em thấy có các dòng như placeholdimage hay img,icon,background trong đó
======> Bai 4_TimHieuElement_01.png

- Còn về những thẻ mà họ dùng không đúng semantic, em chỉ nhận ra một thẻ đó là họ không dùng thẻ <main> bên dưới thẻ <body> thay vào đó họ dùng cấu trúc các <div> và <section> rất lạ

2. Trên trang shopee.vn người ta còn không dùng cả table, có thể với các web lớn table có vẻ lỗi thời và không hợp lí nữa vì tìm trong element không thấy có <table>

3.
Vì trong form không hề có action="_" hay method=" _ " nên action có thể gửi đến url hiện tại, còn method thì trình duyệt sẽ coi mặc định là Get
Còn trong code em thấy có mỗi <input __________ value=""> mà không có định dạng cụ thể nên trình duyệt sẽ mặc định coi đó là text
======> Bai 4_TimHieuElement_04.png