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