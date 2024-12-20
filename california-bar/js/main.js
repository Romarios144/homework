// Initialize Swiper 

new Swiper('.gallery__swiper', {

  spaceBetween: 15,
  slidesPerView: 1,


  navigation: {
    nextEl: '.gallery__next',
    prevEl: '.gallery__prev',
  },

  breakpoints: {
    426: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    769: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    1025: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  }
});


// Табы============================================================
const tabControls = document.querySelector('.tab-controls');

tabControls.addEventListener('click', toggleTab);

function toggleTab(e) {
  const tabControl = e.target.closest('.tab-controls__link');

  if (!tabControl) return;
  e.preventDefault();
  if (tabControl.classList.contains('tab-controls__link--active')) return;

  const tabContentID = tabControl.getAttribute('href');
  const tabContent = document.querySelector(tabContentID);
  const activeControl = document.querySelector('.tab-controls__link--active');
  const activeContent = document.querySelector('.tab-content--show');

  if (activeControl) {
    activeControl.classList.remove('tab-controls__link--active');
  }
  if (activeContent) {
    activeContent.classList.remove('tab-content--show');
  }

  tabControl.classList.add('tab-controls__link--active');
  tabContent.classList.add('tab-content--show');

  const accordionLists = document.querySelectorAll('.accordion-list');
  accordionLists.forEach(accordionList => {
    const openedItem = accordionList.querySelector('.accordion-list__item--opened');
    if (openedItem) {
      const accordionContent = openedItem.querySelector('.accordion-list__content');
      openedItem.classList.remove('accordion-list__item--opened');
      accordionContent.style.maxHeight = null;
    }
  });
}

// Аккордеон=======================================================
const accordionLists = document.querySelectorAll('.accordion-list');

accordionLists.forEach(el => {
  el.addEventListener('click', (e) => {
    const accordionList = e.currentTarget;
    const accordionOpenedItem = accordionList.querySelector('.accordion-list__item--opened');
    const accordionOpenedContent = accordionList.querySelector('.accordion-list__item--opened .accordion-list__content');

    const accordionControl = e.target.closest('.accordion-list__control');
    if (!accordionControl) return;
    e.preventDefault();
    const accordionItem = accordionControl.parentElement;
    const accordionContent = accordionControl.nextElementSibling;

    if (accordionOpenedItem && accordionItem !== accordionOpenedItem) {
      accordionOpenedItem.classList.remove('accordion-list__item--opened');
      accordionOpenedContent.style.maxHeight = null;
    }
    accordionItem.classList.toggle('accordion-list__item--opened');

    if (accordionItem.classList.contains('accordion-list__item--opened')) {
      accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
    } else {
      accordionContent.style.maxHeight = null;
    }
  });
});



