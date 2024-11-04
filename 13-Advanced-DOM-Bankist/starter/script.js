'use strict';

///////////////////////////////////////
// selecting element


const header = document.querySelector('.header')
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1')
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContents = document.querySelectorAll('.operations__content');
const nav = document.querySelector('.nav')
const navLinks = document.querySelector('.nav__links');
const navLink = document.querySelectorAll('.nav__link');
const allSection = document.querySelectorAll('.section');
const imgTarget = document.querySelectorAll('img[data-src]')
const btnRight = document.querySelector('.slider__btn--right')
const btnLeft = document.querySelector('.slider__btn--left')
const dotContainer = document.querySelector('.dots')
// console.log(nav);
// Model Window for opening account

const openModal = function (e) {
  e.preventDefault()
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal))

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

btnScrollTo.addEventListener('click', (e) => {
  section1.scrollIntoView({ behavior: 'smooth' })
})

// Navbar Animation
const navHeight = nav.getBoundingClientRect().height
console.log(navHeight);
const stickNav = (entries) => {
  const [entry] = entries
  if (!entry.isIntersecting) {
    nav.classList.add('sticky')
  }
  else nav.classList.remove('sticky')
}

const headerObserver = new IntersectionObserver(stickNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`
})

headerObserver.observe(header)


// Active Menu
const activeMenu = (opacity) => (e) => {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = [...link.closest('.nav').querySelectorAll('.nav__link')];
    const logo = link.closest('.nav').querySelector('img');
    const allElements = [...siblings, logo];
    allElements.forEach(el => {
      if (el !== link) el.style.opacity = opacity;
    });
  }
}

nav.addEventListener('mouseover', activeMenu(0.5))
nav.addEventListener('mouseout', activeMenu(1))




// tabbed container
tabsContainer.addEventListener('click', (e) => {
  const clicked = e.target.closest('.operations__tab');

  // console.log(clicked);
  //  guard close
  if (!clicked) return

  // removing active classes
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabsContents.forEach(c => c.classList.remove('operations__content--active'))
  // Active Tab
  clicked.classList.add('operations__tab--active');

  // Active content area
  const contentArea = document.querySelector(`.operations__content--${clicked.dataset.tab}`)
  contentArea.classList.add('operations__content--active')
});

// Reavel Section when scroll
const revealSection = (entries, observer) => {
  const [entry] = entries;
  if (!entry.isIntersecting) return
  entry.target.classList.remove('section--hidden')
  observer.unobserve(entry.target)
}

const sectionObserver = new IntersectionObserver(revealSection,
  {
    root: null,
    threshold: 0.13
  })

allSection.forEach((section) => {
  sectionObserver.observe(section);
  // section.classList.add('section--hidden')
})


// Lazy loading images

const loadImg = (entries, observer) => {
  const [entry] = entries;
  console.log(entry);
  if (!entry.isIntersecting) return
  // replace the img source
  entry.target.src = entry.target.dataset.src
  // Removing the lazy calss
  entry.target.addEventListener('load', () => entry.target.classList.remove('lazy-img'))
  observer.unobserve(entry.target)
}

const lazyLoad = new IntersectionObserver(loadImg, { root: null, threshold: 0 })


imgTarget.forEach(img => lazyLoad.observe(img))


// Slider component

const slides = document.querySelectorAll('.slide');
const createDots = () =>{
  slides.forEach(function(_, i){
    console.log(i);
    dotContainer.insertAdjacentHTML(
      'beforeend',
      `<button class="dots__dot" data-slide="${i}"></button>`
    )
  })
}
let currentSlide = 0;
const maxSlide = slides.length


const gotoSlide = (slide) =>{
  slides.forEach((s, i)=> {
    s.style.transform = `translateX(${100 * (i - slide)}%)`
  })
}

gotoSlide(0)


createDots()
console.log(dotContainer);


const nextSlide = ()=>{
    if(currentSlide === maxSlide-1){
      currentSlide = 0
    }else{
      currentSlide++
    }
    gotoSlide(currentSlide)
}

const prevSlide = () =>{
  if (currentSlide === 0) {
    currentSlide = maxSlide-1
  }else{
    currentSlide--
  }
  gotoSlide(currentSlide)
}
btnRight.addEventListener('click', nextSlide)
btnLeft.addEventListener('click', prevSlide)

// Key Evnets to chnage the slide
document.addEventListener('keydown', (e)=>{
  e.key === 'ArrowLeft' && prevSlide()
  e.key === 'ArrowRight' && nextSlide()
})

dotContainer.addEventListener('click', (e)=>{
  if(e.target.classList.contains("dots__dot")){
    const {slide} = e.target.dataset;
    console.log(slide);
    gotoSlide(slide)
  }
})