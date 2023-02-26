const selects = document.querySelectorAll('.translation__language')
const copyButtons = document.querySelectorAll('.translation__copy')
const translateBtn = document.querySelector('.translation__btn')
const textInput = document.getElementById('input')
const textOutput = document.getElementById('output')

selects.forEach(select => {
    for(let [key, val] of Object.entries(languages)) {

        const option = document.createElement('option')
        option.innerHTML = val
        option.setAttribute('value', key)
        
        select.appendChild(option)
    }
})

setEventListener(copyButtons[0], textInput)
setEventListener(copyButtons[1], textOutput)


translateBtn.addEventListener('click', getTranslationData)


function getTranslationData() {
    let inputLang,
        outputLang

    for(let key of Object.keys(languages)) {
        (selects[0].value === key) ? inputLang  = key : '';
        (selects[1].value === key) ? outputLang = key : '';
    }
    
    if(textInput.value === '') return

    fetch(`https://api.mymemory.translated.net/get?q=${textInput.value}&langpair=${inputLang}|${outputLang}`)
       .then(res => res.json())
       .then(data => {
            const {responseData : {translatedText}} = data
            textOutput.value = translatedText
        })
}

function setEventListener(domObject, put) {
    domObject.addEventListener('click', () => {
        const forCopy = document.createElement('textarea')
        forCopy.value = put.value
        
        document.body.appendChild(forCopy)
        forCopy.select()
        document.execCommand('copy')
        forCopy.remove()
    })
}

import { languages } from './modules/language.js'