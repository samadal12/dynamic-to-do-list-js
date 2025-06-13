document.addEventListener('DOMContentLoaded', function() {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Charger les tâches depuis le localStorage
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(function(taskText) {
            addTask(taskText, false); // false = ne pas re-sauvegarder dans localStorage
        });
    }

    // Sauvegarder les tâches dans localStorage
    function saveTasks(tasks) {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // Ajouter une tâche à la liste
    function addTask(taskText, save = true) {
        if (taskText.trim() === "") {
            alert("Please enter a task.");
            return;
        }

        // Créer l'élément li
        const li = document.createElement('li');
        li.textContent = taskText;

        // Créer le bouton de suppression
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.className = 'remove-btn'; // On utilise className au lieu de classList.add

        // Supprimer la tâche à la fois du DOM et du localStorage
        removeButton.onclick = function() {
            taskList.removeChild(li);

            // Mettre à jour le localStorage après suppression
            const currentTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
            const updatedTasks = currentTasks.filter(task => task !== taskText);
            saveTasks(updatedTasks);
        };

        li.appendChild(removeButton);
        taskList.appendChild(li);

        // Sauvegarde facultative (évite double sauvegarde lors du chargement initial)
        if (save) {
            const currentTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
            currentTasks.push(taskText);
            saveTasks(currentTasks);
        }

        // Vider le champ de saisie
        taskInput.value = "";
    }

    // Ajouter une tâche via le bouton
    addButton.addEventListener('click', function() {
        addTask(taskInput.value);
    });

    // Ajouter une tâche avec la touche Entrée
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask(taskInput.value);
        }
        ["classList.add"];
    });

    // Charger les tâches existantes au démarrage
    loadTasks();
});
