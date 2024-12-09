// Massiiv, mis sisaldab kõiki lstid nende ülesannetega
let lists = [];
 
// Loob uue listi
function createList() {
    const listNameInput = document.getElementById("list-name-input");
    const listName = listNameInput.value.trim();
 
    if (listName === "") {
        alert("Please enter a list name!");
        return;
    }
 
    // Loob uue obkjeti listi
    const newList = {
        name: listName,
        tasks: []
    };
 
    // Lisab uue listi listide massiivi
    lists.push(newList);
 
    // Tühjendab sisestusväli
    listNameInput.value = "";
 
    // Kuvab vastloodud listi ülesande sisestusjaotis
    renderTaskSection();
}
 
// Loob ülesande
function renderTaskSection() {
    const taskSection = document.getElementById("task-section");
 
    // Tühjendab sisestusväli
    taskSection.innerHTML = "";
 
    // Loob iga listi jaoks ülesannete listi
    lists.forEach((list, index) => {
        // koostab uue HTML elemendi div-konteineri ja lisab talle "task" klassi
        const listDiv = document.createElement("div");
        listDiv.classList.add("task");
 
        const listName = document.createElement("h3");
        listName.textContent = list.name;
        listDiv.appendChild(listName); // appendChild käsk lisab sulgudes oleva elemendi ees olevasse elemendisse
 
        // Praeguse listi ülesande sisestusjaotis
        const taskInputContainer = document.createElement("div");
        taskInputContainer.classList.add("input-container2");
 
        const taskInput = document.createElement("input");
        taskInput.type = "text";
        taskInput.placeholder = "Enter task";
        taskInput.id = `task-input-${index}`;
 
        const addButton = document.createElement("button");
        addButton.textContent = "Add Task";
        addButton.onclick = () => addTask(index);
 
        taskInputContainer.appendChild(taskInput);
        taskInputContainer.appendChild(addButton);
 
        listDiv.appendChild(taskInputContainer);
 
        // Praeguse listi ülesannete list
        const taskList = document.createElement("div");
 
        list.tasks.forEach((task, taskIndex) => {
            const taskDiv = document.createElement("div");
            taskDiv.classList.add("task-item");
 
            const taskTitle = document.createElement("span");
            taskTitle.textContent = task.name;
 
            // Loob ülesande täitmiseks märkeruut
            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.checked = task.completed;
            checkbox.onchange = () => toggleTaskCompletion(index, taskIndex);
 
            // Loob ülesande jaoks kustutamisnupp
            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Delete";
            deleteButton.classList.add("delete");
            deleteButton.onclick = () => deleteTask(index, taskIndex);
 
            const taskActions = document.createElement("div");
            taskActions.appendChild(checkbox);
            taskActions.appendChild(deleteButton);
 
            taskDiv.appendChild(taskTitle);
            taskDiv.appendChild(taskActions);
            taskList.appendChild(taskDiv);
        });
 
        listDiv.appendChild(taskList);
 
        // Nupp kogu listi kustutamiseks
        const deleteListButton = document.createElement("button");
        deleteListButton.textContent = "Delete List";
        deleteListButton.classList.add("delete-list");
        deleteListButton.onclick = () => deleteList(index);
 
        listDiv.appendChild(deleteListButton);
 
        taskSection.appendChild(listDiv);
    });
}
 
// Funktsioon ülesande listisse lisamiseks
function addTask(listIndex) {
    const taskInput = document.getElementById(`task-input-${listIndex}`);
    const taskName = taskInput.value.trim();
 
    if (taskName === "") {
        alert("Please enter a task!");
        return;
    }
 
    // Lisab uue ülesanne vastavasse listisse
    lists[listIndex].tasks.push({
        name: taskName,
        completed: false
    });
 
    // Tühjendab sisestusväli
    taskInput.value = "";
 
    // Visualiseerib ülesande jaotis
    renderTaskSection();
}
 
// Funktsioon ülesande lõpetamise oleku vahetamiseks
function toggleTaskCompletion(listIndex, taskIndex) {
    lists[listIndex].tasks[taskIndex].completed = !lists[listIndex].tasks[taskIndex].completed;
    renderTaskSection();
}
 
// Funktsioon ülesande kustutamiseks
function deleteTask(listIndex, taskIndex) {
    lists[listIndex].tasks.splice(taskIndex, 1);
    renderTaskSection();
}
 
// Funktsioon listie kustutamiseks
function deleteList(listIndex) {
    // Eemaldab listi listide massiivist
    lists.splice(listIndex, 1);
    renderTaskSection();
}