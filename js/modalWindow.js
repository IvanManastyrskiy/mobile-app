const OpenBtn = document.querySelector('.header__content-button')
const CloseBtn = document.querySelector('.close-popup')


const popupBg = document.querySelector('.popup-bg')

const formCellBtn = document.querySelector('.btn__form-cell')
OpenBtn.addEventListener('click',function(){
    popupBg.style.display = 'block';
    
})

CloseBtn.addEventListener('click',function(){
    popupBg.style.display = 'none'
})


formCellBtn.addEventListener('click',function(event){
    event.preventDefault()
})

const servicesBlockContentBtn = document.querySelectorAll('.services__block-content__btn')
const serviceSblockContentTitle = document.querySelectorAll('.services__block-content__title')
servicesBlockContentBtn.forEach(element => {
    element.addEventListener('click',function(){
        console.log(element)
    })
});

