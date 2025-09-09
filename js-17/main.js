// 1
const num = 13;

if (num % 2 == 0) {
  console.log(`Число ${num} является четным`);
} else {
  console.log(`Число ${num} является НЕчетным`);
}

// 2
const age = 0;

let discount =
  age < 18 && age > 0
    ? "Скидка 10%"
    : age >= 18 && age <= 65
    ? "Скидка 20%"
    : age > 65
    ? "Скидка 30%"
    : "Возраст не определен";

console.log(discount);

// 2.1
// const age = 0;
// let discount;

// switch (true) {
//   case age > 0 && age < 18:
//     discount = "Скидка 10%";
//     break;

//   case age >= 18 && age <= 65:
//     discount = "Скидка 20%";
//     break;

//   case age > 65:
//     discount = "Скидка 30%";
//     break;

//   default:
//     discount = "Возраст не определен";
// }

// console.log(discount);

// 3
// const username = prompt("Кто вы?", "user")
// const password = prompt("Ведите пароль", 111111)

// if ((username === "user" || "admin") && password === 123456) {
//   console.log(`Доступ разрешен`)
// } else {
//   console.log(`Доступ запрещен`)
// }

// 4
const weight = prompt("Введите вес посылки в кг:");
const deliveryType = prompt(
  "Введите тип доставки (Стандарт, Экспресс, Премиум):"
);

if (weight <= 0 || isNaN(weight)) {
  alert("Некорректный вес посылки");
} else if (
  deliveryType !== "Стандарт" &&
  deliveryType !== "Экспресс" &&
  deliveryType !== "Премиум"
) {
  alert("Неверный тип доставки");
} else {
  let baseCost;
  if (weight < 1) {
    baseCost = 5;
  } else if (weight <= 5) {
    baseCost = 10;
  } else {
    baseCost = 15;
  }

  let coefficient;
  switch (deliveryType) {
    case "Стандарт":
      coefficient = 1;
      break;
    case "Экспресс":
      coefficient = 1.5;
      break;
    case "Премиум":
      coefficient = 2;
      break;
  }

  const totalCost = baseCost * coefficient;

  alert(`Итоговая стоимость доставки: ${totalCost}$`);
}
