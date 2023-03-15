/* Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while. */

/* **VARIABLES** */
let shoppingList = [];

const ulEl = document.createElement('ul');
const listSectEl = document.getElementById('list_sec');
const buyEl = document.getElementById('acquisto');
const sendBtn = document.getElementById('submit');
const resetEl = document.getElementById('reset');

ulEl.classList.add('list-group', 'py-3');
listSectEl.append(ulEl);        //metto l'<ul> nella section

/* SEND BTN */
sendBtn.addEventListener('click', function (e) {
    e.preventDefault;

    //se ciò che scrivo non ha contenuto non fare niente, altrimenti pushalo nella lista
    if (buyEl.value != '') {
        shoppingList.push(buyEl.value); //metto ciò che scrivo nella lista
        console.log(shoppingList);

        const liEl = document.createElement('li'); //ad ogni click <li>
        liEl.classList.add('list-group-item');

        let i = 0;
        while (i < shoppingList.length) {
            const thisEl = shoppingList[i];

            liEl.innerHTML = thisEl;  //metto ciò che scrivo nell'input
            ulEl.append(liEl);        //metto gli <li> nell'<ul>

            i++;
        };
    }
    buyEl.value = '';   //svuota campo
});
console.log(shoppingList);

/* RESET BTN */
resetEl.addEventListener('click', function () {
    buyEl.value = '';             //svuota campo
    ulEl.innerHTML = '';          //svuota l'elemento <ul>
    shoppingList = [];            //svuota l'array
    console.log(shoppingList);
});