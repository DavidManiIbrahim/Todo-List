
window.addEventListener("load", () => {

    const form = document.querySelector("#new-task-form")
    const input = document.querySelector("#new-task-input")
    const list = document.querySelector("#tasks")

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const task = input.value;

        if (!task) {
            alert("Please fill out the task");
            return;
        }

        const tasks = document.createElement("div");
        tasks.classList.add("task");

        const task_content = document.createElement("div");
        task_content.classList.add("content")
        // task_content.innerText = task;

        tasks.appendChild(task_content);

        const task_input = document.createElement("input");
        task_input.classList.add("text")
        task_input.type = "text"
        task_input.value = task;
        task_input.setAttribute("readonly", "readonly");

        task_content.appendChild(task_input)

        list.appendChild(tasks);

        const task_action = document.createElement("div");
        task_action.classList.add("actions");

        const task_edit = document.createElement("button");
        task_edit.classList.add('edit')
        task_edit.innerHTML = "edit"
        
        const task_delete = document.createElement("button");
        task_delete.classList.add('delete')
        task_delete.innerHTML = "delete"

        task_action.appendChild(task_edit)
        task_action.appendChild(task_delete)

        tasks.appendChild(task_action)
        input.value = ""

        task_edit.addEventListener('click', () => {
            if (task_edit.innerText.toLowerCase() == "edit"){
                
                task_input.removeAttribute("readonly")
                task_input.focus()
                task_edit.innerText = "Save"
            }else{
                task_input.setAttribute("readonly", "readonly")
                task_edit.innerText = "Edit"

            }

        })
        task_delete.addEventListener("click", () => {
            list.removeChild(tasks)
        })



    })


})