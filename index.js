import { dogs } from './data.js'
import { Dog } from './Dog.js'

// Initial values
let isWaiting = false
let dogsArray = []
let currentDogIndex = 0
dogs.forEach((dog) => dogsArray.push(dog))

function getNewDog() {
    isWaiting = true
    currentDogIndex += 1
    return dogsArray.length === currentDogIndex ? endDogs()
        : new Dog(dogsArray[currentDogIndex])
}

const likeBtn = document.getElementById('like-btn')
const nopeBtn = document.getElementById('nope-btn')

likeBtn.addEventListener('click', () => {
    if (!isWaiting) {
        dogsObj.hasBeenLiked = true
        buttonClick()
    }
})

nopeBtn.addEventListener('click', () => {
    if (!isWaiting) {
        dogsObj.hasBeenSwiped = true
        buttonClick()
    }
})

function buttonClick() {
    isWaiting = true
    render()
    setTimeout(() => {
        dogsObj = getNewDog()
        isWaiting = false
        render()
    }, 1500)
}

function endDogs() {
    isWaiting = true
    document.getElementById('dog-section').innerHTML = `
        <div class="dog-section-end">
            <h2>There are no more dogs in your area</h2>
        </div>`
}

function render() {
    document.getElementById('dog-section').innerHTML = dogsObj.getDogHtml()
}

let dogsObj = new Dog(dogsArray[currentDogIndex])

render()