const backToTopButton = document.querySelector('#backToTopButton');

const scrollToTopPage = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
}

backToTopButton.addEventListener('click', scrollToTopPage, false);

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
    if (color == 'brown') {
        copyImage.setAttribute('src', './assets/images/copy - white.svg')
    }
    else {
        copyImage.setAttribute('src', './assets/images/copy.svg')
    }
}

copyAddress.addEventListener('mouseenter', changeCopyImage.bind(null, 'brown'), false);
copyAddress.addEventListener('mouseleave', changeCopyImage.bind(null, 'white'), false);

const changeBackToTopButtonImage = (color) => {
    const backToTopImage = document.querySelector('#backToTopImage');
    if (color == 'blue') {
        backToTopImage.setAttribute('src', './assets/images/arrow - top.svg')
    }
    else {
        backToTopImage.setAttribute('src', './assets/images/arrow - top - white.svg')
    }
}

backToTopButton.addEventListener('mouseenter', changeBackToTopButtonImage.bind(null, 'white'), false);
backToTopButton.addEventListener('mouseleave', changeBackToTopButtonImage.bind(null, 'blue'), false);

const findUsListItems = document.querySelectorAll('.find-us ul li');

const changeFindUsArrowColor = (color, element) => {
    const image = element.target.children[2].children[1];
    console.log(image)
    if (color == 'brown') {
        image.setAttribute('src', './assets/images/arrow - right.svg')
    }
    else {
        image.setAttribute('src', './assets/images/arrow - right - white.svg')
    }
}

findUsListItems.forEach(item => {
    item.addEventListener('mouseenter', changeFindUsArrowColor.bind(this, 'white'), false);
})

findUsListItems.forEach(item => {
    item.addEventListener('mouseleave', changeFindUsArrowColor.bind(this, 'brown'), false);
})

