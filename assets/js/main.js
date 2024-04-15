/*=============== SHOW MENU ===============*/
const navMenu=document.getElementById('nav-menu'),
      navToggle=document.getElementById('nav-toggle'),
      navClose=document.getElementById('nav-class')

if(navToggle){
    navToggle.addEventListener('click',() => {
        navMenu.classList.add('show-menu')
    })
}

if(navClose){
    navToggle.addEventListener('click',() => {
        navMenu.classList.remoove('show-menu')
    })
}



/*=============== REMOVE MENU MOBILE ===============*/
const navLink=document.querySelectorAll('.nav__link')
const linkAction=()=>{
    const navMenu=document.getElementById('nav-menu')
    //When we click on each nav__link,we remoove the show-menu class*/
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n=> n,addEventListener('click',linkAction))

/*=============== SWIPER PROJECTS ===============*/
let swiperProjects=new Swiper(".projects__container",{
    loop:true,
    spaceBetween:24,
    grabCursor:true,
    navigation:{
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev",
    },
    pagination:{
        el:".swiper-pagination",
    },
    breakpoints:{
        1200:
        {
            slidePerview:2,
            spacwBetween:-56,
        },
    },
    
});

/*=============== SWIPER TESTIMONIAL(done) ===============*/


/*=============== EMAIL JS ===============*/

const contactForm=document.getElementById('contact-form'),
      contactName=document.getElementById('contact-name'),
      contactEmail=document.getElementById('contact-email'),
      contactProject=document.getElementById('contact-project'),
      contactMessage=document.getElementById('contact-message');

const sendEmail=(e)=>{
    e.preventDefault()
    //Checking if the field has a value
    if(contactName.value === ''|| contactEmail.value===''||contactProject.value==='')
    {
        contactMessage.classList.emoove('color-blue')
        contactMessage.classList.add('color-red')
        //Show Message
        contactMessage.textContent='Write all the input fields '
    }
    else{
            //serviceID-templateID-#form-publicKey(to be updated from Emailjs)
           emailjs.sendForm('service_lneznfx','template_btkg6nu','#contact-form','bxGZNs46m6VfqEXHL')
           .then(()=>{

            //Show Message and add color
            contactMessage.classList.add('color-blue')
            contactMessage.textContent='Message sent '

            //Remoove message after five seconds
            setTimeout(()=>{
                contactMessage.textContent=''
            },5000)
           },(error)=>{
               alert('OOPS! SOMETHING HAS FAILED....',error)
           })                                                                                          

           //To clear the input field
           contactName.value=''
           contactEmail.value=''
           contactProject.value=''
    }
}
contactForm.addEventListener('submit',sendEmail)
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections=document.querySelectorAll('contact')
const scrollActive=()=>{
    const scrollY=window.scrollY
    sections.forEach ( current=>{
        const sectionHeight=current.offsetHeight,
        sectionTop=current.offsetTop-58,
        sectionId=current.getAttribute('id'),
        sectionsClass=document.querySelector('.nav__menu a[href*="sectionId"]');

        if(scrollY>sectionTop&&scrollY <= sectionTop+sectionHeight)
        {
            sectionsClass.classList.add('active-link')
        }
        else{
            sectionsClass.classList.remove('active-link')
        }
    })

}
window.addEventListener('scroll',scrollActive)
/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp=()=>{
    const scrollUp=document.getElementById('scroll-up')
    this.scrollY>=350?scroll.classList.add('show-scroll')
    :scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll',scrollUp)

/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)                                
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () =>{
    const header = document.getElementById('header')
    // Add a class if the bottom offset is greater than 50 of the viewport
    this.scrollY >= 50 ? header.classList.add(bg-header) 
                       : header.classList.remove(bg-header)
}
window.addEventListener('scroll', scrollHeader)


/*=============== SCROLL REVEAL ANIMATION SIMILAR TO PRESENTATION===============*/

const sr=ScrollReveal({
    origin:'top',
    distance:'60px',
    duration:250,
    delay:400,
})

sr.reveal('.home__data,.projects__container,.footer__container')
sr.reveal('.home__info div',{delay:600,origin:'bottom',interval:100})
sr.reveal('.qualification__content,.services__card',{interval:100})
sr.reveal('.skills__content:nth-child(1),.contact__content:nth-child(1)',{original:'left'})
sr.reveal('.skills__content:nth-child(2),.contact__content:nth-chiled(2)',{origin:'left'})
