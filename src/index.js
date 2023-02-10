import { dogsData } from './data.js'
import { DogConstructor } from './Dog.js'

// Initial values
let dogsArray = []
let currentDogIndex = 0
dogsData.forEach((dog) => dogsArray.push(dog))

function getNextDog() {
    currentDogIndex += 1
    return dogsArray.length === currentDogIndex ? renderEndScreen()
        : new DogConstructor(dogsArray[currentDogIndex])
}

const backBtn = document.getElementById('back-btn')
const nopeBtn = document.getElementById('nope-btn')
const likeBtn = document.getElementById('like-btn')
const rewindBtn = document.getElementById('rewind-btn')

backBtn.addEventListener('click', () => {
    if (currentDogIndex !== 0){
        currentDogIndex -= 1
        dogsObj = new DogConstructor(dogsArray[currentDogIndex])
        render()
    }
})

nopeBtn.addEventListener('click', () => {
    if(currentDogIndex < dogsArray.length){
        dogsObj.hasBeenSwiped = true
        handleButton()
        renderBadge("nope")
    }
})

likeBtn.addEventListener('click', () => {
    if(currentDogIndex < dogsArray.length){
        dogsObj.hasBeenLiked = true
        handleButton()
        renderBadge("like")
    }
})

rewindBtn.addEventListener('click', () => {
    currentDogIndex = 0
    dogsObj = new DogConstructor(dogsArray[currentDogIndex])
    render()
})

function renderBadge(badgeName){
    document.getElementById('badge-container').innerHTML = `
        <img src="src/images/badge-${badgeName}.png">
    `
}

function handleButton() {
    const footerButtons = document.querySelectorAll('footer > button')
    footerButtons.forEach(button => {
        button.disabled = true
    }) 

    setTimeout(() => {
        dogsObj = getNextDog()
        render()
        footerButtons.forEach(button => {
            button.disabled = false
        }) 
    }, 1500)
}

function renderEndScreen() {
    document.getElementById('dog-section').innerHTML = `
        <div class="dog-section-end">
            <h2>There are no more dogs in your area</h2>
        </div>`
}

function render() {
    if(currentDogIndex < dogsArray.length){
        document.getElementById('dog-section').innerHTML = dogsObj.getDogHtml()
    }
}

let dogsObj = new DogConstructor(dogsArray[currentDogIndex])

render()