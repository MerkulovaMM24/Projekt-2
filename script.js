// Loo uus list
function createList() {
    const listNameInput = document.getElementById("list-name-input"); // Haarame nimekasti
    const listName = listNameInput.value.trim(); // Saame kasutaja sisestatud nime, eemaldame tühikud
 
    if (listName === "") {
        alert("Please enter a list name!"); //kui nimi on tühi
        return;
    }
    // Loo uus list object
    const newList = {
        name: listName,
        tasks: []
    };
    lists.push(newList);//uus list lõppus
 
    listNameInput.value = ""; //sisendväli puhastatakse
 
    renderTaskSection();//uus sisestusväli//funktsiooni kutse
}
 
function renderTaskSection() { //muudab peidetud osa nähtavaks,kui list on tehtud
    const taskSection = document.getElementById("task-section");
}
 
createList()