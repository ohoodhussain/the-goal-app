 
 //get the element from the html fo adding neaw tas
 let newTaskForm = document.getElementById('addTaskForm');
 let printNewTask = document.getElementById('printText');
 let displayTasks = document.getElementById('taskScreen');
 let colonListTemplate = document.getElementById('ColonList');
 
 //Greate event to submit the add new task form 
//create load task function
async function loadTaskss(){
    res = await fetch('get-tasks',{
        method:"GET",
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    });
       
}
   newTaskForm.addEventListener('submit', async function(e){
    e.preventDefault();
    for (tasks of jsonRes.ColonList){
    let taskText = printNewTask.value;
    let taskItem = colonListTemplate.content.cloneNode(true);
    let taskElment = taskItem.querySelector('.printText');
    taskElment.textContent = taskText;
     displayTasks.appendChild(taskItem);
     printNewTask.value ="";
    }
      payload={
        task:taskElment.textContent
     }
     res=await fetch('save-task',{
        method:"post",
        body:JSON.stringify(payload),
        headers:{
            'Accept':'application/json',
            'content-type':'application/json'
        }

     })
       jsonRes = await res.json()
 console.log(jsonRes)
 });


/* In the code below, we use 
e.target.parentElement.parentElement to 
select the <li> element containing the 
delete button. Then we use li.parentElement 
to select its parent <ul> element. 
Finally, we remove the <li> element 
using ul.removeChild(li).
*/
 displayTasks.addEventListener('click', function(e){
    if (e.target.classList.contains('deleteButton')) {
        const li = e.target.parentElement.parentElement;
        const ul = li.parentElement;
        ul.removeChild(li);
    }
});
/*displayTasks.addEventListener('click', function(e) {
    if (e.target.classList.contains('editButton')) {
        const taskTextElement = e.target.parentElement.querySelector('.printText');
        const taskText = taskTextElement.textContent;

        // Create an input field
        const inputField = document.createElement('input');
        inputField.type = 'text';
        inputField.value = taskText;

        // Replace the task text with the input field
        taskTextElement.textContent = '';
        taskTextElement.appendChild(inputField);

        // Focus on the input field
        inputField.focus();

        // Handle the update on input blur
        inputField.addEventListener('blur', function() {
            const updatedTaskText = inputField.value.trim();
            if (updatedTaskText !== '') {
                taskTextElement.textContent = updatedTaskText;
            } else {
                taskTextElement.textContent = taskText; // Restore the original task text
            }
        });
    }
});*/