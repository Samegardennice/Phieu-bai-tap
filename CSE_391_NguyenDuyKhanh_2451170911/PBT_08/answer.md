**Câu A1**

Function Declaration

```c
function tinhThueBaoHiem(luong){
    let thue = 0;
    if(luong > 11000000){
       thue = luong/10;}
    return{
        thue: thue,
        thuc_nhan: luong - thue
    };
}

console.log(tinhThueBaoHiem(15000000));
```
Function Expression

```c
const tinhThueBaoHiem = function(luong){
    let thue = 0;
    if(luong>11000000){
        thue = luong * 0.1;
    }
    return{
        thue: thue,
        thuc_nhan: luong - thue
    };
}

console.log(tinhThueBaoHiem(15000000));
```
Arrow Function

```c
const tinhThueBaoHiem = (luong) => {
    let thue = 0;
    if(luong>11000000){
        thue = luong*0.1;
    }
    return{
        thue: thue,
        thuc_nhan: luong - thue
    }
}
console.log(tinhThueBaoHiem(15000000));
```
Function Declaration có khác hoisting với Function Expression và Arrow Function, còn 2 cái này thì lại y như nhau

Function Declaration có hoisting là ưu tiên đưa hàm lên trước tức là dù có gọi hàm trước, viết hàm sau thì vẫn chạy vì js sẽ đưa hàm lên trước để đọc, ví dụ:

```c
tinhThueBaoHiem(luong);
function tinhThueBaoHiem(luong){
    let thue = 0;
    if(luong > 11000000){
       thue = luong/10;}
    return{
        thue: thue,
        thuc_nhan: luong - thue
    };
}
```

Function Expression và Arrow Function thì như nhau đó là không hoisting function tức là nó chỉ hoisting biến mà thôi, nếu gọi hàm trước khi định nghĩa hàm và gán vào biến thì nó không chạy

```c
tinhThueBaoHiem(luong);
const tinhThueBaoHiem = function(luong){
    let thue = 0;
    if(luong>11000000){
        thue = luong * 0.1;
    }
    return{
        thue: thue,
        thuc_nhan: luong - thue
    };
}
```
cái này sẽ không chạy vì hàm js sẽ hiểu là ưu tiên khai báo const tinhThueBaoHiem trước nhưng nó không hoisting function nên nó sẽ gọi luôn cái dưới là tinhThueBaoHiem(luong); mà hàm này lại chưa định nghĩa tại thời điểm này nên là lỗi luôn


