// Задание 1

let nav = navigator.userAgent;
let loc = location.href;

console.log('С помощью браузера ' + nav + ' я открыл страничку ' + loc)

// Задание 2
for(let li of document.body.children[0].children){
    console.log(li.innerText);
}

// Задание 3
let listItems = document.querySelectorAll('li')
console.log(listItems);
for(let i = 0; i < listItems.length; i++){
    listItems[i].innerText = i;
}

// Задание 4
// Написать функцию, которая принимает на вход 3 параметра: название тега, название цвета, содержимое. Функция должна сформировать необходимый тег, добавить необходимый стиль с цветом и внести содержимое. Вывести несколько таких сгенерированных тегов в консоль, затем отправить их на страницу.

function constraction(nameTeg, nameColor, nameText){
    nameTeg = document.createElement(nameTeg);
    nameTeg.innerText = nameText;
    document.body.style.color = nameColor;
    document.body.appendChild(nameTeg);
}

Constraction('span', 'red', 'Pavel 17');

// Задание 5
// Создать с помощью js абзац (тег p). Добавить в него контент. Добавить к нему стили: размер 36px, жирный шрифт. Добавить абзац с текстом на страницу.

let p = document.createElement('p');
p.innerText = 'Its Great!';
document.body.style.fontSize = '36px';
document.body.style.fontWeight = 'bold'
document.body.appendChild(p);

// Задание 6
//Вставить в страницу (в html документ) тег <select>. С помощью js добавить в этот select опции (option) под годы от 1960 по 2020.

let select = document.querySelector('select');
for(let i = 1960; i <= 2020; i ++){
    let option = document.createElement('option');
    option.innerText = i;
    select.appendChild(option);
}

// Задание 7
// Вставить в страницу (в html документ) ul.
// Предусмотреть в коде следующий массив:

let arr = [
    {name: "Женя", order: true},
    {name: "Кристина", order: true},
    {name: "Павел", order: false},
    {name: "Виолетта", order: false},
    {name: "Костя", order: true}
];

let ul = document.getElementsByClassName('list');
for(let i = 0; i < arr.length; i++){
    let purchse = (arr[i].order) ? 'оплатил заказ' : 'отменил заказ';
    let li = document.createElement('li');
    li.innerText = 'Клиент ' + arr[i].name + ' ' +  purchse;
    document.body.appendChild(li);
};

// Задание 8
let linksArr = ['https://www.onliner.by/', 'https://www.youtube.com/', 'https://vk.com/', 'https://www.google.com/', 'https://yandex.ru/'];

//1) при помощи JS создать DIV, задать ему css стили (фон, паддинги)
let div = document.createElement('div');
div.style.background = 'orange';
div.style.paddingTop = '125px';
document.body.appendChild(div);

// 2) при помощи цикла пройтись по массиву 'linksArr', для каждого из элементов массива сформировать ссылку (тег c атрибутом href и текстом из массива) и добавить эту ссылку в созданный DIV из пункта 1 При нажатии на ссылки адреса должны открываться в новой вкладке (атрибут target="_blank")
// ПОДСКАЗКА Для создания атрибута используется js метод setAttribute:
// element.setAttribute(name, value) - где name - сам атрибут, который нужно добавить, value - его значение.
// Вкладывать ссылки в див нужно с помощью метода appendChild или append.


for(let i = 0; i < linksArr.length; i++){
    let a = document.createElement('a');
    a.innerText = linksArr[i];
    a.setAttribute("href", i);
    a.style.paddingRight = '25px';
    a.target="_blank";
    div.appendChild(a);
}

// Задание 9
// Добавить к нескольким тегам на странице класс "forRemove". Далее написать JS код, который найдет в HTML все элементы с классом "forRemove" и удалит их.
// ПОДСКАЗКА Для удаления DOM-элементов можно использовать метод element.remove()

let classes = document.querySelectorAll(".forRemove")

for(let i = 0; i < classes.length; i++){
    classes[i].remove()
}

// Задание 10
//Создать массив объектов с полями name, age. Создать html таблицу с двумя колонками, заполненную этими объектами. Name должно быть красного цвета, age - зеленого.
let user = [
    {name: 'Den', age: 25},
    {name: 'Matt', age: 17},
    {name: 'Sveta', age: 9},
    {name: 'Anna', age: 18},
]

let tbl  = document.createElement('table');
document.body.appendChild(tbl);

for(let i = 0; i < user.length; i++){
    let tr = document.createElement('tr');
    let tdName = document.createElement('td');
    tdName.innerText = user[i].name;
    tdName.style.color = 'red'
    let tdAge = document.createElement('td');
    tdAge.innerText = user[i].age;
    tdAge.style.color = 'green';
    tr.appendChild(tdName);
    tr.appendChild(tdAge);
    tbl.appendChild(tr);
}