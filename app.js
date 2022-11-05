const MAX_CHILDREN_COUNT = 15;
const MIN_CHILDREN_COUNT = 2;
const button = document.querySelector('button');
const parent = document.querySelector('.parent');

const createChild = () => {
    const child = document.createElement('div');
    child.classList.add('child');
    return child;
}

const createChildren = (count) => {
    for(let i = 0; i < count; i++) {
        parent.appendChild(createChild());
    }
}

button.addEventListener('click', () => {
    const count = parent.childElementCount;
    parent.innerHTML = '';

    if(count === MAX_CHILDREN_COUNT) {
        createChildren(MIN_CHILDREN_COUNT);
        return;
    }
    createChildren(MAX_CHILDREN_COUNT);
});

window.onload = () => {
    createChildren(MAX_CHILDREN_COUNT)
}

