# Câu A1 - 3 Cách nhúng CSS

## Inline CSS
**Ưu điểm:**
- Viết trực tiếp trong thẻ HTML
- Dùng nhanh cho 1 phần tử

**Nhược điểm:**
- Lặp code nhiều
- Khó bảo trì
- Không tách biệt HTML và CSS

**Ví dụ:**
```html
<h1 style="color:red; text-align:center;">
    Xin chào
</h1>
```

**Khi dùng:**
- Test nhanh
- Demo nhỏ

---

## Internal CSS
**Ưu điểm:**
- Quản lý trong 1 file HTML
- Dễ dùng cho trang đơn

**Nhược điểm:**
- Chỉ dùng cho 1 trang
- File HTML dễ phình to

**Ví dụ:**
```html
<style>
h1 {
    color: blue;
    font-size: 36px;
}
</style>
```

**Khi dùng:**
- Website nhỏ
- Bài tập / demo

---

## External CSS
**Ưu điểm:**
- Tái sử dụng nhiều trang
- Code sạch, dễ bảo trì

**Nhược điểm:**
- Cần thêm file CSS
- Sai đường dẫn sẽ lỗi CSS

**Ví dụ:**
```html
<link rel="stylesheet" href="style.css">
```

```css
h1 {
    color: purple;
}

p {
    font-size: 20px;
    color: orange;
}
```

**Khi dùng:**
- Dự án lớn
- Website nhiều trang

---

## Độ ưu tiên CSS
- Inline > Internal > External
- Nhưng quan trọng hơn là **specificity**
- Nếu cùng mức, CSS viết sau sẽ được ưu tiên

---

# Câu A2 - CSS Selectors

## HTML
```html
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
```

## Kết quả selector

1. `h1` → ShopTLU  
2. `.price` → 45.990.000đ  
3. `#app header` → ShopTLU + nav links  
4. `nav a:first-child` → Home  
5. `.product.featured h2` → MacBook Pro  
6. `article > p` → 25.990.000đ + mô tả  
7. `a[href="/"]` → Home  
8. `.top-bar.dark h1` → ShopTLU  

---

# Câu A3 - Box Model

## content-box
```css
.box-1 {
    width: 400px;
    padding: 20px;
    border: 5px solid black;
    margin: 10px;
}
```

- Width thực: 400 + 40 + 10 = **450px**
- Tổng chiếm: **470px**

---

## border-box
```css
.box-2 {
    box-sizing: border-box;
    width: 400px;
    padding: 20px;
    border: 5px solid black;
    margin: 10px;
}
```

- Width hiển thị: **400px**
- Content thực: 350px
- Tổng chiếm: **420px**

---

## Margin collapse
- 25px và 40px → lấy **40px**
- Không cộng lại vì margin collapse

---

# Câu A4 - Specificity

## Ví dụ
- p → (0,0,1)
- .price → (0,1,0)
- #main-price → (1,0,0)
- p.price → (0,1,1)

👉 Thứ tự:
#main-price > p.price > .price > p

---

## !important
- Luôn ưu tiên cao nhất
- Override mọi specificity

---

# Bài B1 - Profile CSS

## Selector dùng:
- element: body
- class: .header-web
- id + descendant: #Navigation ul
- pseudo-class: .active:hover

---

# Bài B2 - Box Model Lab

- content-box: 300px content + padding + border
- border-box: giữ width cố định

---

# Bài B3 - Specificity Battle

- Rule mạnh nhất: `p#demo.text.highlight`
- Score: (1,2,1)
- Luôn thắng mọi rule khác

---

# Câu C2 - Cascade

## Kết luận
- `#featured .title` → mạnh nhất cho h2
- `.card { color: blue }` → áp dụng cho p
- `.highlight !important` → thắng mọi rule thường
