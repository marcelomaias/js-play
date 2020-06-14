import Bouncer from 'formbouncerjs';
import Rellax from 'rellax';
import ScrollOut from 'scroll-out';
import messages from './components/formMessages';
import { gsap } from 'gsap';

let items = [];

const validate = new Bouncer('form', {
  messages: messages,
  // Form Submission
  disableSubmit: true, // If true, native form submission is suppressed even when form validates
  // Custom Events
  emitEvents: true // If true, emits custom events
});
// Detect a successful form validation
document.addEventListener(
  'bouncerFormValid',
  function(e) {
    // The successfully validated form
    const form = e.target;
    // If `disableSubmit` is true, you might use this to submit the form with Ajax
    addItem(form);
  },
  false
);

function addItem(form) {
  let item = {
    id: Date.now(),
    nome: form.elements.name.value,
    email: form.elements.email.value
  };
  items.push(item);
  form.reset();
  localStorage.setItem('Items', JSON.stringify(items));
  printItem(items);
}

const printItem = els => {
  const theItems = els
    .map(item => {
      return `
      <div class="item">
        <h2>${item.nome}</h2>
        <p>${item.email}</p>
      </div>
  `;
    })
    .join(' ');

  const container = document.getElementById('container');
  container.innerHTML = theItems;
  document.body.append(container);
};

// ################################### PARALAX SIMPLES

var hero = document.querySelector('.hero');
if (hero) {
  window.addEventListener('scroll', scroll);

  function scroll() {
    let scrolled = window.pageYOffset;

    var coords = '0% ' + (-(scrolled * 0.3) + 'px');
    hero.style.backgroundPosition = coords;

    // hero.style.top = -(scrolled * 0.2) + "px";
    // console.log(scrolled);
  }
}

// ########################################### MODAL

const openEls = document.querySelectorAll('[data-open]');
const closeEls = document.querySelectorAll('[data-close]');
const isVisible = 'is-visible';

for (const el of openEls) {
  el.addEventListener('click', function() {
    const modalId = this.dataset.open;
    document.getElementById(modalId).classList.add(isVisible);
  });
}
for (const el of closeEls) {
  el.addEventListener('click', function() {
    this.parentElement.parentElement.parentElement.classList.remove(isVisible);
  });
}
document.addEventListener('click', e => {
  if (e.target == document.querySelector('.modal.is-visible')) {
    document.querySelector('.modal.is-visible').classList.remove(isVisible);
  }
});

// ########################################## RELLAX

if (document.querySelector('.rellax')) {
  const rellax = new Rellax('.rellax', {
    center: true
  });
}

// ########################################## SCROLL-OUT

ScrollOut();

// ########################################## Filter

function filterSelection(c) {
  var filterContent, i;
  filterContent = document.getElementsByClassName('filterContent');
  if (c == 'all') c = '';
  // Add the "show" class to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < filterContent.length; i++) {
    filterRemoveClass(filterContent[i], 'show');
    if (filterContent[i].className.indexOf(c) > -1)
      filterAddClass(filterContent[i], 'show');
  }
}

// Show filtered elements
function filterAddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(' ');
  arr2 = name.split(' ');
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += ' ' + arr2[i];
    }
  }
}

// Hide elements that are not selected
function filterRemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(' ');
  arr2 = name.split(' ');
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(' ');
}

// Add active class to the current control button (highlight it)
var btnContainer = document.getElementById('filterBtns');
if (btnContainer) {
  btnContainer.addEventListener('click', e => {
    var current = document.getElementsByClassName('filter-active');
    current[0].className = current[0].className.replace(' filter-active', '');
    e.target.className += ' filter-active';
    filterSelection(e.target.dataset.filter);
  });
}

filterSelection('all');

// ############################################### GSAP

gsap.from('.coffeePath', {
  opacity: 0,
  y: '200',
  duration: '.15',
  stagger: '.1',
  ease: 'power4.out'
});
