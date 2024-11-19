console.log('#11. JavaScript homework example file')

/*
 * #1
 *
 * Написати функцію, яка приймає рядок як вхідний параметр і перевіряє, чи є цей рядок валідною електронною адресою за допомогою регулярного виразу.
 * Функція повертає true, якщо електронна адреса валідна, і false в іншому випадку.
 *
 */

function isValidEmail(email) {
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailPattern.test(email);
}


console.log(isValidEmail('example@example.com')); // виведе: true
console.log(isValidEmail('invalid-email'));       // виведе: false
console.log(isValidEmail('user@domain.co'));      // виведе: true
console.log(isValidEmail('user@domain'));         // виведе: false
console.log(isValidEmail('user@.com'));           // виведе: false

// Для валідації електронної адреси за допомогою регулярного виразу можна скористатися таким патерном, який перевіряє, чи містить рядок:
// Літери, цифри або спеціальні символи перед знаком "@".
// Один знак "@", після якого йде домен.
// Правильний формат домену (наприклад, "example.com").


//^[a-zA-Z0-9._%+-]+ — це перша частина, яка перевіряє, чи є хоча б один символ, який може бути літерою, цифрою або одним із дозволених спеціальних символів: ., _, %, +, -.
//@ — перевіряється наявність символу "@".
//[a-zA-Z0-9.-]+ — друга частина після знака "@", яка перевіряє, чи складається домен з літер, цифр, крапок або дефісів.
//\.[a-zA-Z]{2,}$ — ця частина перевіряє, чи є точка, за якою йде домен верхнього рівня з мінімум двох літер (наприклад, ".com", ".org").
//Таким чином, регулярний вираз перевіряє, чи має рядок правильний формат електронної адреси.


/*
 * #2
 *
 * Написати функцію, яка приймає рядок як вхідний параметр і перевіряє, чи є цей рядок валідним URL веб-сайту за допомогою регулярного виразу.
 * Функція повертає true, якщо URL валідний, і false в іншому випадку.
 *
 */

/*

*/

function isValidUrl(url) {
  const urlPattern = /^(https?:\/\/)?(www\.)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,6}(\/[a-zA-Z0-9-_\/?=&#]*)?$/;
  return urlPattern.test(url);
}

console.log(isValidUrl('https://www.example.com'));  // виведе: true
console.log(isValidUrl('http://example.com'));      // виведе: true
console.log(isValidUrl('www.example.com'));         // виведе: true
console.log(isValidUrl('example.com'));             // виведе: false
console.log(isValidUrl('invalid-url'));             // виведе: false
console.log(isValidUrl('https://example.com/test'));// виведе: true


//^(https?:\/\/)? — перевіряє наявність схеми (http:// або https://). Знак ? означає, що це поле є необов'язковим.
//  (www\.)? — перевіряє наявність префіксу "www.". Це також необов'язково.
//  ([a-zA-Z0-9-]+\.)+ — перевірка для домену. Він може містити літери, цифри, дефіси, а після кожного доменного сегмента має йти крапка.
//  [a-zA-Z]{2,6} — перевіряє наявність домену верхнього рівня (наприклад, .com, .org), який має від 2 до 6 літер.
//  (\/[a-zA-Z0-9-_\/?=&#]*)? — перевіряє наявність шляху (запитів, параметрів), який є необов'язковим. Це дозволяє обробляти URL з різними шляхами та параметрами.
//  Цей регулярний вираз дозволяє перевіряти основні форми URL, хоча він не покриває всі можливі варіанти (наприклад, нестандартні порти або складніші URL). Якщо потрібно більш точну валідацію, можна використовувати вбудовані можливості JavaScript///

function isValidUrl(url) {
  try {
    new URL(url); // Якщо URL некоректний, буде викликана помилка
    return true;
  } catch (e) {
    return false;
  }
}

console.log(isValidUrl('https://www.example.com'));  // Повинно вивести: true
console.log(isValidUrl('invalid-url'));             // Повинно вивести: false
