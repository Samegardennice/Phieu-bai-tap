function calculate(num1, operator, num2){
    if(typeof num1!== "number" || typeof num2!=="number")
        return "num1 và num2 không phải là số";
}

switch(operator){
    case "*":
        return num1*num2;
    case "/":
        if(num2===0)
            return "Không thể chia cho 0";
        return num1/num2;
    case "+":
        return num1+num2;
    case "-":
        return num1-num2;
    case "%":
        if(num2===0)
            return "Không thể chia cho 0";
        return num1%num2;
    case "**":
        return num1**num2;
    default:
        return "operator không hợp lệ";
}