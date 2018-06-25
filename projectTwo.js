let items = document.querySelectorAll('.item')
let results = document.querySelector("#results")
let firstItem = document.querySelector('#item1')
let secondItem = document.querySelector('#item2')
let thirdItem = document.querySelector('#item3')
let fourthItem = document.querySelector('#item4')
let fifthItem = document.querySelector('#item5')
let sixthItem = document.querySelector('#item6')
let bun = 0
let meat = 0
let lettuce = 0
let onion = 0
let cheese = 0
let bacon = 0

function totalPrice() {
    let totalPrice = 0
    return totalPrice = (bun*1) + (meat*4) + (lettuce*0.50) + (onion*0.50) + (cheese*0.50) + (bacon*2.50)
}

items.forEach(items => {
  items.addEventListener('click', e => {
    items.classList.toggle('active')
    if (firstItem.classList.contains ("active")) {
        bun = 1
    } else {
        bun = 0
    }
    if (secondItem.classList.contains ("active")) {
        meat = 1
    } else {
        meat = 0
    }
    if (thirdItem.classList.contains ("active")) {
        lettuce = 1
    } else {
        lettuce = 0
    }
    if (fourthItem.classList.contains ("active")) {
        onion = 1
    } else {
        onion = 0
    }
    if (fifthItem.classList.contains ("active")) {
        cheese = 1
    } else {
        cheese = 0
    }
    if (sixthItem.classList.contains ("active")) {
        bacon = 1
    } else {
        bacon = 0
    }
    
    let total = totalPrice()
    results.innerHTML = `<h1>$${total}</h1>`
  })
})

/*
let firstItem = document.querySelector('#item1')
let secondItem = document.querySelector('#item2')
let thirdItem = document.querySelector('#item3')
let fourthItem = document.querySelector('#item4')
let resultsDiv = document.querySelector('#results')

firstItem.addEventListener('click', e => {
    console.log("First item clicked!")
    firstItem.classList.toggle('active')
    resultsDiv.innerHTML = `<h1>Just the buns?</h1>`
})

secondItem.addEventListener('click', e => {
    console.log("Second item clicked!")
    secondItem.classList.toggle('active')
    resultsDiv.innerHTML = `<h1>Plain Hamburger</h1>`
})

thirdItem.addEventListener('click', e => {
    console.log("Third item clicked!")
    thirdItem.classList.toggle('active')
    resultsDiv.innerHTML = `<h1>Burger with Lettuce</h1>`
})

fourthItem.addEventListener('click', e => {
    console.log("Fourth item clicked!")
    fourthItem.classList.toggle('active')
    resultsDiv.innerHTML = `<h1>Cheeseburger</h1>`
})
*/