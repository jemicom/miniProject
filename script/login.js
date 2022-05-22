const loginForm = document.querySelector('form#login');
const loginBtn = document.querySelector('.login_check');
const userId = document.querySelector('#id');
const HIDDEN_CLASSNAME = "hidden";
const todoForm = document.querySelector("#todo-form");
const todoList = document.querySelector("#todo-list");

function loginCheckHandler(event) {
    event.preventDefault();
    const userIdValue = userId.value;
    if (userIdValue == "test") {
        loginForm.classList.add(HIDDEN_CLASSNAME);
        localStorage.setItem("userId", userIdValue);
        paintGreetings(userIdValue);
    } else {
        console.log("아이디를 찾을 수 없어요")
    }
}

function paintGreetings(userId) {
    document.querySelector('h1').classList.remove(HIDDEN_CLASSNAME);
    const span = document.createElement("span");
    span.innerHTML = `hello! ${userId}님 `;
    // const button = document.createElement('button');
    // button.innerHTML = "로그아웃";
    // button.classList.add('logout');
    todoForm.classList.remove(HIDDEN_CLASSNAME);
    todoList.classList.remove(HIDDEN_CLASSNAME);
    document.querySelector('h1').appendChild(span);
    // document.querySelector('h1').appendChild(button);
}

const localStorageUserid = localStorage.getItem("userId");

if (localStorageUserid === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", loginCheckHandler);
} else {
    paintGreetings(localStorageUserid);
    loginForm.classList.add(HIDDEN_CLASSNAME);
    todoForm.classList.remove(HIDDEN_CLASSNAME);
}