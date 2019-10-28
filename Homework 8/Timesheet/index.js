let timeSheetData = [
    {
        project: 'Learn front-end',
        task: 'Learn HTML',
        timespent: 6,
    },
    {
        project: 'Learn front-end',
        task: 'Learn CSS',
        timespent: 8,
    },
    {
        project: 'Learn front-end',
        task: 'Learn JS Variables and Data Types',
        timespent: 6,
    },
    {
        project: 'Learn git',
        task: 'Learn git basics',
        timespent: 2,
    }
]
let content = document.getElementById('content');
let project = document.getElementById('project');
let task = document.getElementById('task');
let timespent = document.getElementById('timespent');
let add = document.getElementById('add');
let clear = document.getElementById('clear');
console.log(content);
console.log(add);
console.log(project);
console.log(task);
console.log(timespent);
for(let i = 0; i < timeSheetData.length; i++){
    content.insertAdjacentHTML('beforeend',`
    <tr class='row'>
        <td>${timeSheetData[i]['project']}</td>
        <td>${timeSheetData[i]['task']}</td>
        <td>${timeSheetData[i]['timespent']}</td>
        <td><button class="delete"> X </button></td>
        <td><button class="update"> U </button></td>
    </tr>        
    `)
    let row = document.getElementsByClassName('row');
    let del = document.getElementsByClassName('delete');
    let update = document.getElementsByClassName('update');
    del[i].addEventListener('click', ()=>{
        row[i].remove();
    })
    update[i].addEventListener('click', ()=>{
        project.value = timeSheetData[i]['project'];
        task.value = timeSheetData[i]['task'];
        timespent.value = timeSheetData[i]['timespent'];
    })

}

add.addEventListener('click', ()=>{
    content.insertAdjacentHTML('beforeend', `
    <tr class="row">
        <td>${project.value}</td>
        <td>${task.value}</td>
        <td>${timespent.value}</td>    
        <td><button class="delete"> X </button></td>
        <td><button class="update"> U </button></td>
    </tr>    
    `)
    let row = document.getElementsByClassName('row');
    let del = document.getElementsByClassName('delete');
    let i = 0;
    del[i].addEventListener('click', (e)=>{
        console.log(e.target);
        row[i].remove();
    })
    i++;
})

clear.addEventListener('click', ()=>{
    project.value = '';
    task.value = '';
    timespent.value = '';
})