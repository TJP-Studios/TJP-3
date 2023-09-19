const awardSelectLeft = document.querySelector ('.award-select-lft')
const awardCartLeft = document.querySelector ('.award-cart-lft')
const awardSelectMiddle = document.querySelector ('.award-select-md')
const awardCartMiddle = document.querySelector ('.award-cart-md')
const awardSelectRight = document.querySelector ('.award-select-rt')
const awardCartRight = document.querySelector ('.award-cart-rt')

awardSelectLeft.addEventListener('click', ()=> {
    awardCartLeft.classList.toggle('hide');
}
)

awardSelectMiddle.addEventListener('click', ()=> {
    awardCartMiddle.classList.toggle('hide');
}
)

awardSelectRight.addEventListener('click', ()=> {
    awardCartRight.classList.toggle('hide');
}
)