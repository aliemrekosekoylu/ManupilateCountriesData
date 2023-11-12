// for (let i = 0; i < countries.length; i++) {
//     const p = document.createElement('p')
//     p.style.color = 'red'
//     p.innerHTML = countries[i] ['name']
//     console.log(countries[i] ['name']);

//     document.body.append(p)
// }
// const input = document.getElementById('input')
// input.addEventListener('keyup', (Element) =>{
//     console.log(Element.key)
//     console.log(Element.keyCode)
//     if (Element.keyCode ==13) {
//         countries.filter((ulke) => {
//             if(ulke.name == input.value) {
//                 const p = document.createElement('p')
//                 p.style.color = 'blue'
//                 p.innerHTML = `${ulke.name} - ${ulke.capital}`
//                 document.body.append(p)
//             }
//         })
//     }

 
// })





// input.setAttribute('placeholder', 'Değerim')

// const div = document.createElement('div')
// div.style.width = "300px"
// div.style.height = "300px"
// div.style.border = "1px solid black"


// document.body.appendChild(div)

// document.body.removeChild(div)



const container = document.createElement('div')
container.classList.add('container', 'd-flex', 'align-items-center', 'flex-column', 'my-3')

document.body.append(container)

const btn = document.createElement('button')
btn.setAttribute('class', 'btn btn-danger')
btn.textContent = 'countries'

container.append(btn)


function ulkeOlusturma() {

    const ulkelerDiv = document.createAttribute('class', 'd-flex gap-2 mt-2 ')

    countries.forEach((ulke) =>{
    
    const cardDiv = document.createElement('div')            
    cardDiv.classList.add('card','text-center')
    cardDiv.style.width = '18em'

    const cardImg = document.createElement('img')
    cardImg.src = ulke.flag
    cardImg.classList.add('card-img-top')

    const cardBody = document.createElement('div')
    cardBody.classList.add('card-body')

    const cardTitle = document.createElement('h5')
    cardTitle.classList.add('card-title')
    cardTitle.textContent = ulke.name

    const cardText = document.createElement('p')
    cardText.classList.add('card-text')
    let content = `${ulke.capital} - ${ulke.languages} - ${ulke.currency}`
    cardText.textContent = content

    const pop = document.createElement('a')
    pop.setAttribute('class', 'btn btn-warning w-100')
    pop.textContent = ulke.population

    cardDiv.append(cardImg)

    cardDiv.append(cardBody)

    cardBody.append(cardTitle)
    cardBody.append(cardText)
    cardBody.append(pop)

    ulkelerDiv.append(cardDiv)
    

    })

    container.append(ulkelerDiv)
}