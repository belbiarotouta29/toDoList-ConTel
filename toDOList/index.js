$(document).ready(function() {
    // Tableau pour stocker les tâches en cours
    let currentTasks = [];
  
    // Tableau pour stocker les tâches terminées
    let completedTasks = [];
  
    // Fonction pour ajouter une tâche à la liste
    function addTask(taskText) {
      currentTasks.push(taskText);
      updateTaskList();
    }
  
    // Fonction pour mettre à jour la liste des tâches
    function updateTaskList() {
      $("#taskList").empty();
      $("#tacheFaites").empty();
  
      currentTasks.forEach(function(task) {
        const listItem = $("<li>").text(task);
        listItem.on("swiperight", function() {
          completeTask($(this).index());
        });

        listItem.on("swipeleft", function() {
            $(this).hide('slow', function() {
                $(this).remove();
            });       
        });

        $("#taskList").append(listItem);
      });
  
      completedTasks.forEach(function(task) {
        $("#tacheFaites").append($("<li>").text(task).css("text-decoration", "line-through"));
      });
    }
  
    // Fonction pour compléter une tâche
    function completeTask(index) {
      const completedTask = currentTasks.splice(index, 1)[0];
      completedTasks.push(completedTask);
      updateTaskList();
    }
  
    // Réinitialiser les tâches
    function resetTasks() {
      currentTasks = [];
      completedTasks = [];
      updateTaskList();
    }
  
    // Ajouter une tâche lors du clic sur le bouton "Ajouter"
    window.ajouterTache = function() {
      const taskText = $("#tache").val().trim();
      if (taskText !== "") {
        addTask(taskText);
        $("#tache").val("");
      }
    };
  
    // Réinitialiser les tâches lors du clic sur le bouton "Réinitialiser"
    window.reinitialiserTache = function() {
      resetTasks();
    };
  });
  







