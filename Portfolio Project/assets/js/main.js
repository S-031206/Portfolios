/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
	navToggle = documentgetElementById('nav-toggle'),
	navClose = documentgetElementById('nav-close')

/*=============== MENU SHOW ===============*/
if(navToggle){
	navToggle.addEventListener('click', () =>{
		navMenu.classList.add('show-menu')
	})
}

/*=============== MENU HIDDEN ===============*/
if(navClose){
	navClose.addEventListener('click', () =>{
		navMenu.classList.remove('show-menu')
	})
}


/*=============== CHANGE BACKGROUND HEADER ===============*/

const scrollHeader = () ->{
	const header = document.getElementById('header')

this.scrollY >= 50 ? header.classList.add("scroll-header')
			header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)


/*=============== DARK LIGHT THEME ===============*/ 
