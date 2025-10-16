
 //чтобы дом загружался до кода js
document.addEventListener('DOMContentLoaded', function() {
  const menuBtn = document.getElementById('menuBtn');
  const menuBackground = document.getElementById('menuBackground');
  const fullscreenMenu = document.getElementById('fullscreenMenu');
  const body = document.body;
  function toggleMenu() {
    menuBackground.classList.toggle('active');
    fullscreenMenu.classList.toggle('active');
     if (fullscreenMenu.classList.contains('active')) {
     body.style.overflow = 'hidden';
     } 
     else {
    body.style.overflow = 'auto';
    }
  }    
  function closeMenu() {
    menuBackground.classList.remove('active');
    fullscreenMenu.classList.remove('active');
    body.style.overflow = 'auto';
  }  
  menuBtn.addEventListener('click', toggleMenu);  
    const menuLinks = document.querySelectorAll('.menu-nav a');
    menuLinks.forEach(link => {
      link.addEventListener('click', closeMenu);
});
   fullscreenMenu.addEventListener('click', function(e) {
       if (e.target === fullscreenMenu) {
          closeMenu();
       }
});        
   document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeMenu();
        }
   });
});

// Обработчик для моб
 document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', function(e) {
    if (window.innerWidth <= 768) {
// Закрываем другие открытые 
      document.querySelectorAll('.card').forEach(otherCard => {
     if (otherCard !== this) {
       otherCard.classList.remove('active');
    }
});
// переключ
       this.classList.toggle('active');
      }
    });
});
// Закрытие карт кликом на мобилках
        document.addEventListener('click', function(e) {
        if (window.innerWidth <= 768) {
        if (!e.target.closest('.card')) {
          ocument.querySelectorAll('.card').forEach(card => {
          card.classList.remove('active');
           });
   }
  }
});
