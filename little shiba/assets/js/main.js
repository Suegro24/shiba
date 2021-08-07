const backToTopButton = document.querySelector('#backToTopButton');

const scrollToTopPage = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
}

backToTopButton.addEventListener('click', scrollToTopPage, false);

const list = document.querySelector('#dropDownList');
const listItems = list.querySelectorAll('.drop-down-list__list-item');

const changeActiveList = (e) => {
    listItems.forEach(item => {
        const header = item.querySelector('.header');
        const internalList = item.querySelector('.internal-list');
        const image = item.querySelector('img');

        header.classList.remove('header--active');
        internalList.classList.remove('internal-list-active')
        image.src="./assets/images/arrow-down-black.svg"
    })
    const header = e.target.parentNode.parentNode.querySelector('.header');
    const internalList = e.target.parentNode.parentNode.querySelector('.internal-list');
    const image = e.target.parentNode.parentNode.querySelector('img');

    header.classList.add('header--active');
    internalList.classList.add('internal-list-active')
    image.src="./assets/images/arrow-down-blue.svg"    
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

