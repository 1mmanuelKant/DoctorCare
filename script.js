window.addEventListener('scroll', onScroll)

function onScroll() {
  showBackToTopBtnOnScroll()
  showNavOnScroll()

  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(touch)
  activateMenuAtCurrentSection(depositions)
}

function showBackToTopBtnOnScroll(){
  if (scrollY > 400) {
    backToTopBtn.classList.add('show')
  } else {
    backToTopBtn.classList.remove('show')
  }
}

function showNavOnScroll(){
  if (scrollY == 0) {
    nnavigation.classList.remove('scroll')
  } else {
    nnavigation.classList.add('scroll')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700
}).reveal(`#home, 
#home img, 
#home .stats,
#services header,
#services card,
#about,
#about header,
#about .content,
#touch .col-a,
#touch .col-b,
#depositions .content`)

function activateMenuAtCurrentSection(section){
  const targetLine = scrollY + innerHeight / 2

  const sectionTop = section.offsetTop
  const sectionHeight = section.offsetHeight
  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop
  
  
  const sectionEndsAt = sectionTop + sectionHeight
  const sectionEndPassedTargetLine = sectionEndsAt <= targetLine
  const sectionBoundaries = sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine

  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  menuElement.classList.remove('active')
  if(sectionBoundaries){
    menuElement.classList.add('active')
  }
} 