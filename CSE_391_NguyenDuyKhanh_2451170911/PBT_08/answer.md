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


**Câu A2**

```c
// Đoạn 1:
function counter() {
    let count = 0;
    return {
        increment: () => ++count,
        decrement: () => --count,
        getCount: () => count
    };
}
const c = counter();
console.log(c.increment());  // ???
console.log(c.increment());  // ???
console.log(c.increment());  // ???
console.log(c.decrement());  // ???
console.log(c.getCount());   // ???

// Đoạn 2:
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log("var:", i), 100);
}
for (let j = 0; j < 3; j++) {
    setTimeout(() => console.log("let:", j), 200);
}
// Output sau 200ms: ???
```
Dự đoán output cho đoạn 1 lần lượt là: 1 2 3 2 2

Dự đoán output cho đoạn 2 lần lượt là: 

ở vòng for dùng var : 3 3 3

ở vòng for dùng let: 1 2 3

Var và let khác nhau trong vòng lặp SetTimeOut là vì: var là function scope tức là nó được dùng cho toàn bộ  hàm, vì trong vòng for var không tạo biến mới mà chỉ cập nhật var i mới và được dùng chung nên sau khi nó tăng 1 2 3 đến 3 là dừng thì vì SetTimeOut đang dùng closure tham chiếu đến biến var i trong vòng lặp và var i sau vòng lặp là 3 nên cả 3 cái SetTimeOut chờ vòng lặp chạy xong sẽ cùng tham chiếu đến cái var i này nên in ra toàn 3 

Còn đối với let thì mỗi lần lặp lại tạo 1 biến let i mới nên mỗi lần tạo như vậy SetTimeOut lại ghi nhớ 1 biến i khác nhau và vì có 3 biến i nên 3 cái SetTimeOut tham chiếu đến 3 cái let i này khác với var i là 3 SetTimeOut tham chiếu 1 cái i duy nhất


**Câu A3**

Đề bài:

```c
1. Lấy các số chẵn                    → [2, 4, 6, 8, 10]
2. Nhân mỗi số với 3                  → [3, 6, 9, ..., 30]
3. Tính tổng tất cả                   → 55
4. Tìm số đầu tiên > 7               → 8
5. Kiểm tra CÓ số > 10 không         → false
6. Kiểm tra TẤT CẢ đều > 0           → true
7. Tạo mảng "Số X là [chẵn/lẻ]"      → ["Số 1 là lẻ", "Số 2 là chẵn", ...]
8. Đảo ngược mảng (không mutate gốc)  → [10, 9, ..., 1]
```

Viết câu theo yêu cầu lần lượt từ 1-8:

```c
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

nums.filter(n=>n%2===0);
nums.map(n=>n*3);
nums.reduce((sum, n)=>sum+n,0);
nums.find(n=>n>7);
nums.some(n=>n>10);
nums.every(n=>n>0);
nums.map(n => `Số ${n} là ${n % 2 === 0 ? "chẵn" : "lẻ"}`);
nums.slice().reverse();
```