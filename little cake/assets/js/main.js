const backToTopButton = document.querySelector('#backToTopButton');

const scrollToTopPage = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
}

backToTopButton.addEventListener('click', scrollToTopPage, false);

const list = document.querySelector('#dropDownList');
const listItems = list.querySelectorAll('.drop-down-list__list-item');

const changeActiveList = (e) => {
    const newListNumber = e.target.parentNode.parentNode.dataset['number'];
    let oldListNumber = 0;

    listItems.forEach(item => {
        const header = item.querySelector('.header');
        const internalList = item.querySelector('.internal-list');
        const image = item.querySelector('img');

        if (header.classList.contains('header--active')) {
            oldListNumber = item.dataset['number'];
        }

        header.classList.remove('header--active');
        internalList.classList.remove('internal-list-active')
        image.src="./assets/images/arrow-down-black.svg"
    })

    if (oldListNumber !== newListNumber) {
        const header = e.target.parentNode.parentNode.querySelector('.header');
        const internalList = e.target.parentNode.parentNode.querySelector('.internal-list');
        const image = e.target.parentNode.parentNode.querySelector('img');

        header.classList.add('header--active');
        internalList.classList.add('internal-list-active')
        image.src="./assets/images/arrow-down-pink.svg" 
    }
}

listItems.forEach(item => {
    item.addEventListener('click', changeActiveList, false);
})

const copyAddress = document.querySelector('#copyAddress');

const copyText = () => {
    const text = document.querySelector('#copyAddressText').innerText;
    const elem = document.createElement('textarea');
    elem.value = text;
    document.body.appendChild(elem);
    elem.select();
    document.execCommand('copy');
    document.body.removeChild(elem);
}

copyAddress.addEventListener('click', copyText, false);

const changeCopyImage = (color) => {
    const copyImage = document.querySelector('#copyImage');
    if (color == 'pink') {
        copyImage.setAttribute('src', './assets/images/copy - pink.svg')
    }
    else {
        copyImage.setAttribute('src', './assets/images/copy.svg')
    }
}

copyAddress.addEventListener('mouseenter', changeCopyImage.bind(null, 'pink'), false);
copyAddress.addEventListener('mouseleave', changeCopyImage.bind(null, 'white'), false);

const changeBackToTopButtonImage = (color) => {
    const backToTopImage = document.querySelector('#backToTopImage');
    if (color == 'pink') {
        backToTopImage.setAttribute('src', './assets/images/arrow-top.svg')
    }
    else {
        backToTopImage.setAttribute('src', './assets/images/arrow-top - white.svg')
    }
}

backToTopButton.addEventListener('mouseenter', changeBackToTopButtonImage.bind(null, 'white'), false);
backToTopButton.addEventListener('mouseleave', changeBackToTopButtonImage.bind(null, 'pink'), false);


