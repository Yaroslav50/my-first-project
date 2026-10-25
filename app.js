"use strict";

/*
 * Функція перевіряє, чи міститься ім'я в повному імені.
 * Регістр введених рядків наперед не відомий, тому порівнювати
 * потрібно без огляду на регістр.
 * 1. Оголоси функцію containsName з двома параметрами:
 *    fullName (повне ім'я) і firstName (ім'я для пошуку).
 * 2. Зведи обидва рядки до нижнього регістру через toLowerCase().
 * 3. Поверни результат перевірки: чи містить fullName підрядок firstName
 *    (використай includes()).
 * Виклики функції вже додані нижче — після написання перевір результат у консолі.
 */

// Твій код тут
function containsName(fullName, firstName) {
  const fullNameLowered = fullName.toLowerCase();
  const firstNameLowered = firstName.toLowerCase();
  return fullNameLowered.includes(firstNameLowered);
}

console.log(containsName("Jason Neis", "Jason")); // true
console.log(containsName("Jason Neis", "jAsOn")); // true
console.log(containsName("Jason Neis", "Jacob")); // false
