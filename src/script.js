const addForm = document.querySelector('.add-form');
const taskInput = addForm.querySelector('input[type="text"]');
const tasks = document.querySelector('.tasks');
const clearAllBtn = document.querySelector('.clearAll-btn');
const pendingTaskContext = document.querySelector('.pending-task-context');
const searchForm = document.querySelector('.search-form');
const searchInput = searchForm.querySelector('input');

function updatePendingTask(){
    pendingTaskContext.innerText = `You have ${tasks.querySelectorAll('li').length} pending tasks.`
}

// Adding Tasks
addForm.addEventListener('submit',event=>{
    event.preventDefault();
    if(taskInput.value.trim()!=''){
        tasks.innerHTML+=`
            <li class="bg-[#E4EFE7] flex justify-between">
                <span class="px-3 my-auto">${taskInput.value.trim()}</span>
                <i class="delete-icon ri-delete-bin-6-fill bg-red-500 text-white p-2 cursor-pointer"></i>
            </li>
        `; 
        updatePendingTask();
    }
    addForm.reset();
})

// Removing Tasks
tasks.addEventListener('click',event=>{
    if(event.target.classList.contains('delete-icon')){
        event.target.parentElement.remove();
        updatePendingTask();
    }
})

// clearall btn
clearAllBtn.addEventListener('click',()=>{
    tasks.innerHTML='';
    updatePendingTask();
})

// Searching Tasks
function filterTaskList(term){
    tasks.querySelectorAll('li').forEach(eachTask=>{
        if(!eachTask.innerText.toLowerCase().includes(term.toLowerCase()))
            eachTask.classList.add('hidden')
        else eachTask.classList.remove('hidden')
    })
}
function handleSearch(){
    event.preventDefault();
    if(event.type=='submit' || event.type=='input'){
        filterTaskList(searchInput.value.trim());
    }
}
searchForm.addEventListener('submit',handleSearch)
searchForm.addEventListener('input',handleSearch)
document.querySelector('.clear-search').addEventListener('click',()=>{
    searchInput.value="";
    filterTaskList('');    
});