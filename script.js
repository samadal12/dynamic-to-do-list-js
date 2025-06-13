// Attend que le DOM soit complètement chargé
document.addEventListener('DOMContentLoaded', function() {
    // Sélection des éléments HTML
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Fonction pour ajouter une nouvelle tâche
    function addTask() {
        const taskText = taskInput.value.trim(); // Récupère le texte et supprime les espaces

        if (taskText !== "") {
            // Créer un élément <li>
            const li = document.createElement('li');
            li.textContent = taskText;

            // Créer un bouton pour supprimer la tâche
            const removeButton = document.createElement('button');
            removeButton.textContent = "Remove";
            removeButton.className = 'remove-btn'; // Affecte la classe via className

            // Ajoute un gestionnaire d'événement pour supprimer la tâche
            removeButton.onclick = function() {
                taskList.removeChild(li);
            };

            // Ajoute le bouton au <li>, puis ajoute le <li> à la liste
            li.appendChild(removeButton);
            taskList.appendChild(li);

            // Vide le champ de saisie
            taskInput.value = "";
        } else {
            alert("Please enter a task.");
        }
    }

    // Clique sur le bouton "Add Task"
    addButton.addEventListener('click', addTask);

    // Appuie sur la touche "Enter" pour ajouter une tâche
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
