

// HEADER TOGGLE
const burger = document.querySelector(".header__toggle");
const menu = document.querySelector(".header__menu");
const menuLinks = document.querySelectorAll(".header__nav-link");
burger.addEventListener("click", (event) => {
  event.preventDefault();
  menu.classList.toggle("active");
  burger.classList.toggle("active");
});
menuLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const targetId = link.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
      });
    }
    menu.classList.remove("active");
    burger.classList.remove("active");
  });
});

// MODAL 
var modal = document.getElementById('myModal');
var openModal = document.getElementById("openModal");
var closeModal = document.getElementsByClassName("modal__heading-close")[0];
openModal.onclick = function(event) {
  event.preventDefault(); 
  modal.style.display = "block";
}
closeModal.onclick = function(event) {
  event.preventDefault(); 
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// SCROLL TOP BUTTON
window.addEventListener('scroll', function() {
  var button = document.querySelector('.button---scrollTop');
  if (window.scrollY > 300) {
      button.classList.add('show');
  } else {
      button.classList.remove('show');
  }
});
function scrollToTop() {
  window.scrollTo({
      top: 0,
      behavior: 'smooth'
  });
}

// SCROLL TOP FIEXD
let lastScrollTop = 0;
window.addEventListener("scroll", function() {
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
  if (currentScroll > lastScrollTop && currentScroll > 100) {
    document.querySelector('.header__top').style.top = '-91.5px';
  } else {
    document.querySelector('.header__top').style.top = '0';
  }
  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; 
}, false);

// CONNECT CHOICES
const initializeChoices = (selector, options) => {
  const element = document.querySelector(selector);
  const choices = new Choices(element, {
    searchEnabled: false,
  })
};
initializeChoices('.contact__form-select', {
  searchEnabled: false,
});
initializeChoices('.contact__form-select2', {
  searchEnabled: true,
});


// CONNECT INPUTMASK
let inputs = document.querySelectorAll('input[type="tel"]');
let im = new Inputmask('+7 (999) 999-99-99');
im.mask(inputs);

// ACTIV HERO CONTACT
$(document).ready(function(){
  $('#heroContact').hide();
  $('#openHeroContact').click(function(){
    $('#heroContact').slideToggle('slow');
    $('.arrow-icon').toggleClass('rotated'); 
    return false;
  });
});

// ACCORDION 
$(function() {
  'use strict';
   var Accordion = function(el, multiple) {
    this.el = el || {}; this.multiple = multiple || false;
    var links = this.el.find('.work__accrodion-heading');
    links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown);
  };
  Accordion.prototype.dropdown = function(e) {
    e.preventDefault();
    var $el = e.data.el, $this = $(this), $next = $this.next();
    $next.slideToggle();
    $this.parent().toggleClass('open');
    if (!e.data.multiple) {
      $el.find('.work__accrodion-body').not($next).slideUp().parent().removeClass('open');
    }
  };
  var accordion = new Accordion($('#accordion'), false);
});
