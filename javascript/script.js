var sideBar = document.querySelector('.side-bar');

function sideBarIcon() {
    sideBar.classList.add('side-bar-display')
}

function removeSideBar() {
    sideBar.classList.remove('side-bar-display')
}

var sliderImage = document.querySelectorAll('.slider-img');

var rightArrow = document.getElementById('right-arrow');

var leftArrow = document.getElementById('left-arrow');

var i = 0;

rightArrow.addEventListener('click',() => {
    sliderImage[i].classList.remove('slider-active-img');
    i++

    if (i > sliderImage.length-1) {
        i = 0;
    }

    sliderImage[i].classList.add('slider-active-img')
})

leftArrow.addEventListener('click',() => {
    sliderImage[i].classList.remove('slider-active-img');
    i--

    if (i < 0) {
        i = sliderImage.length-1;
    }

    sliderImage[i].classList.add('slider-active-img')    
})

let contentBox = document.querySelectorAll('.box');

window.addEventListener('scroll', appear);

function appear() {
    let windowHeight = window.innerHeight;

    let trigger = (windowHeight / 5) * 4;

    contentBox.forEach(element => {
        let boxTop = element.getBoundingClientRect().top;

        if (boxTop < trigger) {
            element.classList.add('appear')
        }
        else {
            element.classList.remove('appear')
        }
    })
}