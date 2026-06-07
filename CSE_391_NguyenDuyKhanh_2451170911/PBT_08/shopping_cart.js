function createCart() {
    let items = [];
    let discount = {
        type: null,
        value: 0
    };
    return {
        addItem(product, quantity = 1) {
            const item = items.find(i => i.id === product.id);
            if (item) {
                item.quantity += quantity;
            } else {
                items.push({...product,quantity});
            }
        },
        removeItem(productId) {
            items = items.filter(item => item.id !== productId);
        },
        updateQuantity(productId, newQuantity) {
            const item = items.find(item => item.id === productId);
            if (!item) return;
            if (newQuantity <= 0) {
                this.removeItem(productId);
            } else {
                item.quantity = newQuantity;
            }
        },
        getTotal() {
            let total = items.reduce(
                (sum, item) => sum + item.price * item.quantity,0
            );
            if (discount.type === "percent") {
                total *= (1 - discount.value);
            }
            if (discount.type === "fixed") {
                total -= discount.value;
            }
            return Math.max(total, 0);
        },
        applyDiscount(code) {
            switch (code) {
                case "SALE10":
                    discount = {
                        type: "percent",
                        value: 0.1
                    };
                    break;
                case "SALE20":
                    discount = {
                        type: "percent",
                        value: 0.2
                    };
                    break;
                case "FREESHIP":
                    discount = {
                        type: "fixed",
                        value: 30000
                    };
                    break;
                default:
                    discount = {
                        type: null,
                        value: 0
                    };
            }
        },
        printCart() {

            console.log("----------------------------");
            console.log("STT | Tên SP          | SL | Giá | Thành tiền");
            console.log("-----------------------------");
            items.forEach((item, index) => {
                console.log(
                    `${index + 1} | ` +
                    `${item.name} | ` +
                    `${item.quantity} | ` +
                    `${item.price.toLocaleString("vi-VN")}đ | ` +
                    `${(item.price * item.quantity).toLocaleString("vi-VN")}đ`
                );

            });

            console.log("----------------------------------------------");
            console.log(
                "Tổng cộng:",
                this.getTotal().toLocaleString("vi-VN") + "đ"
            );
            console.log("==============================================");
        },

        getItemCount() {
            return items.reduce(
                (sum, item) => sum + item.quantity,
                0
            );
        },


        clearCart() {
            items = [];

            discount = {
                type: null,
                value: 0
            };
        }
    };
}

// ==== TEST ===

const cart = createCart();

cart.addItem(
    {
        id: 1,
        name: "iPhone 16",
        price: 25990000
    },
    1
);

cart.addItem(
    {
        id: 3,
        name: "AirPods Pro",
        price: 6990000
    },
    2
);

cart.addItem(
    {
        id: 1,
        name: "iPhone 16",
        price: 25990000
    },
    1
);

console.log("=== GIỎ HÀNG ===");
cart.printCart();
cart.applyDiscount("SALE10");
console.log("\n=== SAU GIẢM 10% ===");
cart.printCart();
console.log("\nSố SP:", cart.getItemCount());
cart.removeItem(3);
console.log("\nSau xóa:");
cart.printCart();
console.log("Số SP:", cart.getItemCount());
cart.updateQuantity(1, 5);
console.log("\nSau update:");
cart.printCart();
cart.clearCart();
console.log("\nSau clear:");
cart.printCart();