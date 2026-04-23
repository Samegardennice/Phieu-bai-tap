PBT_2
Câu A1  — Input Types
1. type="email" -> Ô nhập text, tự kiểm tra có @ -> Dùng cho form đăng ký
2. type="password" -> Ô nhập text nhưng bị ẩn đi thành icon tròn -> Dùng cho form nhập mật khẩu
3.type="text" -> Ô nhập kí tự không có gì đặc biệt -> Dùng để nhập tên, nhập địa chỉ,...
4.type"number"-> Ô nhập số, có nút tăng giảm, chỉ cho nhập số, có thể dùng min,max -> Dùng nhập số lượng sản phẩm,số người,..
5.type="tel" -> Ô nhập số điện thoại,trên mobile sẽ hiện bàn phím số,không có validate sẵn - > Dùng nhập số điện thoại
6.type="date"-> Hiện bộ khung chọn ngày, cần nhập đúng định dạng ngày -> Dùng để nhập ngày tháng năm sinh
7.type="radio" -> Nút chọn một trong nhiều lựa chọn,không có validate riêng -> Dùng để chọn giới tính hoặc phương thức như thanh toán,giao hàng,....
8.type="checkbox" -> Ô tick chọn được cho chọn nhiều hoặc chọn đồng ý,không có validate riêng-> Dùng chọn đồng ý điều khoản hoặc lựa chọn sản phẩm,....
9.type="file" -> Nút upload file, có thể dùng accept để giới hạn loại file mà ng dùng có thể upload -> Dùng để upload,tải file lên trang web
10.type="search" -> Ô tìm kiếm cho nhập text, cũng không khác gì text,một số trình duyệt có thể hỗ trợ nút x xóa nhanh -> Dùng làm thanh tìm kiếm video,tìm kiếm nhạc,....

Câu A2  — Validation Attributes

<!-- Trường hợp 1 -->
<input type="text" required value="">   <!-- User để trống -->

<!-- Trường hợp 2 -->
<input type="email" value="abc">        <!-- User gõ "abc" -->

<!-- Trường hợp 3 -->
<input type="number" min="1" max="10" value="15"> <!-- User gõ 15 -->

<!-- Trường hợp 4 -->
<input type="text" pattern="[0-9]{10}" value="abc123"> <!-- User gõ "abc123" -->

<!-- Trường hợp 5 -->
<input type="password" minlength="8" value="123">  <!-- User gõ "123" -->

- Trong trường hợp 1 khi bấm submit trình duyệt sẽ đòi ng dùng phải nhập vào textbox vì có thuộc tính required
- Trong trường hợp 2 khi bấm submit, trình duyệt sẽ báo ghi sai định dạng và yêu cầu ng dùng nhập cho đúng vì type ở đây là email, nó sẽ yêu cầu nhập cả @ và định dạng theo kiểu email, nên chỉ nhập abc thôi là k đc 
- Trong trường hợp 3 nếu bấm submit có thể browser sẽ báo sai vì max ở đây set là 10 trong khi ng dùng lại nhập 15 là vượt quá giới hạn
- Trong trường hợp 4 sẽ bị browser báo nhập sai vì pattern quy định định dạng là chỉ cho nhập số 0-9
- Trong trường hợp 5 sẽ bị browser báo nhập chưa đúng vì độ dài tối thiểu minlength được set là 8 trong khi người dùng chỉ nhập có 3 kí tự 


Câu A3 - Accessibility
1.<label for="email"> quan trọng cho người dùng screen reader vì nó giúp screen reader nhận diện và đọc luôn email,edit text thay vì chỉ edit text như k có label for, tức người dùng sẽ biết được mình đang nhập là nhập cái gì
2. fieldset + legend được sử dụng khi để nhóm các input lại với nhau khi chúng có liên quan với nhau. Ví dụ như 1 biểu mẫu nhập thông tin cá nhân sẽ được bọc trong 1 field set trong đó có nhiều mục input nhập thông tin và legend sẽ đóng vai trò như tên của biểu mẫu đó là "thông tin cá nhân"
3. aria-label dùng khi không có text hiển thị ví dụ có 1 button không có nội dung text bên trong thẻ button thì cần có aria-label="đóng/mở/submit,.." vì screen reader cần 1 cái tên.
Tuy  nhiên không dùng aria-label khi đã có <label> là vì bị trùng thông tin vì vốn dĩ label for="abc" đã có thể cung cấp tên cho screen reader rồi 


Câu A4 - Media

1. - Thuộc tính loading="lazy" trên thẻ img là thuộc tính giúp ảnh chỉ được load khi phần view-port tức phần mà màn hình hiển thị tới người dùng lướt tới ảnh đó và nhìn thấy ảnh => Làm vậy giúp trang web cải thiện hiệu suất và load nhanh hơn, tiết kiệm băng thông nếu người dùng không cần thiết thấy hết toàn bộ ảnh có trong trang web
- Trường hợp không nên dùng là khi ảnh đó là ảnh banner,ảnh đầu trang, hay các ảnh quan trọng buộc phải thấy ngay lập tức khi người dùng truy cập vào trang web

