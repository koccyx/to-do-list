const addBtn = document.querySelector('._add');
const curBtn = document.querySelector('._current');
const doneBtn = document.querySelector('._done');
const textArea = document.querySelector('.app__text');
const list = document.querySelector('.app__list');

function Task(text, condition = '') {
    this.condition = condition;
    this.text = text;
}

const taskArr = [];

function update() {
    list.innerHTML = '';
    for(let obj of taskArr) {
        list.insertAdjacentHTML("afterbegin",`
        <div class="task ${obj.condition}">
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


addBtn.addEventListener('click', (event) => {
    if(textArea.value == '') { return }

    let tempTask = new Task(textArea.value);

    console.log(taskArr);
    textArea.value = '';
    taskArr.push(tempTask);
    update();
})

