export const $addBtn = document.querySelector('._add');
export const $curBtn = document.querySelector('._current');
export const $doneBtn = document.querySelector('._done');
export const $textArea = document.querySelector('.app__text');
export const $list = document.querySelector('.app__list');

export function Task(text, id, condition = '') {
    this.condition = condition;
    this.text = text;
    this.id = id;


}

export const taskArr = [];
