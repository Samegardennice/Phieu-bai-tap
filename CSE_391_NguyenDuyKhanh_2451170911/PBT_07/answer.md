**Câu A1**

Đoạn 1 output có thể là error hoặc lỗi undefined vì console log ra x mà x lại là biến chưa được khai báo trước khi console log

Đoạn 2 có thể bị lỗi không in ra được vì console log ra y trong khi y lại chưa được khai báo trước đó

Đoạn 3 output sẽ ra là 15 vì const không cho phép sửa đổi giá trị 

Đoạn 4 sẽ in ra mảng [1,2,3,4] vì có thêm 4 được push vào

Đoạn 5 output sẽ là: trong block: 2 ; ngoài block: 1


**Câu A2**

console.log(typeof null); sẽ trả về output in ra null   

console.log(typeof undefined); sẽ có output in ra undefined

console.log(typeof NaN);  sẽ in ra number vì NaN là 1 giá trị đặc biệt của number

console.log("5" + 3); sẽ in ra "53" 

console.log("5" - 3); sẽ in ra 2

console.log("5" * "3"); sẽ in ra 15 vì * ép js phải coi biểu thức của 2 number

console.log(true + true);  in ra 2 vi js coi phép cộng true với true là 2 do true được js coi là 1

console.log([] + []); in ra "" vì js coi chuỗi rỗng là ""

console.log([] + {}); in ra "[object Object ]"               
console.log({} + []); in ra "[object Object]

=> "5" + 3 sẽ khác "5" - 3 vì khi đã có 1 chuỗi mà thêm sau nó là dấu cộng js sẽ hiểu là nối chuỗi và nối luôn phần cộng vào chuỗi cũ còn dấu - không nối chuỗi được nên js sẽ hiểu đây là phép tính số và chuyển "5" thành 5 để có thể thực hiện phép trừ cho 3 

**Câu A3**

console.log(5 == "5");   in ra true vì == cho ép kiểu bên trái có 5 rồi thì "5" sẽ bị ép thành 5 để so sánh        

console.log(5 === "5");   in ra false vì === bắt phải giống cả kiểu mới cho so sánh là đúng       

console.log(null == undefined); in ra true

console.log(null === undefined); in ra false     

console.log(NaN == NaN);    in ra false vì js quy định NaN không bằng cái gì kể cả chính nó

console.log(0 == false);       in ra true vì false bị ép kiểu thành 0

console.log(0 === false);      in ra false

console.log("" == false);      in ra true vì ép kiểu liên hoàn false->0->""

Từ giờ trở đi tốt nhất cứ dùng === vì rõ ràng, không bị nhầm lẫn,dễ bảo trì code, không cần nhớ các quy tắc lằng nhằng của js 

**Câu A4**

if ("0") console.log("A");    có in ra A

if ("") console.log("B");     không in gì vì "" chuỗi rỗng là falsy

if ([]) console.log("C");     có in vì array là 1 object 

if ({}) console.log("D");     có in vì Object  là truthy

if (null) console.log("E");    không in vì là falsy

if (0) console.log("F");        không in vì 0 là falsy

if (-1) console.log("G");       có in ra G 

if (" ") console.log("H");      có in ra H vì chuỗi có chứa space không tính là chuỗi rỗng      

**Câu A5**

Cách 1:

var greeting = "Xin chào " + name + "! Bạn " + age + " tuổi.";

viết lại: var greeting = `Xin chào ${name}! Bạn ${age} tuổi.`;

Cách 2:

var url = "https://api.example.com/users/" + userId + "/orders?page=" + page;

viết lại:  var url = `https://api.example.com/users/${userId}/orders?page=${page}`;

 Cách 3:

```c
var html = "<div class=\"card\">" +
    "<h2>" + title + "</h2>" +
    "<p>" + description + "</p>" +
    "<span>Giá: " + price + "đ</span>" +
    "</div>";
```
Viết lại: 
```c
var html = `<div class="card">
<h2>${title}</h2>
<p>${description}</p>
<span>Giá: ${price}đ</span>
</div>`;
```