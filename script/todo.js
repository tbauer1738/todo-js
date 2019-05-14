let todos = [
  {id: 1, text: "Take out trash and recycling", complete: true},
  {id: 2, text: "Pick up dry cleaning", complete: false},
  {id: 3, text: "Get oil change", complete: false},
  {id: 4, text: "Write thank-you notes", complete: false},
];

//establishing the prepopulated list of todos 
function loadTodos(){
  var i;
  for (var i=0; i < todos.length; i++){
	document.getElementById('main-todo-list').innerHTML += '<div class="todo" id="todoDiv"><input type="checkbox" class="todo-checkbox" /><span class="todo-text">' + todos[i].text + '</span></div>';
  }
}

//triggering function to load propulated list of todos on page
window.addEventListener('load', function (){
  loadTodos();
  markComplete();
});

//marking completed items complete 
function markComplete(){
  var checkboxes = document.getElementsByClassName('todo-checkbox');
  for(i=0; i < checkboxes.length; i++){
    document.getElementById("todoDiv").setAttribute('id', 'todoDiv ' + i);
    checkboxes[i].addEventListener('click', function(){
      console.log("this was a test on checbox " + i);
      
    });
  }
};

