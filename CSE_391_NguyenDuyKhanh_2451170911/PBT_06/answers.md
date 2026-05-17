**Phần A**

**Câu A1**

| Kích thước | < 768px | 768px - 991px | ≥ 992px |
|---|---|---|---|
| Số cột |12 | 6 | 3 |
| Box layout | 1 box / hàng | 2 box / hàng | 4 box / hàng |

---

**Câu A2**

1. d-none d-md-block tức là nếu ở màn hình mobile < 768px thì ẩn đi, còn từ 768px-991px hoặc trên 992px thì sẽ hiển thị theo dạng block

2.

5 spacing utilities là:

mt-3 có nghĩa là margin-top: 1rem;

px-4 có nghĩa là padding-left: 1.5rem; padding-right: 1.5rem;

mb-auto có nghĩa là margin-bottom: auto;

mx-0 có nghĩa là margin-left: 0; margin-right: 0;

py-2 có nghĩa là padding-top: 0.5rem; padding-bottom: 0.5rem;

3.
.container là một class của Bootstrap để tạo ra một container có chiều rộng cố định và được căn giữa trên trang web. Nó giúp tạo ra một layout có cấu trúc rõ ràng và dễ dàng quản lý nội dung bên trong

.container-fluid là một class của Bootstrap để tạo ra một container có chiều rộng 100% của viewport. Nó giúp tạo ra một layout linh hoạt và thích ứng với mọi kích thước màn hình

.container-md là một class của Bootstrap để tạo ra một container có chiều rộng cố định và được căn giữa trên trang web, nhưng chỉ áp dụng cho màn hình có kích thước từ 768px trở lên. 

**Câu C1**
---

# Cách đổi màu `$primary`

## 1. Công cụ cần dùng

Để thay đổi màu `$primary`, cần chuẩn bị:

- Visual Studio Code (VS Code)
- Node.js và npm
- Bootstrap SCSS
- Terminal / Command Prompt

---

## 2. File cần chỉnh sửa

Thông thường sẽ sửa trong các file:

- `custom.scss`
- `style.scss`
- `_variables.scss`

Không nên sửa trực tiếp file Bootstrap trong:

```bash
node_modules/bootstrap/
```

vì dễ bị ghi đè khi update package.

---

## 3. Các bước thực hiện

### Bước 1: Mở project bằng VS Code

Mở thư mục dự án bằng Visual Studio Code.

---

### Bước 2: Tìm biến `$primary`

Bootstrap mặc định thường có:

```scss
$primary: #0d6efd;
```

Trong đó:

- `#0d6efd` là màu xanh mặc định.

---

### Bước 3: Đổi sang màu mới

Thay thành:

```scss
$primary: #E63946;
```

Ví dụ file `custom.scss`:

```scss
$primary: #E63946;

@import "bootstrap/scss/bootstrap";
```

---

### Bước 4: Build lại project

Mở terminal và chạy:

```bash
npm run dev
```

hoặc:

```bash
npm run build
```

để compile lại SCSS thành CSS.

---

## 4. Kết quả sau khi đổi

Sau khi đổi `$primary`:

- `btn-primary`
- `bg-primary`
- `text-primary`
- `border-primary`

sẽ đổi từ màu xanh sang màu đỏ `#E63946`.

Ví dụ:

```html
<button class="btn btn-primary">
    Button
</button>
```

Ban đầu nút có màu xanh.

Sau khi chỉnh:

```scss
$primary: #E63946;
```

nút sẽ chuyển sang màu đỏ.

---

# Kết luận

Để đổi màu `$primary` từ xanh mặc định sang `#E63946`, cần:

1. Dùng VS Code để chỉnh sửa source code.
2. Sửa biến `$primary` trong file SCSS.
3. Build lại project bằng npm.

Sau khi hoàn thành, toàn bộ thành phần sử dụng màu primary của Bootstrap sẽ đổi sang màu mới.

