/* Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while. */
const shoppingList = [];

const ulEl = document.createElement('ul');
const listSectEl = document.getElementById('list_sec');

listSectEl.append(ulEl);        //metto l'<ul> nella section

while (true) {
    const liEl = document.createElement('li');
    const element = prompt('Cosa vuoi comprare?');

    if (element == "stop") {    //se scrivo stop si ferma
        break
    };

    shoppingList.push(element); //metto ciò che scrivo nella lista
    liEl.innerHTML += element;  //metto ciò che scrivo negli <li>
    ulEl.append(liEl);          //metto gli <li> nell'<ul>
};
console.log(shoppingList);