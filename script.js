document.addEventListener('DOMContentLoaded', function() {
    let TODO = document.getElementById("TODO");
    let Add = document.getElementById("Add");
    let TodoList = document.getElementById("TodoList");
    let Delete = document.getElementById("Delete");
    let Color = document.getElementById("Color")

    let TodoValue;

    const AddTodo = () => {
        TodoValue = TODO.value;
        localStorage.setItem("Todo", TodoValue)
        TodoList.innerHTML += TodoValue + " <br>";
        TODO.value = "";
    }

    const DeleteTodo = () => {
        TodoList.innerHTML = "";
    }
    
    const ColorTodo = () => {
        let ask_for_color = prompt("What Color Do You Want The Todo Text To Have?")

        if(ask_for_color) {
            TodoList.style.color = ask_for_color
        }
        else {
            return;
        }
    }

    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
        //   event.preventDefault(); // Prevent form submission
      
          TodoValue = TODO.value;
          localStorage.setItem("Todo", TodoValue);
          TodoList.innerHTML += TodoValue + " <br>";
          TODO.value = ""; // Clear the input field
        }
      };
      
    TODO.addEventListener('keydown', handleKeyPress);
    Add.addEventListener('click', AddTodo);
    Delete.addEventListener('click', DeleteTodo);
    Color.addEventListener('click', ColorTodo);
})