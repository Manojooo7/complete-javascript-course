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

// Creating and inserting an element
// const message = document.createElement('div');
// message.classList.add('cookie-message');
// message.innerHTML = `We use cookies for improved functionally and analytics. <button class = "btn btn--close-cookie">Got It!</button>`
// prepend add the elemt as an first elemt and append do the oppsoite
// header.prepend(message)
// header.append(message)
// header.after(message)
// header.before(message)

// document.querySelector('.btn--close-cookie').addEventListener('click', ()=> message.remove())

// hero scroll

btnScrollTo.addEventListener('click', (e) => {
  const s1coords = section1.getBoundingClientRect()
  // console.log(e.target.getBoundingClientRect());
  // console.log('CurrentScroll (X/Y)', window,scrollX,scrollY);
  // console.log('height/width viwport', document.documentElement.clientHeight, document.documentElement.clientWidth);  

  // window.scrollTo(s1coords.left + window.scrollX, s1coords.top + window.scrollY);
  // window.scrollTo({
  //   left: s1coords.left + window.scrollX,
  //   top: s1coords.top + window.scrollY,
  //   behavior: 'smooth'
  // })

  // Leatest Methods
  section1.scrollIntoView({ behavior: 'smooth' })
})

// const header1 = document.querySelector('h1');
// console.log(header1);
// const alert1 = (e)=>{
//   alert('addEventListner: Great! You are reading the heading : D')
// }

// header1.addEventListener('mouseover', alert1)
// header1.removeEventListener('mouseover', alert1)

// setTimeout(()=>header1.addEventListener('mouseover', alert1), 3000)



// scroll to show navbar

let prevScroll = window.scrollY

window.addEventListener('scroll', () => {
  const currentScroll = window.scrollY
  if (currentScroll > 300) {
    nav.classList.add('sticky')
  }
  else {
    nav.classList.remove('sticky')
  }
  prevScroll = currentScroll
})


// click to navigate to the section

// NOT EFFICIENT
// navLink.forEach(
//   function(el){
//     el.addEventListener('click', function(e){
//       e.preventDefault()
//       const id = this.getAttribute('href');
//       console.log(id);
//       document.querySelector(id).scrollIntoView({behavior: 'smooth'})
//     })
//   }
// )

// EVENT DELIGATION
// navLinks.addEventListener('click', (e) => {
//   e.preventDefault()
//   if (e.target.classList.contains('.nav__link')) {
//     const id = e.target.getAttribute('href');
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' })
//   }
//   // console.log(id);
// })

// const randominit = (min, max) => Math.floor(Math.random() * (max-min+1) + min);

// const randomColor = () => `rgb(${randominit(0,225)},${randominit(0,225)},${randominit(0,225)})`



// randominit()


const randomColor = () => {
  let min = 0
  let max = 225
  const genretor = () => Math.floor(Math.random() * (max - min + 1) + min)
  return `rgb(${genretor()},${genretor()},${genretor()})`
}

// navLink.addEventListener('click', function (e) {
//   // this.style.backgroundColor = randomColor()
//   console.log('LINK');
//   // stop propogation
//   // e.stopPropogation
// });

// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor()
//   // console.log('Link');
//   console.log(`Nav Link: ${e.target}`);


// });

// console.log(navLink);

// navLinks.addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor()
//   // console.log('Link');
//   console.log(`Nav Links: ${e.target}`);

// });

// nav.addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor()
//   console.log(`Nav  : ${e.target}`);
// })

console.log(randomColor());


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


// Menu Fading Animation

// const activeMenu = function (e) {
//   if (e.target.classList.contains('nav__link')) {
//     const link = e.target;
//     const siblings = [...link.closest('.nav').querySelectorAll('.nav__link')]
//     const logo = link.closest('.nav').querySelector('img')
//     const allElemnts = [...siblings, logo]
//     allElemnts.forEach(el => {
//       if (el !== link) el.style.opacity = this
//     }
//     )
//     // console.log(allElemnts);
//   }
// }

// const activeMenu = (e) => {
//   if (e.target.classList.contains('nav__link')) {
//     const link = e.target;
//     const siblings = [...link.closest('.nav').querySelectorAll('.nav__link')];
//     const logo = link.closest('.nav').querySelector('img');
//     const allElements = [...siblings, logo];
//     allElements.forEach(el => {
//       if (el !== link) el.style.opacity = this;
//     });
//   }
// }

// nav.addEventListener('mouseover', activeMenu.bind(0.5))
// nav.addEventListener('mouseout', activeMenu.bind(1))

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
};



// const nav = document.querySelector('.nav');

nav.addEventListener('mouseover', activeMenu(0.5));
nav.addEventListener('mouseout', activeMenu(1));

