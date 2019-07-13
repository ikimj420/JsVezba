//Variables
const courses = document.querySelector('#courses-list'),
      shoppingCartContent = document.querySelector('#cart-content tbody'),
      clearCartBtn = document.querySelector('#clear-cart');


//Event Listeners
loadEventListeners();
function loadEventListeners() {
    //when a new course is added
    courses.addEventListener('click', buyCourse);
    //When the remove button is clicked
    shoppingCartContent.addEventListener('click', removeCourse);
    //Clear cart Btn
    clearCartBtn.addEventListener('click', clearCart);
    //Document Ready
    document.addEventListener('DOMContentLoaded', getFromLocaleStorage);
}


//Functions
//add course
function buyCourse(e) {
    e.preventDefault();
    //use delegation to find the course that was added
    if (e.target.classList.contains('add-to-cart')) {
        //read course values
        const course = e.target.parentElement.parentElement;
        //read values
        getCourseInfo(course);
    }
}
//get course Info
function getCourseInfo(course) {
    //create Object with courses info
    const courseInfo = {
        image: course.querySelector('img').src,
        title: course.querySelector('h4').textContent,
        price: course.querySelector('.price span').textContent,
        id: course.querySelector('a').getAttribute('data-id')
    }
    //insert the selected course into the shopping cart
    addInfoCart(courseInfo);
}
//Display the selected course into the shopping cart
function addInfoCart(course) {
    //create a <tr>
    const row = document.createElement('tr');
    //Build the template
    row.innerHTML = `
        <tr>
            <td> <img src="${course.image}" width="100 px;"> </td>
            <td> ${course.title} </td>
            <td> ${course.price} </td>
            <td> <a href="#" class="remove" data-id="${course.id}"> X </a></td>
        </tr>
    `;
    //Add into the shoping cart
    shoppingCartContent.appendChild(row);
    //Add course into storage
    saveIntoStorage(course);
    
}
//remove course from the dom
function removeCourse(e) {
    let course, courseId;
    //remove from dom
    if (e.target.classList.contains('remove')) {
        e.target.parentElement.parentElement.remove();
        course = e.target.parentElement.parentElement;
        courseId = course.querySelector('a').getAttribute('data-id');
    }
    //remove from LS
    removeCourseLocalStorage(courseId);
}
//Clear the shopping cart
function clearCart() {
    //shoppingCartContent.innerHTML = '';
    while (shoppingCartContent.firstChild) {
        shoppingCartContent.removeChild(shoppingCartContent.firstChild);
    }
    //clear from LS
    clearLocalStorage();
}
//Add course into the locale storage
function saveIntoStorage(course) {
    let courses = getCoursesFromStorage();
    //add the course into the array
    courses.push(course);
    //since storage only save strings, we need to convert JSON into string
    localStorage.setItem('courses', JSON.stringify(courses));
}
//Get course from locale storage
function getCoursesFromStorage() {
    //if not empty LS get the value, otherwise create empty array
    let courses;
    if (localStorage.getItem('courses') === null ) {
        courses = [];
    }else{
        courses = JSON.parse(localStorage.getItem('courses'));
    }
    return courses;
}
//load when document is ready and print course info
function getFromLocaleStorage() {
    let coursesLS = getCoursesFromStorage();
    //loop courses and print into the cart
    coursesLS.forEach(function (course) {
        //create the <tr>
        const row = document.createElement('tr');
        //print the content
        row.innerHTML = `
        <tr>
            <td> <img src="${course.image}" width="100 px;"> </td>
            <td> ${course.title} </td>
            <td> ${course.price} </td>
            <td> <a href="#" class="remove" data-id="${course.id}"> X </a></td>
        </tr>
    `;
    shoppingCartContent.appendChild(row);
    });
}
//clear the LS
function clearLocalStorage() {
    localStorage.clear();
}
//remove from LS
function removeCourseLocalStorage(id) {
    //get the LS data
    let coursesLS = getCoursesFromStorage();
    //loop trought the array and find the index to remove
    coursesLS.forEach(function (courseLS, index) {
        if (courseLS.id === id) {
            coursesLS.splice(index, 1);
        }
    });
    //add the rest of the array
    localStorage.setItem('courses', JSON.stringify(coursesLS));
}