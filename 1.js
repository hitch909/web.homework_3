const num_C = +prompt("Ведите температуру в градусах Цельсия:  ");

function fun(num_C) {
    return 9 / 5 * num_C + 32;
}

let num_F= fun(num_C);
alert(`по Цельсию = ${num_C},  по Форенгейту = ${num_F.toFixed (2)}`);
