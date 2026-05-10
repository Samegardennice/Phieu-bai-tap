**Câu A1 - Viewport & Mobile-First**

1. <meta name="viewport" content="width=device-width, initial-scale=1.0">

- name="viewport" tức là vùng hiển thị của màn hình

- width=device-width tức là độ rộng web bằng độ rộng màn hình của thiết bị hiển thị 

- initial-sacle=1.0 tức là mức zoom ban đầu sẽ là 100%

2. iPhone sẽ coi trang web là web desktop và thu nhỏ xíu lại. Luôn đặt trong <head>

3. Mobile-First tức là style cho mobile trước rồi mở rộng lên thành desktop sau, còn Desktop-First thì ngược lại 

Ví dụ Mobile-First

```c
.container {
    display: block;
    padding: 10px;
    background: lightblue;
}


@media (min-width: 768px) {
    .container {
        display: flex;
        padding: 30px;
        background: lightgreen;
    }
}
```

Ví dụ Desktop-First

```c
.container {
    display: flex;
    padding: 30px;
    background: lightgreen;
}

@media (max-width: 768px) {
    .container {
        display: block;
        padding: 10px;
        background: lightblue;
    }
}
```

Mobile-First được khuyên dùng vì điện thoại tải ít CSS hơn → nhanh hơn. Desktop thêm CSS = OK. Ngược lại = lãng phí.

**Câu A2-Breakpoints**

| Tên | Kích thước | Thiết bị |
|---|---|---|
| xs | < 576px | Điện thoại dọc |
| sm | ≥ 576px | Điện thoại ngang |
| md | ≥ 768px | Tablet |
| lg | ≥ 992px | Desktop nhỏ |
| xl | ≥ 1200px | Desktop lớn |

**Câu A3-Media Queries**

| Chiều rộng màn hình | .container width |
|---|---|
| 375px (iPhone SE) | 100% |
| 600px | 540px |
| 800px | 720px |
| 1000px | 960px |
| 1400px | 1140px |


**Câu A4 - SCSS Basics**

1.Variables ($primary-color)

Cái này gọi là biến, bằng cách khai báo biến ta có thể dùng biến đó mà không cần chỉnh lại bằng tay thủ công 

Ví dụ:

```c
// Khai báo biến
$primary: #805ad5;
$danger: #e53e3e;
$font-body: 'Inter', sans-serif;
$radius: 8px;

// Sử dụng
.btn-primary {
    background: $primary;
    border-radius: $radius;
    font-family: $font-body;
}

.header {
    background: $primary;       // Đổi $primary = đổi tất cả!
}
```

2.Nesting (viết CSS lồng nhau)

Tức là viết CSS theo cấu trúc html

Ví dụ:

```c
.navbar {
    background: #1a202c;
    padding: 16px;
    
    ul {
        list-style: none;
        display: flex;
        
        li {
            margin-right: 24px;
            
            a {
                color: white;
                text-decoration: none;
                
                &:hover {    // & = thẻ cha (a)
                    color: $primary;
                }
            }
        }
    }
}
```
3.Mixins (@mixin, @include)

Cái này là dạng hàm CSS tái sử dụng , có thể dùng lại khi cần 1 style bằng 1 cụm thuộc tính nào đó thì viết sẵn hàm chứa các thuộc tính đó,khi cần chỉ việc gọi ra đỡ phải viết lại

Ví dụ:

```c
@mixin flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
}

@mixin responsive($breakpoint) {
    @if $breakpoint == tablet {
        @media (min-width: 768px) { @content; }
    } @else if $breakpoint == desktop {
        @media (min-width: 1024px) { @content; }
    }
}

// Sử dụng
.hero { 
    @include flex-center;
    height: 100vh;
}

.grid {
    grid-template-columns: 1fr;
    
    @include responsive(tablet) {
        grid-template-columns: repeat(2, 1fr);
    }
    
    @include responsive(desktop) {
        grid-template-columns: repeat(4, 1fr);
    }
}
```

4.@extend / Inheritance

Đây là kiểu kế thừa giống trong oop, tức là nếu có 1 phần tử có style r, phần tử khác muốn style y hệt cái đầu nhưng có thêm thuộc tính khác thì nó sẽ kế thừa cái đầu thay vì phải lặp code lại từ đầu

Ví dụ:

```c
.button {
    padding: 10px;
    border-radius: 8px;
    color: white;
}
.blue-btn {
    @extend .button;
    background: blue;
}

.red-btn {
    @extend .button;
    background: red;
}
```


**B3 - SCSS Refactor**

Lệnh compile: sass scss/style.scss css/style.css


**Bài C1**

Ở trang login của shopee không thấy bất cứ thay đổi nào, cả mobile hay desktop đều như nhau 

Ở trang chủ burger và nav biến mất trên mobile, và độ dài thanh tìm kiếm cũng giảm khác với desktop hiển thị đầy đủ

**Bài C2**

Layout html trước

```c
<header>...</header>

<section class="hero"></section>

<main class="container">

    <section class="gallery">
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
    </section>

    <aside class="booking-form"></aside>

</main>

<section class="map">..</section>

<footer></footer>
```

Layout sơ sơ qua cho css:

```c
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    font-family: Arial, sans-serif;
}

header{
    padding: 20px;
    background: #ddd;

    display: flex;
    justify-content: space-between;
    align-items: center;
}

.hero{
    height: 300px;
    background: #bbb;
}

.container{
    padding: 20px;
}

.gallery{
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
}

.item{
    height: 150px;
    background: #ccc;
}

.booking-form{
    margin-top: 20px;
    min-height: 300px;
    background: #e5e5e5;
}

.map{
    height: 300px;
    background: #f2d8d8;
    margin-top: 20px;
}

footer{
    padding: 30px;
    background: #f6cece;
}

@media (min-width: 768px){

    .gallery{
        grid-template-columns: repeat(2, 1fr);
    }

}

@media (min-width: 1200px){

    .container{
        display: grid;
        grid-template-columns: 2fr 1fr;
        gap: 30px;
        align-items: start;
    }

    .gallery{
        grid-template-columns: repeat(3, 1fr);
    }

    .booking-form{
        margin-top: 0;
    }

}