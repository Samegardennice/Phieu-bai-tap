**PHẦN A — KIỂM TRA ĐỌC HIỂU**

**Câu A1 — 5 Loại Positionin**
| Position | Vẫn chiếm chỗ trong flow? | Tham chiếu vị trí | Cuộn theo trang? | Use case |
|---|---|---|---|---|
| `static` | Có| Mặc định theo  html|Có|Mặc định|
| `relative` | Có | Dùng vị trí ban đầu của nó | Có | Dịch nhẹ, làm mốc cho absolute |
| `absolute` | Không | Cha relative gần nhất | Có | Badge, dropdown, tooltip |
| `fixed` | Không | Viewport | Không | Chat button, modal overlay |
| `sticky` |Có  | Viewport(khi dính) |Lúc đầu thì có nhưng đến ngưỡng viewport thì đổi thành không  | sticky header,sidebar |

absolute sẽ tham chiếu body khi mà nó không tìm được ancestor có postion khác 
static
"nearest positioned ancestor" nghĩa là thuộc tính position khác static của ancestor có quan hệ gần nhất với phần tử đang xét, tức là nếu coi phần tử đang xét là con thì parent nào có quan hệ gần nhất với con thì nếu con có position là absolute thì sẽ bám theo vào parent đó, nếu parent có postion static thì lại truy ngược lên cha của parent cứ thế bao h tìm đc ai đó có position khác static thì coi ng đó là "nearest positioned ancestor"


---

**Câu A2 - Flexbox vs Grid**

- Trường hợp 1 
=> có 4 items thì thành  " | a b c d | "

- Trường hợp 2
=> có 6 items mà mỗi item chiếm 50%  thì thành 

" | a b |

  | c d |

  | e f | "    

- Trường hợp 3:

|a  b  c|

- Trường hợp 4: 

|a <---> b <---> c|

với <---> là 20px, a , c mỗi cái 200px còn b chiếm ở giữa là phần còn lại của độ rộng web trừ đi 400px

- Trường hợp 5:

repeat(3,1fr); gap 10px tức là chia đều 3 cột mỗi cái cách nhau 10px

7 items thì sẽ chia làm 3 cột 3 hàng vì mỗi cột chỉ chứa đc 3 phần tử nên sẽ phải có 1 phần tử cuối bị dồn xuống thành 1 hàng mới và có cột là cột 1 

| a b c |

| d e f |

|i      |

**Câu C1 — Flexbox vs Grid: Khi nào dùng gì?**

1. Navigation bar ngang (logo + menu + buttons) cái này thì thường dùng flex vì logo,menu,button đều nằm trong 1 thanh ngang và là 1 chiều vì đều nằm trên cùng 1 hàng, thật ra cả grid cũng làm được nhưng làm bằng flex đơn giản và tiết kiệm th gian hơn

2. Trường hợp này phải dùng grid vì liên quan tới layout theo hàng,cột đã thế số ảnh còn k biết trước nên phải có layout cột grid để xếp trước 

3. Layout blog thì dùng grid để chia các section bằng cột cho đẹp, grid có cột rõ ràng và quy định được số lượng phần tử sẽ có trên hàng và số cột, còn flex thì cũng làm được bằng flex item nhưng chỉ khi k còn chỗ mới xuống dòng dễ khiến layout vỡ nếu các item k đồng đều. Còn nội dung bên trong của main content và sidebar thì dùng flex dễ căn chỉnh các phần tử bên trong 

4. Cái này thì nên dùng cả flex và grid, grid để chia cột bố cục, flex để căn chỉnh các phần tử bên trong 1 cách dễ dàng

5. Card sản phẩm này bố cục theo chiều dọc thì dùng luôn flex và cho direction là columm luôn k cần chia cột phức tạp, layout card này nên dùng flex vì không cần bố cục theo các cột rõ ràng, chỉ cần dùng flex theo chiều dọc là quá đủ

**Câu C2 - Debug Flexbox**

Lỗi 1

Card chưa đều chiều cao là chưa căn trục dọc bằng nhau, còn nút mua bị nhảy lên xuống là do cái img chiếm hết 100% chiêu ngang card rồi nên các item còn lại bị lòi ra ngoài. Bây giờ sửa thì cho card dùng flex để đưa hết về cùng 1 hàng k để bị lòi ra ngoài nữa, đồng thời cho chiều cao bằng nhau 

Sửa code:

```c
.card-container { display: flex; flex-wrap: wrap; border: 1px solid;}
.card { width: 30%; margin: 1.5%; border: 1px double;display: flex;box-sizing: border-box;
align-items: center; gap: 20px;}
.card img { width: 100%; }
.card h3 { font-size: 18px; }
.card .btn { padding: 10px; }
```

Lỗi 2

.hero chưa căn center cho trục dọc và ngang, căn lại là xong

Sửa code

```c
.hero {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
.hero-content {
    text-align: center;
}
```
Lỗi 3

Do flex:1 có shrink 1 cho phép co nên nó sẽ chiếm không gian của phần tử còn lại trong layout, muốn sửa phải cho sidebar không được phép co mà phải giữ cố định 

Sửa code

```c
.layout { display: flex; }
.sidebar { width: 250px;border: 1px solid; flex: 0 0 250px;}
.content { flex: 1; }
p{
    width: 100%;
}
```

