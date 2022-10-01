document.addEventListener('DOMContentLoaded', function () {
const nmi = document.querySelectorAll('.nav__menu_item'),
        nav_submenu1 = document.querySelector('.nav_submenu_1'),
        nav_submenu2 = document.querySelector('.nav_submenu_2'),
        nav_submenu7 = document.querySelector('.nav_submenu_7'),
        searchA = document.querySelector('.header__search_a'),
        search = document.querySelector('.search');
 


    nmi[0].addEventListener('mouseenter', () => 
        {
          nav_submenu1.classList.add('nav_submenu_1_active');
        });
    nmi[0].addEventListener('mouseleave', () => 
        {
          nav_submenu1.classList.remove('nav_submenu_1_active');
        });


    nmi[1].addEventListener('mouseenter', () => 
        {
          nav_submenu2.classList.add('nav_submenu_2_active');
        });
    nmi[1].addEventListener('mouseleave', () => 
        {
          nav_submenu2.classList.remove('nav_submenu_2_active');
        });



    nmi[6].addEventListener('mouseenter', () => 
        {
          nav_submenu7.classList.add('nav_submenu_7_active');
        });
    nmi[6].addEventListener('mouseleave', () => 
        {
          nav_submenu7.classList.remove('nav_submenu_7_active');
        });

        searchA.addEventListener('click', (e) => {
          e.preventDefault();
          search.classList.add('search_active');
        } );
       
        window.onclick = function(event) {
          if (event.target == search) {
            search.classList.remove('search_active');
          }
      };
    });