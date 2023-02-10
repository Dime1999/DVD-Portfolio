/*This code is part of the portfolio tutorial: https://www.youtube.com/watch?v=xV7S8BhIeBo*/
const secs = document.querySelectorAll('.section');
const secBtns = document.querySelectorAll('.controls');
const secBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');

//This function handles transitions between pages
function PageTransitions() {
    //Button click active class
    for(let i = 0; i < secBtn.length; i++) {
        secBtn[i].addEventListener('click', function() {
            let currBtn = document.querySelectorAll('.active-btn');
            currBtn[0].className = currBtn[0].className.replace('active-btn', '');
            this.className += ' active-btn';
        })
    }

    //Sections Active Class
    allSections.addEventListener('click', (event) =>{
        const id = event.target.dataset.id;
        if(id) {
         //Remove secondary color(selected indicator) from the other btns
         secBtns.forEach((btn) => {
            btn.classList.remove('active');
         })
         event.target.classList.add('active');

         //Hide other sections
         secs.forEach((section) => {
            section.classList.remove('active');
         })
         
         const element = document.getElementById(id);
         element.classList.add('active');
        }
    })

    //Theme Control
    const themeBtn = document.querySelector('.theme-btn');
    themeBtn.addEventListener('click', () => {
        let element = document.body;
        let table = document.querySelector('table, th, td');
        table.classList.toggle('change-table');
        element.classList.toggle('change-theme');
        element.classList.toggle("change-text");
    })
}

PageTransitions();