---

**Câu C2 - So sánh CSS thuần và Bootstrap**


# 1. Làm CSS thuần

## Navbar responsive bằng CSS thuần

```html
<nav class="navbar">
    <div class="logo">LOGO</div>

    <div class="menu">
        <a href="">Home</a>
        <a href="">Products</a>
        <a href="">Contact</a>
    </div>
</nav>
```

```css
.navbar{
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:20px;
    background:black;
}

.logo{
    color:white;
    font-size:24px;
}

.menu{
    display:flex;
    gap:20px;
}

.menu a{
    color:white;
    text-decoration:none;
}

@media(max-width:768px){

    .navbar{
        flex-direction:column;
        gap:15px;
    }

    .menu{
        flex-direction:column;
        align-items:center;
    }

}
```



## Product card bằng CSS thuần

```html
<div class="card">
    <img src="product.jpg">

    <h2>Product</h2>

    <p>Price: 20$</p>

    <button>Buy Now</button>
</div>
```

```css
.card{
    width:250px;
    border:1px solid #ccc;
    border-radius:10px;
    padding:20px;
    text-align:center;
}

.card img{
    width:100%;
    border-radius:10px;
}

.card button{
    padding:10px 20px;
    border:none;
    background:#E63946;
    color:white;
    border-radius:5px;
}
```



# 2. Làm bằng Bootstrap

## Navbar Bootstrap

```html
<nav class="navbar navbar-expand-lg bg-dark">

    <div class="container">

        <a class="navbar-brand text-white">
            LOGO
        </a>

        <div class="navbar-nav">
            <a class="nav-link text-white">Home</a>
            <a class="nav-link text-white">Products</a>
            <a class="nav-link text-white">Contact</a>
        </div>

    </div>

</nav>
```



## Product card Bootstrap

```html
<div class="card" style="width:18rem;">

    <img src="product.jpg" class="card-img-top">

    <div class="card-body">

        <h5 class="card-title">
            Product
        </h5>

        <p class="card-text">
            Price: 20$
        </p>

        <a href="" class="btn btn-danger">
            Buy Now
        </a>

    </div>

</div>
```



# 3. So sánh CSS thuần và Bootstrap

| Tiêu chí | CSS thuần | Bootstrap |
|---|---|---|
| Số dòng CSS cần viết | Nhiều | Ít |
| Thời gian phát triển | Chậm hơn | Nhanh hơn xíu |
| Responsive | tự đi viết media query | Có sẵn |
| Khả năng tùy biến | Rất cao |  giới hạn theo framework |
| Dễ học | Cần hiểu CSS kỹ | Dễ dùng cho newbie |
| Tốc độ prototype | Chậm | Rất nhanh |

---

# 4. Khi nào NÊN dùng Bootstrap?

Nên dùng Bootstrap khi:

- Cần làm website nhanh
- Làm admin dashboard
- Làm landing page
- Prototype UI nhanh
- Dự án nhỏ hoặc deadline gấp
- Team cần code đồng bộ giao diện

Ví dụ:

- Trang bán hàng đơn giản
- Website công ty
- Dashboard quản lý



# 5. KHÔNG NÊN dùng Bootstrap khi:

Không nên dùng Bootstrap khi:

- Muốn UI quá độc đáo
- Muốn tối ưu performance tối đa
- Dự án cần thiết kế riêng hoàn toàn
- Website animation phức tạp
- Muốn kiểm soát CSS chi tiết

Ví dụ:

- Portfolio sáng tạo
- Website game
- Website có design custom mạnh
- UI animation nâng cao


# Kết luận

CSS thuần cho khả năng tùy biến cao hơn nhưng tốn thời gian viết và responsive phải tự xử lý.

Bootstrap giúp phát triển nhanh, ít viết CSS hơn và có sẵn responsive, nhưng khả năng custom bị giới hạn hơn CSS thuần.