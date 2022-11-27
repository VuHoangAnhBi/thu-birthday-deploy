const moreIcon = document.querySelector('img.more-icon')
const childrenMoreIcons = document.querySelector('.more-options .children');


// modals
const typeModal = {
    wish: 'wish',
    love: 'love'
}

const setTypeModal = (name) => {
    document.querySelector(`.modals .${name}`).style.display = 'inline-block';
    Object.keys(typeModal).filter(key => typeModal[key] !== name).forEach(item => document.querySelector(`.modals .${item}`).style.display = 'none');
}

const modals = document.querySelector('.modals');
const buttonRead = document.querySelector('button.read');

const showClassMore = 'show-icon';

if (moreIcon) {
    moreIcon.onclick = () => {
        if (childrenMoreIcons.classList.contains(showClassMore)) {
            childrenMoreIcons.classList.remove(showClassMore);
        } else {
            childrenMoreIcons.classList.add(showClassMore);
        }
    }
}

if (buttonRead) {
    buttonRead.onclick = () => {
        modals.style.display = 'none';
    }
}
