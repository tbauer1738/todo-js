let todos = [
  {id: 1, text: "Take out trash and recycling", complete: true},
  {id: 2, text: "Pick up dry cleaning", complete: false},
  {id: 3, text: "Get oil change", complete: false},
  {id: 4, text: "Write thank-you notes", complete: false},
];

//document.getElementById("demo").innerHTML = todos;


document.addEventListener('DOMContentLoaded', function() {
  var fruits = ["Banana", "Orange", "Apple", "Mango"];
  fruits.toString();
  document.getElementById("demo").innerHTML = fruits;
}, false);



//User adds a new todo, text from field turns into a todo
document.getElementById('add').addEventListener('click', function () {

  var value = document.getElementById('item').value;
  if (value) addItemTodo(value); 
  });




function loadDefaultTasks(){

  for(var i=0;i<todos.length;i++){
    document.write("<b>todos["+i+"] is </b>=>"+todos[i]+"<br>");
    }


}


//*Saving below for when I move on to adding new tasks*/

  // function addItemTodo(text){
  //   var list = document.getElementById('main-todo-list');

  //   var div = document.createElement('div')
  //   div.setAttribute("class", "todo");
  //   div.setAttribute("id", "todo-entry");
    
  //   var item = document.createElement('span');
  //   item.setAttribute("class", "todo-text");
  //   item.innerHTML = text;

  //   var checkbox = document.createElement('input');
  //   checkbox.setAttribute("type", "checkbox");
  //   checkbox.setAttribute("class", "todo-checkbox");
  //   checkbox.setAttribute("id", "complete")

  //   var br = document.createElement("br");
  //   item.appendChild(br);

  //   document.getElementById('main-todo-list').appendChild(div);
  //   document.getElementById('todo-entry').appendChild(checkbox);
  //   document.getElementById('todo-entry').appendChild(item);
   
    

  //   //div.insertBefore(item, list);
  //   list.insertBefore(checkbox, item);
  // }


