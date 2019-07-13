let element;

element = document;
element = document.all;
element = document.head;
element = document.body;
element = document.domain;
element = document.URL;
element = document.contentType;

//links
element = document.links;
element = document.links[2];
element = document.links[2].id;
element = document.links[2].className;
element = document.links[2].classList;

//forms
element = document.forms;
element = document.forms[0];
element = document.forms[0].id;
element = document.forms[0].method;
element = document.forms[0].action;

//images
element = document.images;

//looping all img
let images = document.images;
let imagesArray = Array.from(images);
/*imagesArray.forEach(function (image) {
    console.log(image.src);
});*/
//console.log(imagesArray);

//scripts
element = document.scripts;
element = document.scripts[0].getAttribute('src');

//Selecting DOM elements
element = document.getElementById('heading');
element = document.getElementById('heading').id;
element = document.getElementById('heading').textContent;
element = document.getElementById('heading').style.background = '#333';

//Query Selector
element = document.querySelector('#learn');
element = document.querySelector('#learn').textContent = 'Ivan';

//getElementsByClassName
element = document.getElementsByClassName('link');

//getElementsByTagName
element = document.getElementsByTagName('img');

//Query SelectorAll
element = document.querySelectorAll('.card');

//select oddLinks
const oddLinks = document.querySelectorAll('#primary a:nth-child(odd)')
oddLinks.forEach(function (odd) {
    odd.style.backgroundColor = 'red';
    odd.style.color = 'white';
});

//select even Links
    const evenLinks = document.querySelectorAll('#primary a:nth-child(even)')
    evenLinks.forEach(function (even) {
        even.style.backgroundColor = 'blue';
        even.style.color = 'white';
});

//Traversing
const navigation = document.querySelector('#primary');
element = navigation.children;

const cartBtn = document.querySelector('.add-to-cart');
element = cartBtn;
element = cartBtn.parentElement;


//console.log(element);



//create new element

//create new <a>
const newLink = document.createElement('a');
//add class
newLink.className = 'link';
//href
newLink.href = '#';
//text
newLink.appendChild(document.createTextNode('New Link'));
//add element to the HTML
document.querySelector('#primary').appendChild(newLink);

//Replace an element
const newHeading = document.createElement('h2');
//id
newHeading.id = 'heading';
//class
newHeading.classList.add('heading');
//text
newHeading.appendChild(document.createTextNode('New'));
//select old heading
const oldHeading = document.querySelector('#heading');
//parent
const coursesList = document.querySelector('#courses-list');

coursesList.replaceChild(newHeading, oldHeading);

//Remove
const links = document.querySelectorAll('.link');

links[0].remove();


//Event Listeners
// const clearCartBtn = document.getElementById('clear-cart');
// clearCartBtn.addEventListener('click', clearCartBtnFunction );
// function clearCartBtnFunction(e) {
//     //target
//     let element;
//     element = e.target;
//     element = e.target.id;
//     element = e.target.className;
//     element = e.target.innerText;
//
//     console.log(element);
// }

//Mouse Events
//create the variables
const heading = document.querySelector('#heading');
const link = document.querySelector('nav');
const clearCartBtn = document.querySelector('#clear-cart');

//Click Mouse Event
//clearCartBtn.addEventListener('click', printEvent);
//Double Click Mouse Event
//clearCartBtn.addEventListener('dblclick', printEvent);
//Mouse Enter
//clearCartBtn.addEventListener('mouseenter', printEvent);
//Mouse Leave
//clearCartBtn.addEventListener('mouseleave', printEvent);
//Mouse Move
// heading.addEventListener('mousemove', printEvent);
// function printEvent(e) {
//     console.log(`The event is: ${e.type}`);
// }
/*
    console.log(heading);
    console.log(link);
    console.log(clearCartBtn);*/

//Input & Form Events
//Create variables

const searchForm = document.getElementById('search'),
      searchInput = document.getElementById('search-course');

//Event for form
// searchForm.addEventListener('submit', printEvent);
// function printEvent(e) {
//     e.preventDefault();
//     //Print value from the input
//     console.log(searchInput.value);
//
//     console.log(`Type: ${e.type}`);
// }

/*
console.log(searchForm);
console.log(searchInput);*/

//searchInput.addEventListener('keydown', printEvent);
//searchInput.addEventListener('keyup', printEvent);
//searchInput.addEventListener('focus', printEvent);
//searchInput.addEventListener('blur', printEvent);
// searchInput.addEventListener('input', printEvent);
// function printEvent(e) {
//     //Print value from the input
//     console.log(searchInput.value);
//
//     console.log(`Type: ${e.type}`);
// }

//Event Bubbling
//Variables
/*const card = document.querySelector('.card'),
      infoCard = document.querySelector('.info-card'),
      addCartBtn = document.querySelector('.add-to-cart');


    // console.log(card);
    // console.log(infoCard);
    // console.log(addCartBtn);
//Event Listeners
card.addEventListener('click', function (e) {
    console.log('Click card');
    e.stopPropagation();
});
infoCard.addEventListener('click', function (e) {
    console.log('Click info');
    e.stopPropagation();
});
addCartBtn.addEventListener('click', function (e) {
    console.log('Click addCart');
    e.stopPropagation();
});*/

//Delegation
//Remove from cart
const shopingCart = document.querySelector('#shopping-cart')
shopingCart.addEventListener('click', removeProductFromCart);

function removeProductFromCart(e) {
    //console.log(e.target.classList);
    if (e.target.classList.contains('remove')) {
        //console.log(e.target.parentElement.parentElement);
        e.target.parentElement.parentElement.remove();
    }
}

//add to cart
const courseList = document.querySelector('#courses-list')
courseList.addEventListener('click', addToCart);

function addToCart(e) {
    //console.log(e.target.classList);
    if (e.target.classList.contains('add-to-cart')) {
        console.log('Course added!!!')
    }
}

//Locale Storage
//Add to locale storage
//localStorage.setItem('name', 'Ivan');
//const name = localStorage.getItem('name');
//console.log(name);
//localStorage.removeItem('name');
//localStorage.clear();
//Add to session storage
//sessionStorage.setItem('name', 'Demir');
//sessionStorage.removeItem('name');

const localStorageContent = localStorage.getItem('names');
let names;
if (localStorageContent === null){
    names = [];
}else {
    names = JSON.parse(localStorageContent);
}
//names.push('Ivan');
//names.push('Demir');
//names.push('ikimj');
localStorage.setItem('names', JSON.stringify(names));
console.log(localStorageContent);