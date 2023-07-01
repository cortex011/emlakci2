

const menubtn = document.querySelector('#ham_menu_btn');
const menu = document.querySelector('#head_menu');

menubtn.addEventListener('click', function(){
    menu.classList.toggle('active');

})