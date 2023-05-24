import {taskArr, Task, $list, $textArea, $curBtn, $doneBtn, $addBtn, $doneList, $listContainer} from './const.js'

function update() {
    $list.innerHTML = '';
    $doneList.innerHTML = '';
    console.log($doneList);
    for(let obj of taskArr) {
        if (obj.condition == '_done') {
            $doneList.insertAdjacentHTML("afterbegin",`
            <div class="task ${obj.condition}" data-id="${obj.id}">
                <p class="task__text">${obj.text}</p>
                <div class="task__btn_container">
                    <button class="task__btn btn__done"><i class="fa-solid fa-check"></i></button>
                    <button class="task__btn btn__remove"><i class="fa-solid fa-xmark"></i></button>
                </div>
            </div>
            `
            )
         } else {
            $list.insertAdjacentHTML("afterbegin",`
                <div class="task ${obj.condition}" data-id="${obj.id}">
                    <p class="task__text">${obj.text}</p>
                    <div class="task__btn_container">
                        <button class="task__btn btn__done"><i class="fa-solid fa-check"></i></button>
                        <button class="task__btn btn__remove"><i class="fa-solid fa-xmark"></i></button>
                    </div>
                </div>
                `
            )
         }
    }
}


$addBtn.addEventListener('click', (event) => {
    if($textArea.value == '') { return }

    let tempTask = new Task($textArea.value, Math.floor(Math.random() * 10000));

    $textArea.value = '';
    taskArr.push(tempTask);
    update();
    $list.hidden = false;
    $doneList.hidden = true;
})


$listContainer.addEventListener('click', (event) => {
    if (!taskArr.length) return;
    if (!event.target.closest('.btn__remove')) return;

    let $task = event.target.closest('.task');

    taskArr.splice(taskArr.findIndex((item) => item.id == $task.dataset.id), 1)
    update();
})

$listContainer.addEventListener('click', (event) => {
    if (!taskArr.length) return;
    if (!event.target.closest('.btn__done')) return;

    let $task = event.target.closest('.task');



    let taskObj = taskArr[taskArr.findIndex((item) => item.id == $task.dataset.id)];

    if (taskObj.condition == '') {
        taskObj.condition = '_done';
    } else {
        taskObj.condition = '';
    }
    console.log(taskObj.condition);
    update();
})


$doneBtn.addEventListener('click', (event) => {
    $list.hidden = true;
    $doneList.hidden = false;
})

$curBtn.addEventListener('click', (event) => {
    $list.hidden = false;
    $doneList.hidden = true;
})
