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

