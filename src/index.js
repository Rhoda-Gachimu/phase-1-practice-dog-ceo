console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', () => {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"


    fetch(imgUrl).then(response => response.json())
    .then(data => {
        const dogData = data.message
        // console.log(dogData)
        for(item of dogData){
            // console.log(item)
            const imgContainer = document.getElementById("dog-image-container")
           const img = document.createElement("img")
           img.src = `${item}`
           imgContainer.appendChild(img)  
        }     
})

const breedUrl = 'https://dog.ceo/api/breeds/list/all'

fetch(breedUrl).then(response => response.json())
.then(data => {
    const breedData = data.message
    // console.log(data.message)
    for(item in breedData){
        // console.log(item)
        const ul = document.getElementById('dog-breeds')
        const li = document.createElement('li')
        li.innerText = `${item}`
        ul.appendChild(li)
        li.addEventListener('click', () => {
           li.style.color = 'blue'
        })
    }
    //Filter out
const selections = document.getElementById('breed-dropdown')

Array.from(selections).map(item => item.value)
.filter(char => {
   for(item in breedData){
    const breedNames = item.split(' ')
     console.log(breedNames)
     if(breedNames.charAt(0) === char){
        console.log(ul)
     }
   }

})

})


})