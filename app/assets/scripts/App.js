import '../styles/styles.css';
import MobileMenu from './modules/MobileMenu';
// import Modal from './modules/Modal';
import RevealOnScroll from './modules/RevealOnScroll';
import StickyHeader from './modules/StickyHeader';

new MobileMenu();

new RevealOnScroll(document.querySelectorAll(".feature-item"), 75);
new RevealOnScroll(document.querySelectorAll(".testimonial"), 60);

new StickyHeader();

let modal

// new Modal();

document.querySelectorAll(".open-modal").forEach(el => {
  el.addEventListener("click", e => {
    e.preventDefault()
    if (typeof modal == "undefined") {
      // console.log('importing modal from App.js')
      import(/* webpackChunkName: "modal" */ './modules/Modal').then(x => {
        modal = new x.default()
        setTimeout(() => modal.openTheModal(), 20)
      }).catch(() => console.log("There was a problem."))
    } else {
      modal.openTheModal()
    }
  })
})

if (module.hot) {
  module.hot.accept();
}





