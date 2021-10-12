const userInput = document.querySelector('#input');
const addButton = document.querySelector('#addButton');
const todoList = document.querySelector('.todo-list')

addButton.addEventListener('click', e=>{
    e.preventDefault();
   // CREATE A DIV CONTAINER FOR THE LIST
    const todoDiv = document.createElement('div');
   // CREATE AND ADD A CLASS TO THE DIV
   todoDiv.classList.add('todo');
   // NOW WE CREATE THE LIST
   const newList = document.createElement('li');
   newList.innerText = userInput.value;  

   // CREATE AND ADD A CLASS TO THE NEW LIST 
    newList.classList.add('dropdown-item');
    todoDiv.appendChild(newList);

    // CREATE A TRASH BUTTON 
    const trashButton = document.createElement('span');
    trashButton.innerHTML ='<i class="fas fa-trash-alt"></i>';
    trashButton.classList.add('trash-button');
    todoDiv.appendChild(trashButton); 
   
   // SO HERE WE ADD EVERYTHING TO THE LIST <ul></ul> tag WITH CLASS . todoList
    todoList.appendChild(todoDiv);
});