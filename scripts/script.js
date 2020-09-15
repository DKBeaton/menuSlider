// Element variables
const menuItems = document.querySelectorAll('.menu-item');
const overlay = document.querySelector('.overlay');

// Index variable
let index = 0;

menuItems.forEach((item) => {
  item.addEventListener('click',function () {
    
    // Remove other active classes
    for (var i = 0; i < menuItems.length; i++) {
      if (menuItems[i].classList.contains('active')) {
        menuItems[i].classList.remove('active');
      }
    }
    
    // Get index position
    // Using slice since menuItems is an array like object
    index = Array.prototype.slice.call(menuItems).indexOf(item);

    // Add active class to clicked item
    item.classList.add('active');  
    
    // Check which menu item was clicked and add certain styles
    if (index === 2 || index === 3 || index === 4) {
      menuItems[1].classList.add('feed-left');
      menuItems[2].classList.add('saved-left');
    } else {
      menuItems[1].classList.remove('feed-left');
      menuItems[2].classList.remove('saved-left');
    }
    
    // Move overlay by 87px per item
    overlay.style.transform = 'translateY(-50%) translateX(' + 87 * index + 'px)';

  });
});