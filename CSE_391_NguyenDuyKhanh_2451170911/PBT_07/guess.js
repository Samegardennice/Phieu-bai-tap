
const answer = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
const maxAttempts = 7;
const guessedNumbers = [];
while (attempts < maxAttempts) {
    let input = prompt("Nhập số từ 1 đến 100:");
    if (input === null) {
        alert("Đã thoát game!");
        break;
    }
    let guess = Number(input);
    if (
        Number.isNaN(guess) ||
        guess < 1 ||
        guess > 100
    ) {
        alert("Vui lòng nhập số từ 1 đến 100!");
        continue;
    }
    if (guessedNumbers.includes(guess)) {
        alert("Đừng chọn lại 1 số thế bạn tôi ơi");
        continue;
    }
    guessedNumbers.push(guess);
    attempts++;
    if (guess === answer) {

        alert(
            `Đúng rồi giỏi lém bạn đoán đúng sau ${attempts} lần`
        );

        break;
    }
    else if (guess < answer) {

        alert("Cao hơn!");
    }
    else {

        alert("Thấp hơn!");
    }
    if (attempts === maxAttempts) {

        alert(
            `Bạn đã thua Đáp án riu là ${answer}`
        );
    }
}