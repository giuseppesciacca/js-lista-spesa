/* Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while. */
const shoppingList = [];

while (true) {
    const element = prompt('Cosa vuoi comprare? Quando hai finito digita "stop"');
    if (element == "stop") {
        break
    };
    shoppingList.push(element);
};
console.log(shoppingList);