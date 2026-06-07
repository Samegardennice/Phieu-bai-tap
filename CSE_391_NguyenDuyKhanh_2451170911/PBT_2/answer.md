# PBT_2

## Câu A1 — Input Types

1. `type="email"` → Ô nhập text, tự kiểm tra có @ → Dùng cho form đăng ký  
2. `type="password"` → Ô nhập text nhưng bị ẩn → Dùng nhập mật khẩu  
3. `type="text"` → Ô nhập ký tự bình thường → Dùng nhập tên, địa chỉ,...  
4. `type="number"` → Ô nhập số, có nút tăng giảm, có thể dùng min, max → Dùng nhập số lượng, số người,...  
5. `type="tel"` → Ô nhập số điện thoại, mobile hiện bàn phím số → Dùng nhập SĐT  
6. `type="date"` → Bộ chọn ngày → Dùng nhập ngày sinh  
7. `type="radio"` → Chọn 1 trong nhiều lựa chọn → Dùng chọn giới tính, thanh toán,...  
8. `type="checkbox"` → Chọn nhiều hoặc tick đồng ý → Dùng chọn điều khoản  
9. `type="file"` → Upload file, có thể giới hạn bằng accept  
10. `type="search"` → Ô tìm kiếm, có nút xoá nhanh  

---

## Câu A2 — Validation Attributes

### Trường hợp ví dụ

```html
<!-- TH1 -->
<input type="text" required value="">

<!-- TH2 -->
<input type="email" value="abc">

<!-- TH3 -->
<input type="number" min="1" max="10" value="15">

<!-- TH4 -->
<input type="text" pattern="[0-9]{10}" value="abc123">

<!-- TH5 -->
<input type="password" minlength="8" value="123">
```

### Giải thích

- TH1: required → bắt buộc nhập  
- TH2: sai định dạng email  
- TH3: vượt max  
- TH4: sai pattern  
- TH5: mật khẩu quá ngắn  

---

## Câu A3 — Accessibility

1. `<label for>` giúp screen reader đọc đúng input  
2. `<fieldset>` + `<legend>` nhóm các input liên quan  
3. `aria-label` dùng khi không có text hiển thị  
   - Không dùng nếu đã có label  

---

## Câu A4 — Media

### 1. lazy loading

- Chỉ load ảnh khi cuộn tới  
- Tăng tốc độ website  
- Không dùng cho ảnh quan trọng (banner)

### 2. video source

- mp4, webm, ogg  
- đảm bảo tương thích trình duyệt  

### 3. alt

- mô tả ảnh khi lỗi  
- hỗ trợ SEO  

---

## Câu A5 — figure vs img

- img: ảnh đơn giản  
- figure: ảnh + caption giải thích  

---

## Câu B1 — Confirm password

HTML không kiểm tra được vì không so sánh 2 input → cần JS

---

## Câu C1 — Debug Form

### Lỗi chính:
- thiếu label
- thiếu checkbox
- dùng submit chưa chuẩn
- không validate password match

