export const $addBtn = document.querySelector('._add');
export const $curBtn = document.querySelector('._currentList');
export const $doneBtn = document.querySelector('._doneList');
export const $textArea = document.querySelector('.app__text');
export const $list = document.querySelector('.app__list');
export const $doneList = document.querySelector('.app__doneList');
export const $listContainer = document.querySelector('.app__left');

export function Task(text, id, condition = '') {
    this.condition = condition;
    this.text = text;
    this.id = id;
}

export const taskArr = [];
