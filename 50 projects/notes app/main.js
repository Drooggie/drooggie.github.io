const addBtn = document.querySelector('.notes__add')
const main = document.querySelector('.notes__main')

const mainLS = JSON.parse(localStorage.getItem('main'))

for(let {title, note} of mainLS) {
    createCard(title, note)
}

addBtn.addEventListener('click', () => {
    createCard('Title')
})

function createCard(titleFromLS, noteFromLS = '') {
    const card = document.createElement('div')
    card.classList.add('notes__card')
    card.innerHTML = `
        <div class="notes__card-header">
        <h3 class="hidden notes__card-title"></h3>
        <input type="text" class="notes__card-input" value='${titleFromLS}'>
        <div class="notes__btn">
            <button class="notes__btn-change">C</button>
            <button class="notes__btn-delete">X</button>
        </div>
        </div>
        <div class="notes__card-body">
            <div class="notes__card-unchange hidden"></div>
            <textarea class="notes__card-text">${noteFromLS}</textarea>
        </div>
    `
    const changeBtn = card.querySelector('.notes__btn-change')
    const deleteBtn = card.querySelector('.notes__btn-delete')
    const title = card.querySelector('.notes__card-title')
    const titleFor = card.querySelector('.notes__card-input')
    const text = card.querySelector('.notes__card-unchange')
    const textArea = card.querySelector('.notes__card-text')

    changeBtn.addEventListener('click', () => {
        (changeBtn.innerText === 'O') ? changeBtn.innerText = 'C' : changeBtn.innerText = 'O'

        if(titleFor.value.length > 12) {
            title.innerText = titleFor.value.slice(0, 12) + '...'
        } else {
            title.innerText = titleFor.value
        }

        text.innerText = textArea.value

        title.classList.toggle('hidden')
        titleFor.classList.toggle('hidden')
        text.classList.toggle('hidden')
        textArea.classList.toggle('hidden')

        updateLS()
    })

    deleteBtn.addEventListener('click', () => {
        card.style.opacity = '0'
        setTimeout(() => {
            card.remove()
            updateLS()
        }, 1000)
    })

    main.querySelector('.container').appendChild(card)
}


function updateLS() {
    let array = []

    const titles = document.querySelectorAll('.notes__card-input')
    const notes = document.querySelectorAll('.notes__card-text')

    for(let i = 0; i < titles.length; i++) {
        let object = {
            title: titles[0].value,
            note: notes[0].value
        }
        array.push(object)
    }

    localStorage.setItem('main', JSON.stringify(array))
}