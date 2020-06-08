// script.js
// Weekly Assignment No. 6

/*
* All of the code must be adequetely commented.
* This includes the code that you write and the code that was provided.
*/

class PlayingCard {
    constructor(element, face, suit) {
        /* creating properties for element, suit, face, img, and state */
        this.element = element
        this.suit = suit
        this.face = face
        this.img = `img/${face}_of_${suit}.png`
        this.state = 0

        /* add an event listener for a click event*/
        this.element.addEventListener('click', () => {
            /* using logic, switch out the this.element.src */
            // if the card is flipped, show the front image of it
            if (this.state == 0) {
                this.element.src = this.img
                this.state = 1
            }
            // otherwise show the back of the card
            else if (this.state == 1) {
                this.element.src = 'img/back.png'
                this.state = 0
            }
        })
    }

    showFaces() {
        // set the src of the image for the front of the card according to the type of card it is
        this.element.src = this.img
    }

    showBacks() {
        // set the src of the image to show the back of the card
        this.element.src = 'img/back.png'
    }
}

function createCardImage() {
    // create a new img element, set the src to 'img/back.png', and return the img
    const img = document.createElement('img')
    img.src = 'img/back.png'
    return img
}

function displayDeck() {
    // iterate through each card in the array
    deck.forEach(card => {
        // append a card inside the container element
        container.appendChild(card.element)
    })
}

function shuffleDeck() {
    // starting point, condition, increment
    for (let i = 0; i < 1000; i++) {
        // sort through the deck of cards randomly
        deck.sort(() => Math.random() - 0.5)
    }
}

function removeCard() {
    // if the length of the cards is not equal to 0...
    if (deck.length != 0) {
        // reach into the DOM for the first img element, remove it from the DOM and the array
        card = document.querySelector('img')
        card.remove()
        deck.shift()
        // if there are 0 cards in the array, display this mesage
        if (deck.length == 0) {
            actions.innerHTML = 'No cards left in the deck. :-('
        }
    }
}

function buildDeck() {
    const suits = ['hearts', 'spades', 'diamonds', 'clubs']
    const faces = ['ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king']

    // iterate through each suit card
    suits.forEach(suit => {
        // for every suit card, iterate though each face
        faces.forEach(face => {
            // within the image variable,call the createCardImage() function
            const image = createCardImage()
            // Set the id attribute of the image
            image.setAttribute('id', `${face}_of_${suit}.png`)
            // push the new card object into the deck array
            deck.push(new PlayingCard(image, face, suit))
        })
    })
}

// clear the message
function clearActions() {
    actions.innerHTML = ''
}

let deck = []

// create handles for the buttons and divs
const container = document.querySelector('#container')
const actions = document.querySelector('#actions')
const shuffleBtn = document.querySelector('#shuffle')
const removeBtn = document.querySelector('#remove')
const newDeckBtn = document.querySelector('#newdeck')
const showFacesBtn = document.querySelector('#showfaces')
const showBacksBtn = document.querySelector('#showbacks')

// when you click on the shuffle button, display the message and make the cards disappear for a moment
// call the shuffleDeck() function to shuffle the cards
// display the shuffled cards after 500 milliseconds and the message for 5 seconds
shuffleBtn.addEventListener('click', () => {
    actions.innerHTML = 'The deck of cards has been shuffled.'
    container.innerHTML = ''
    shuffleDeck()
    setTimeout(displayDeck, 500)
    setTimeout(clearActions, 5000)
})

// when you click on the remove-a-card button, display the message in the HTML
// call the removeCard() function and display the message for 5 seconds
removeBtn.addEventListener('click', () => {
    actions.innerHTML = 'A card was removed.'
    removeCard()
    setTimeout(clearActions, 5000)
})

// when you click on the new-deck button, set the deck to an empty array to start from 0 cards and set the container of the cards to an empty string
// call the buildDeck() function, display the deck after 500 milliseconds, and the message for 5 seconds
newDeckBtn.addEventListener('click', () => {
    actions.innerHTML = 'A new deck of cards has been created.'
    deck = []
    container.innerHTML = ''
    buildDeck()
    setTimeout(displayDeck, 500)
    setTimeout(clearActions, 5000)
})

// when you click on the show-card-faces, iterate through each card and call the showFaces() function
showFacesBtn.addEventListener('click', () => {
    actions.innerHTML = 'All card faces are now showing.'
    deck.forEach(card => {
        card.showFaces()
    })
})

// when you click on the show-card-backs, iterate through each card and call the showBacks() function
showBacksBtn.addEventListener('click', () => {
    actions.innerHTML = 'All card backs are now showing.'
    deck.forEach(card => {
        card.showBacks()
    })
})

// call the functions to build the deck, shuffle the cards, and to display them when the page loads
buildDeck()
shuffleDeck()
displayDeck()