
// CLASS Decloration
class Scroll{
    constructor(arg){
        this.top = arg.top;[]
        if (typeof arg.elem == 'string') {
            this.elem = document.querySelector(arg.elem);
        } else if(arg.elem instanceof HTMLElement){
            this.elem = arg.elem 
        }
        this.unit = arg.unit;
        this.elem.style.position = 'fixed';
        this.elem.style.zIndex = 100;
        // this.elem.style.top = this.scroll();
        window.addEventListener('scroll', () => scroll())
        window.addEventListener('resize', () => scroll())
    }
    scroll(){
        this.winodow = window.innerHeight;
        if (this.winodow - scrollY > 0) {
            this.elem.style.top = this.winodow - scrollY + 'px';
        }else{
            this.elem.style.top = 0
        }
    };
    scrollNumber(){
        if (this.unit == 'px'){
            return this.top >= 0 ? this.top : 0;
        }else if (this.unit == '%') {
            return window.innerHeight - this.elem.clientHeight;

        }}
}



// HTML Elements
const burgerBtn  = document.querySelector('.btn-burger-menu'),
      burgerMenu = document.querySelector('.mobile-nav');


// CLASS Elements
const navScroll = new Scroll({
    elem: '.header__nav',
    top: 100,
    unit: '%',

})








// Btn Actions
burgerBtn.addEventListener('click', ()=>{
    if (burgerMenu.classList.contains('active')) {
            burgerMenu.classList.remove('active');

    }else{
        burgerMenu.classList.add('active')
    }
})