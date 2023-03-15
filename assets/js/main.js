/* Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while. */
const shoppingList = [];

const ulEl = document.createElement('ul');
const listSectEl = document.getElementById('list_sec');
const buyEl = document.getElementById('acquisto');
console.log(buyEl.value);
const btnEl = document.getElementById('submit');

listSectEl.append(ulEl);        //metto l'<ul> nella section

btnEl.addEventListener('click', function (e) {
    e.preventDefault;

    shoppingList.push(buyEl.value); //metto ciò che scrivo nella lista
    buyEl.value = '';
    console.log(shoppingList);

    const liEl = document.createElement('li'); //ad ogni click <li>

    let i = 0;
    while (i < shoppingList.length) {
        const thisEl = shoppingList[i];

        liEl.innerHTML = thisEl;  //metto ciò che scrivo nell'input
        ulEl.append(liEl);          //metto gli <li> nell'<ul>

        i++;
    };
});
console.log(shoppingList);