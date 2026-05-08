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

