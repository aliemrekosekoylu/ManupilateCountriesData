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
btn.addEventListener('click', ulkeOlusturma)


function ulkeOlusturma() {

    const ulkelerDiv = document.createElement('div')
    ulkelerDiv.setAttribute('class', 'row mt-2')
    

    countries.forEach((ulke) =>{
        const col = document.createElement('div')
        col.classList.add('col-3')  

    
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
    let content = `${ulke.capital} - ${ulke.languages} - ${ulke.region}`
    cardText.textContent = content

    const pop = document.createElement('a')
    pop.setAttribute('class', 'btn btn-warning w-100')
    pop.textContent = ulke.population

    cardDiv.append(cardImg)

    cardDiv.append(cardBody)

    cardBody.append(cardTitle)
    cardBody.append(cardText)
    cardBody.append(pop)

    col.append(cardDiv)

    ulkelerDiv.append(col)


    })

    container.append(ulkelerDiv)
}





const btn2 = document.createElement('button')
btn2.setAttribute('class', 'btn btn-success mt-2')
btn2.textContent = 'Population'

container.append(btn2)

btn2.addEventListener('click', populasyonBulma)

function populasyonBulma() {
    const populationDiv = document.createElement('div')
    populationDiv.classList.add('mt-3')
    populationDiv.style.width = '100%'

   countries.sort((a, b) => b.population - a.population)

   countries.forEach((ulke) =>{

    const div = document.createElement('div')
    div.setAttribute('class', 'd-flex justify-content-between')

    const ulkeIsim = document.createElement('p') 
    ulkeIsim.textContent = ulke.name

    const yuzdePop = document.createElement('div')
    let hesap = (ulke.population / 8_000_000_000) * 100

    yuzdePop.style.height = "20px"
    yuzdePop.style.width = `${hesap.toFixed(2)}%`
    yuzdePop.style.backgroundColor = 'black'
    yuzdePop.style.borderRadius = '20px'
    yuzdePop.style.color = 'white'
    yuzdePop.textContent = `${hesap.toFixed(2)}%`

    const population = document.createElement('p')
    population.textContent = ulke.population

    div.append(ulkeIsim)
    div.append(yuzdePop)
    div.append(population)

    populationDiv.append(div)

   })

   container.append(populationDiv)
}


const btn3 = document.createElement('button')
btn3.textContent = 'clear'
btn3.setAttribute('class', 'btn btn-dark mt-2')

container.append(btn3)

btn3.addEventListener('click', () => {
    location.reload()
})