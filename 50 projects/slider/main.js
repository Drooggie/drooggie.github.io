const slider = document.querySelector('.slider-container')
const sliderWidth = document.querySelector('.slider-container').offsetWidth
const img = document.querySelectorAll('.slider-item img')
const prev = document.querySelector('.prev')
const next = document.querySelector('.next')

let count = 0

prev.addEventListener('click', function() {
     count--
    (count <= 0) ? count = 0 : null

    slider.style.marginLeft = `-${sliderWidth * count}px`
})

next.addEventListener('click', function() {
     count++
    (count >= img.length) ? count = 0 : null;

    slider.style.marginLeft = `-${sliderWidth * count}px`
})

function reSize() {
    for( let elem of img ) {
        elem.style.width = sliderWidth + 'px';
    }
}
reSize()

window.addEventListener('resize', function() {
    reSize()
})