2. - Cung cấp nhiều <source> trong thẻ <video> là vì mỗi trình duyệt có format tải video khác nhau , có nhiều source thì giúp tăng khả năng hiển thị của video trên mỗi trình duyệt 
- 3 format video phổ biến hiện nay là webm,ogg,mp4

3. - Thuộc tính alt trên thẻ <img> dùng để mô tả cho ảnh giúp tăng khả năng SEO giúp trình duyệt nhận diện ngay ảnh này đang nói về cái gì, đồng thời alt còn giúp cho người dùng biết nội dung ảnh ngay cả khi ảnh bị lỗi không load được
- alt cho 3 trường hợp trong đề bài:
+) Sản  phẩm iphone 16 hiện đại cho nhu cầu quay phim chất lượng cao
+) Ảnh minh họa cho tác phẩm trang trí
+) Doanh thu quý 1 năm 2026 của công ty 


Câu A5 — So sánh <figure> vs <img>
- Dùng cách 1 <img> khi ảnh không cần chú thích, ảnh đơn giản,ảnh không cần figcaption
VD: Ảnh logo, ảnh icon, ảnh trang trí thì chỉ cần hiển thị là xong không cần chú thích gì thêm vì chúng chỉ bổ trợ hình ảnh cho trang web 
- Dùng cách 2 <figure> khi ảnh cần có chú thích rõ ràng
Vd: Ảnh chụp cho bài báo, ảnh chụp sản phẩm như laptop,điện thoại,... những ảnh này đều cần có chú thích figcation bên dưới để người dùng hiểu ngay đây là ảnh gì, thậm chí với các ảnh bài báo khoa học mà hình ảnh khó hiểu thì càng phải có figcation để tóm tắt,giải nghĩa nhanh. Figcation còn tăng khả năng SEO giúp trình duyệt nhận diện tốt đây là ảnh về cái gì cụ thể 







Câu B1 - Form đăng ký tài khoản

HTML không thể validate confirm password là vì nó chỉ có thể check pattern của ô input chứ không thể kiểm tra được logic như ô input A phải trùng với input B nên không thể check confirm password được 


Câu C1  — Debug Form

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


Lỗi 1: Dòng 2 - Thiếu <label for ="name">...</label> -  vi phạm assessibility
Sửa lại: thêm <label for="name">Tên:</label> vào trước input type="text" và thêm id="name" vào sau input type="text"
Lỗi 2: Dòng 4 - Thiếu <label for="email">...</label> - vi phạm assessibility
Sửa lại: thêm <label for="email">Email:</label> vào trước input type="email" và thêm id="email" vào sau input type="email" 
Lỗi 3: Dòng 6 - Thiếu <label for="password">...</label> - vi phạm assessibility
Sửa lại: thêm <label for="password">Mật khẩu:</label> vào trước input type="password" và thêm id="password" vào sau input type="password"
Lỗi 4: Dòng 7 - Thiếu <label for="confirm_password">...</label> - vi phạm assessibility
Sửa lại: thêm <label for="confirm_password">Nhập lại mật khẩu:</label> vào trước input type="password" và thêm id="confirm_password" vào sau input type="password"
Lỗi 5: Dòng 6 và Dòng 7 mật khẩu và nhập lại mật khẩu không check chéo cho nhau được, cần đến JS, còn để như code đề bài thì kể cả không ghi trùng mật khẩu 
thì vẫn submit được 
Lỗi 6: Dòng 9 - Thiếu <label for="phone">...</label> - vi phạm assessibility
Sửa lại: thêm <label for="phone">Phone:</label> vào trước input type="text" và thêm id="phone" vào sau input type="text" 
Lỗi 7: Dòng 17 đang thiếu <input type="checkbox"> - vi phạm assessibility lẫn best practice vì ở mục đồng ý điều khoản luôn nên có checkbox nếu không
người dùng sẽ không có lựa chọn và ngầm hiểu bị ép buộc đồng ý điều khoản, còn đối với dev thì sẽ không để ý đến nó vì nó chỉ là 1 đoạn thẻ p dễ dẫn đến 
sai só
Sửa lại: thêm <input type="checkbox" id="agree" name="agree" required> vào trước label Tôi đồng ý điều khoản và thêm for="agree" vào trong label
Lỗi 8: Dòng 18 - Thiếu <button type="submit">...</button> - vi phạm best practice vì nên dùng button để submit thay vì cái input type="submit" để dễ dàng tùy chỉnh style hơn
Sửa lại: thay <input type="submit" value="Gửi"> thành <button type="submit">Gửi</button>