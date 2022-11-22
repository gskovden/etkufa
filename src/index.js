import './pages/index.css';

// выделение активного меню
document.querySelectorAll('.header__link').forEach(link => {
  if(link.href === window.location.href){
    link.setAttribute('aria-current', 'page')
  }
})

document.querySelectorAll('.type__item').forEach(link => {
  if(link.href === window.location.href){
    link.setAttribute('aria-current', 'page')
  }
})

function burger() {
	const burgerButton = document.querySelector('.burger__btn');
	const headerBurger = document.querySelector('.header__burger');
	
	burgerButton.addEventListener('click', function() {
		burgerButton.classList.toggle('burger__btn_active');
		headerBurger.classList.toggle('header__burger_active');
	});
}

burger();