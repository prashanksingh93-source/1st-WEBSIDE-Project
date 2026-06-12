const menuBtn=document.querySelector('.menu-btn');
const closeBtn=document.querySelector('.close-btn');
const mobileMenu=document.querySelector('.mobile-menu');
const overlay=document.querySelector('.overlay');

menuBtn.addEventListener('click',()=>{
mobileMenu.classList.add('active');
overlay.classList.add('active');
});

function closeMenu(){
mobileMenu.classList.remove('active');
overlay.classList.remove('active');
}

closeBtn.addEventListener('click',closeMenu);
overlay.addEventListener('click',closeMenu);