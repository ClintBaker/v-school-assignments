// Create the todo and render to the DOM
function createTodo(todo, num) {
  //   Create the div for todo
  const todoDiv = document.createElement("div");
  todoDiv.id = todo._id;
  todoDiv.className = "todo";
  //   Create the todo image
  const todoImage = document.createElement("img");
  todoImage.className = "todo_image shadow";
  todoImage.style.background = `linear-gradient(#333, #334)`;
  //   If todo has image render image, otherwise blank square
  if (todo.imgUrl) {
    todoImage.src = todo.imgUrl;
  }
  //   Create edit imgInput
  const imgInput = document.createElement("input");
  //   Add a value for the input
  imgInput.value = todo.imgUrl ? todo.imgUrl : "";
  //   Make the display none;
  imgInput.style.display = "none";
  //   Append the img input
  todoDiv.append(imgInput);
  //   Append image to main div
  todoDiv.append(todoImage);

  //   Create the h3 for the title
  const todoTitle = document.createElement("h3");
  todoTitle.className = "todo_header";
  todoTitle.textContent = `${num}. ${todo.title}`;
  //   Strikethrough
  if (todo.completed) {
    todoTitle.className = "strikethrough";
  }
  //   Create the title edit input
  const titleInput = document.createElement("input");
  //   Add a value
  titleInput.value = todo.title;
  //   Set display to none;
  titleInput.style.display = "none";
  //   Append to the div
  todoDiv.append(titleInput);
  //   Append the title
  todoDiv.append(todoTitle);
  //   Create the paragraph for description
  let todoDescription = document.createElement("p");
  todoDescription.className = "todo_description";
  todoDescription.textContent = todo.description;
  //   Strikethrough
  if (todo.completed) {
    todoDescription.className = "strikethrough";
  }
  //   Create input for description
  const descriptionInput = document.createElement("input");
  //   Add a value
  descriptionInput.value = todo.description;
  //   Make the display none;
  descriptionInput.style.display = "none";
  //   Append the desc input
  todoDiv.append(descriptionInput);
  //   Append the description
  todoDiv.append(todoDescription);
  //   Create the checkbox
  const todoIsComplete = document.createElement("input");
  todoIsComplete.value = todo.completed;
  todoIsComplete.name = "completed";
  todoIsComplete.checked = todo.completed;
  todoIsComplete.type = "checkbox";
  todoIsComplete.className = "todo_checkbox";
  //   Handle event listener for checkbox
  todoIsComplete.addEventListener("change", () => {
    // Build the edit object
    const edit = {
      completed: todoIsComplete.value === "false" ? "true" : "false",
    };
    // Submit the PUT to API
    axios
      .put(`https://api.vschool.io/clintbaker/todo/${todoDiv.id}`, edit)
      .then((res) => {
        // After updating the todo update your todos
        getTodos();
      })
      .catch((e) => console.log(e));
  });

  todoDiv.append(todoIsComplete);
  //   Create delete button
  const todoDelete = document.createElement("button");
  todoDelete.className = "btn";
  todoDelete.textContent = "X";
  //   Append the delete button
  todoDiv.append(todoDelete);

  //   Create event listener for delete
  todoDelete.addEventListener("click", () => {
    const id = todoDiv.id;
    axios
      .delete(`https://api.vschool.io/clintbaker/todo/${id}`)
      .then((res) => {
        // After deleting getTodos();
        getTodos();
      })
      .catch((e) => {
        console.log(e);
      });
  });

  //   Create edit button
  const todoEdit = document.createElement("button");
  todoEdit.className = "btn";
  todoEdit.textContent = "Edit";
  //   Append the edit button
  todoDiv.append(todoEdit);

  //   Create event listener for edit
  todoEdit.addEventListener("click", () => {
    todoEdit.textContent = todoEdit.textContent === "Edit" ? "Save" : "Edit";
    // If the todo is being edited
    if (todoEdit.textContent === "Save") {
      // Add the edit boxes
      todoImage.style.display = "none";
      imgInput.style.display = "inline";
      todoDescription.style.display = "none";
      descriptionInput.style.display = "inline";
      todoTitle.style.display = "none";
      titleInput.style.display = "inline";
    } else {
      // Otherwise we make a put request to edit the todo
      //   Build the object
      const editObj = {
        imgUrl: imgInput.value,
        title: titleInput.value,
        description: descriptionInput.value,
      };
      //   Send a PUT request to database
      axios
        .put(`https://api.vschool.io/clintbaker/todo/${todoDiv.id}`, editObj)
        .then(() => {
          // Get the todos
          getTodos();
        })
        .catch((e) => console.log(e));
    }
  });

  //   Append the new div to the main section
  const masterDiv = document.getElementById("todos");
  masterDiv.append(todoDiv);
}

// Define a render function from an array
function renderTodos(array) {
  // Reset the todos section
  //   Grab the todos section
  const todos = document.getElementById("todos");
  //   While todos has children remove the first child
  while (todos.firstChild) {
    todos.removeChild(todos.firstChild);
  }

  // Define our counter
  let num = 1;
  array.forEach((todo) => {
    createTodo(todo, num);
    // Increment our counter
    num++;
  });
}

// 1. Get current list of todos
function getTodos() {
  axios
    .get("https://api.vschool.io/clintbaker/todo")
    .then((res) => {
      // Grab our todos
      const todos = res.data;
      // Display on the DOM
      renderTodos(todos);
    })
    .catch((error) => alert(error));
}

// Call getTodos() on load
getTodos();

//   2. Submit a new todo (POST)
// Grab the add a new todo form
const form = document.add;
// Add an event listener to the form
form.addEventListener("submit", (e) => {
  e.preventDefault();
  //   Build todo
  const todo = {
    title: form.title.value,
    description: form.description.value,
    imgUrl: form.url.value,
  };
  //   Reset the form
  form.title.value = "";
  form.description.value = "";
  form.url.value = "";
  //   Post todo to the database
  axios
    .post("https://api.vschool.io/clintbaker/todo", todo)
    .then((res) => {
      getTodos();
    })
    .catch((e) => console.log(e));
});

// 3.
