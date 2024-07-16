// click to navigate to the section

// NOT EFFICIENT
// navLink.forEach(
// function (el) {
// el.addEventListener('click', function (e) {
// e.preventDefault()
// const id = this.getAttribute('href');
// console.log(id);
// document.querySelector(id).scrollIntoView({ behavior: 'smooth' })
// })
// }
// )

// EVENT DELIGATION
// navLinks.addEventListener('click', (e) => {
// e.preventDefault()
// if (e.target.classList.contains('.nav\_\_link')) {
// const id = e.target.getAttribute('href');
// document.querySelector(id).scrollIntoView({ behavior: 'smooth' })
// }
// // console.log(id);
// })

// const randominit = (min, max) => Math.floor(Math.random() \* (max-min+1) + min);

// const randomColor = () => `rgb(${randominit(0,225)},${randominit(0,225)},${randominit(0,225)})`

// randominit()

const randomColor = () => {
let min = 0
let max = 225
const genretor = () => Math.floor(Math.random() \* (max - min + 1) + min)
return `rgb(${genretor()},${genretor()},${genretor()})`
}

// navLink.addEventListener('click', function (e) {
// // this.style.backgroundColor = randomColor()
// console.log('LINK');
// // stop propogation
// // e.stopPropogation
// });

// document.querySelector('.nav\_\_link').addEventListener('click', function (e) {
// this.style.backgroundColor = randomColor()
// // console.log('Link');
// console.log(`Nav Link: ${e.target}`);

// });

// console.log(navLink);

// navLinks.addEventListener('click', function (e) {
// this.style.backgroundColor = randomColor()
// // console.log('Link');
// console.log(`Nav Links: ${e.target}`);

// });

// nav.addEventListener('click', function (e) {
// this.style.backgroundColor = randomColor()
// console.log(`Nav  : ${e.target}`);
// })

// console.log(randomColor());

// const header1 = document.querySelector('h1');
// console.log(header1);
// const alert1 = (e)=>{
// alert('addEventListner: Great! You are reading the heading : D')
// }

// header1.addEventListener('mouseover', alert1)
// header1.removeEventListener('mouseover', alert1)

// setTimeout(()=>header1.addEventListener('mouseover', alert1), 3000)

// scroll to show navbar

// let prevScroll = window.scrollY

// window.addEventListener('scroll', () => {
// const currentScroll = window.scrollY
// if (currentScroll < prevScroll) {
// nav.classList.add('sticky')
// }
// else {
// nav.classList.remove('sticky')
// }
// prevScroll = currentScroll
// })

// New Methode for sticky nav
// const obsCallback = (entries, observer) => {
// entries.forEach(entry => { console.log(entry); })
// }
// const obsOptions = {
// root: null,
// threshold: [0, 0.1, 0.2]
// }

// const observer = new IntersectionObserver(obsCallback, obsOptions)
// observer.observe(section1)

// const header = document.querySelector('header')

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
