const checkbox_toggler = document.getElementById('checkbox')
const main = document.getElementById('main')
const navbarTop = document.getElementById('navbarTop')
const navbarSupportedContent = document.getElementById('navbarSupportedContent')
const logoBtn = document.getElementById('logoBtn')
const logo = document.getElementById('logo')
const toggleBtn = document.getElementById('toggleBtn')
const navbarBottom = document.getElementById('navbarBottom')
const heroLeftColumn = document.getElementById('heroLeftColumn')
const heroRightColumn = document.getElementById('heroRightColumn')
const levelBtn = document.getElementById('level')

const leftContainer = document.querySelector('#about .left-container')
const rightContainer = document.querySelector('#about .right-container')
const profileImg = document.querySelector('#about #profile-img')

const navbars = document.querySelectorAll('.navbar')
const animationContainer = document.querySelectorAll('.animation-container')
const navlinks = document.querySelectorAll('#navbar-bottom .nav-link')
const spans = document.querySelectorAll('.dev-name span')
const barEls = document.querySelectorAll('.bar-container .bar')
const sectionTitle = document.querySelectorAll('.section-title')
const skillItems = document.querySelectorAll('#skill .skill-item')
const listBtn = document.querySelectorAll('#projects .list')
const itemBoxEls = document.querySelectorAll('#projects .itemBox')
const projectItems = document.querySelectorAll('#projects .project-item')
const contactItems = document.querySelectorAll('#contacts .contact-item')

//* INITIALIZE
checkAnimation()
addClassAll()

//* FUNCTIONS

function checkAnimation() {
    const triggerBottom = (window.innerHeight / 5) * 4


    animationContainer.forEach(cont => {
        const contTop = cont.getBoundingClientRect().top

        if (contTop < triggerBottom && contTop + 100 > -triggerBottom) {
            cont.classList.add('active')
        } else {
            cont.classList.remove('active')
        }
    })
    if (!animationContainer[0].classList.contains('active')) {
        logoBtn.classList.remove('active')
        navbarSupportedContent.classList.add('active')
        navbarSupportedContent.classList.remove('show')
        toggleBtn.classList.add('show')
        navbarTop.classList.add('active')
    } else {
        logoBtn.classList.add('active')
        navbarSupportedContent.classList.remove('active')
        toggleBtn.classList.remove('show')
        navbarTop.classList.remove('active')
    }
    if (!animationContainer[1].classList.contains('active')) {
        leftContainer.classList.remove('active')
        rightContainer.classList.remove('active')
    } else {
        leftContainer.classList.add('active')
        rightContainer.classList.add('active')
    }
    if (!animationContainer[2].classList.contains('active')) {
        skillItems.forEach(skill => {
            skill.classList.remove('active')
        })
    } else {
        skillItems.forEach(skill => {
            skill.classList.add('active')
        })
    }
    if (!animationContainer[3].classList.contains('active')) {
        projectItems.forEach(el => {
            el.classList.remove('active')
        })
    } else {
        projectItems.forEach(el => {
            el.classList.add('active')
        })
    }
    if (!animationContainer[4].classList.contains('active')) {
        contactItems.forEach(el => {
            el.classList.remove('active')
        })
    } else {
        contactItems.forEach(el => {
            el.classList.add('active')
        })
    }
}

function moveBars() {
    barEls.forEach((bar, idx) => {
        let percentage = bar.innerText
        setTimeout(() => {
            bar.style.width = `${percentage}`
            bar.classList.add('active')
        }, 100 * (idx + 1))
    })
}
function resetBars() {
    barEls.forEach(bar => {
        bar.style.width = `0%`
        bar.classList.remove('active')
    })
}
//* LOOPS
navlinks.forEach(navlink => {
    navlink.addEventListener('click', (e) => {
        checkActive()
        e.target.classList.add('active')
    })
})

spans.forEach((span, idx) => {
    span.addEventListener('mouseover', (e) => {
        e.target.classList.add('active')
    })
    span.addEventListener('animationend', (e) => {
        e.target.classList.remove('active')
    })

    // Initial animation
    setTimeout(() => {
        setTimeout(() => {
            span.classList.add('active')
        }, 100 * (idx + 1))
    }, 1000)
})

//* EVENTS
window.addEventListener('scroll', checkAnimation)

levelBtn.addEventListener('click', () => {
    resetBars()
    setTimeout(() => {
        moveBars()
    }, 1000);
})

profileImg.addEventListener('click', (e) => {
    e.target.classList.add('active')
    profileImg.addEventListener('animationend', (e) => {
        e.target.classList.remove('active')
    })
})

checkbox_toggler.addEventListener('click', (e) => {
    const triggerBottom = window.innerHeight + 300
    animationContainer.forEach(cont => {
        let contTop = cont.getBoundingClientRect().top
        if (contTop < triggerBottom && contTop + 100 > -triggerBottom) {
            cont.classList.add('active')
        } else {
            cont.classList.remove('active')
        }
    })

    let mode = e.target.checked
    if (mode === true) {
        main.classList.add('dark')
        logo.attributes[1].nodeValue = '/img/logo-yellow.png'
    } else if (mode === false) {
        main.classList.remove('dark')
        logo.attributes[1].nodeValue = '/img/logo.png'
    }
})

listBtn.forEach(list => {
    list.addEventListener('click', (e) => {
        const value = e.target.getAttribute('data-filter')
        if (value == 'all') {
            removeClass()
            addClassAll()
        } else {
            removeClass()
            addClass(value)
        }
    })
})

function addClassAll() {
    itemBoxEls.forEach(item => {
        setTimeout(() => {
            item.classList.add('show')
            item.classList.remove('hide')
            item.style.display = "block"
        }, 400);
    })
}

function removeClass() {
    itemBoxEls.forEach(item => {
        item.classList.remove('show')
        item.classList.add('hide')
        setTimeout(() => {
            item.style.display = "none"
        }, 400);
    })
}

function addClass(cName) {
    const items = document.querySelectorAll('.' + cName)
    items.forEach(item => {
        setTimeout(() => {
            item.classList.add('show')
            item.classList.remove('hide')
            item.style.display = "block"
        }, 400);
    })
}