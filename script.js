// S'assure que le script s'exécute une fois le DOM complètement chargé
document.addEventListener('DOMContentLoaded', function() {
    // Sélection des éléments HTML
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Fonction pour ajouter une tâche
    function addTask() {
        const taskText = taskInput.value.trim(); // Supprime les espaces vides

        // Vérifie si le champ n'est pas vide
        if (taskText !== "") {
            // Crée un élément <li> pour la tâche
            const li = document.createElement('li');
            li.textContent = taskText;

            // Crée le bouton "Remove"
            const removeButton = document.createElement('button');
            removeButton.textContent = "Remove";
            removeButton.className = 'remove-btn';

            // Événement pour supprimer la tâche
            removeButton.onclick = function() {
                taskList.removeChild(li);
            };

            // Ajoute le bouton à la tâche
            li.appendChild(removeButton);

            // Ajoute la tâche à la liste
            taskList.appendChild(li);

            // Réinitialise le champ d'entrée
            taskInput.value = "";
        } else {
            alert("Please enter a task.");
        }
    }

    // Ajoute une tâche au clic du bouton
    addButton.addEventListener('click', addTask);

    // Ajoute une tâche avec la touche "Enter"
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
