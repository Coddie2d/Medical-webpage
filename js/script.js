let burgerMenu = document.querySelector('.header__burgerMenu');
let navBody = document.querySelector('.header__navBody');
let menuLink = document.querySelectorAll('.header__menu');


window.addEventListener('resize',function (){
    if(innerWidth < 700){
    let footer__cartResolution = document.querySelector('.footer__body').clientWidth / 3;
    footer__cartResolution = String(footer__cartResolution);
    let cartResolution = document.querySelectorAll('.cartResolution');
    
    cartResolution.forEach(item =>{
        item.style.width = footer__cartResolution + 'px';
    })
   
    }
})


function burgerClick(){
     
    if(burgerMenu){
            
            burgerMenu.addEventListener('click',function(e){
                document.body.classList.toggle('lock');
                burgerMenu.classList.toggle('active');
                navBody.classList.toggle('active');
                
        
                
            })
        }
        menuLink.forEach(item =>{
                item.addEventListener('click',function(e){
                    console.log(e.target.classList)
                    if(e.target.classList.contains('header__menu')){
                        document.body.classList.remove('lock');
                        burgerMenu.classList.remove('active');
                        navBody.classList.remove('active');
                        
                    }
                })
            })
    }
burgerMenu.addEventListener('click',burgerClick());



