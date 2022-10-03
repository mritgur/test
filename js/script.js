document.addEventListener('DOMContentLoaded', function () {
  const nmi = document.querySelectorAll('.nav__menu_item'),
          searchA = document.querySelector('.header__search_a'),
          search = document.querySelector('.search');
  
          nmi.forEach((i)=>{
            const submenu1 = i.querySelector('.nav_submenu_1');
            const submenu2 = i.querySelector('.nav_submenu_2');
            const submenu7 = i.querySelector('.nav_submenu_7');
            if (submenu1) {
              i.addEventListener('mouseenter',() =>
              {
                submenu1.classList.add('nav_submenu_1_active');
              } );
              i.addEventListener('mouseleave',() =>
              {
                submenu1.classList.remove('nav_submenu_1_active');
              } );
            }
            else  if  (submenu2) {
              i.addEventListener('mouseenter',() =>
              {
                submenu2.classList.add('nav_submenu_2_active');
              } );
              i.addEventListener('mouseleave',() =>
              {
                submenu2.classList.remove('nav_submenu_2_active');
              } );
            } 
            else  if  (submenu7) {
              i.addEventListener('mouseenter',() =>
              {
                submenu7.classList.add('nav_submenu_7_active');
              } );
              i.addEventListener('mouseleave',() =>
              {
                submenu7.classList.remove('nav_submenu_7_active');
              } );
            }
          });
          searchA.addEventListener('click', (e) => {
            e.preventDefault();
            search.classList.add('search_active');
          } );
          window.addEventListener('click', (e)=>{
            if (e.target == search) {
              search.classList.remove('search_active');
            }});
  
      });