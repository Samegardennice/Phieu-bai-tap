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


