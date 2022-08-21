const slides = document.getElementsByClassName('carousel-item')
let slidePosition = 0
const totalSlides = slides.length
const slideDots = document.getElementsByClassName('dot')
const currentSlide = slidePosition

document.getElementById('carousel-button-next').addEventListener('click', moveToNextSlide)
document.getElementById('carousel-button-prev').addEventListener('click', moveToPrevSlide)



function hideAllSlides() {
    for (let slide of slides) {
        slide.classList.remove('carousel-item-visible')
        slide.classList.add('carousel-item-hidden')
    }
}

function hideAllIndicators() {
    for (let slideDot of slideDots){
        slideDot.classList.remove('active')
        slideDot.classList.add('dot-hidden')
    }
}

function moveToNextSlide() {
    hideAllSlides()
    hideAllIndicators()
    if (slidePosition === totalSlides - 1) {
        slidePosition = 0
    } else {
        slidePosition++
    }
    
    slides[slidePosition].classList.add("carousel-item-visible")
    slideDots[slidePosition].classList.add("active")
}

function moveToPrevSlide() {
    hideAllSlides()
    hideAllIndicators()
    if (slidePosition === 0) {
        slidePosition = totalSlides - 1
    } else {
        slidePosition--
    }
    slides[slidePosition].classList.add("carousel-item-visible")
    slideDots[slidePosition].classList.add("active")
}

// slideDots.addEventListener("click", moveToSelectedSlide(), {
//     hideAllSlides()
//     hideAllIndicators()
// })
    

