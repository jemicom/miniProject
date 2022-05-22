const todoInput = document.querySelector("#todo-form input");
// 키추가 
const TODOS_KEY = "todos";
let toDos = [];

function handleTodoSubmit(event) {
    event.preventDefault();
    const newTodoList = todoInput.value;
    todoInput.value = "";
    // toDos.push(newTodoList); 
    // 단순히 배열 대신 object를 사용 
    const newTextObject = {
        text: newTodoList,
        id: Date.now(),
    };

    toDos.push(newTextObject);

    // parintTodo(newTodoList); 텍스트 대신 object 전달 
    parintTodo(newTextObject);
    localStorageSave();
}

function localStorageSave() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
    // 키변경 
}

function parintTodo(newTodoList) {
    const li = document.createElement("li");
    const span = document.createElement("span");

    // 저장된 데이터가 object로 바뀌었으므로 
    li.id = newTodoList.id;
    span.innerText = newTodoList.text;
    // <li id="1650728815270"><span>kdlsd</span><button>X</button></li> 형태


    li.appendChild(span);

    const button = document.createElement("button");
    button.innerText = "X";
    button.classList.add('xBtn');
    li.appendChild(button);


    button.addEventListener("click", deleteTodoList);
    console.log(li);
    todoList.appendChild(li);
}

function deleteTodoList(event) {
    const li = event.target.parentElement;
    console.log(li.id, typeof li.id);
    toDos = toDos.filter(item => item.id != li.id);
    // now()생성된 데이터는 숫자, li.id는 문자이므로 !== 를 사용하려면 형변환 필요
    // toDos = toDos.filter(item => item.id !== parseInt(li.id));
    li.remove();

    // localStorage도 갱신 해야 함 
    localStorageSave();
}
todoForm.addEventListener("submit", handleTodoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    // parintTodo가 처리하는 데이터도 object
    parsedToDos.forEach(parintTodo);
}
