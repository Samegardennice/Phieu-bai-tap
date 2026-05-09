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