for (let i = 0; i < countries.length; i++) {
    const p = document.createElement('p')
    p.style.color = 'red'
    p.innerHTML = countries[i] ['name']
    console.log(countries[i] ['name']);

    document.body.append(p)
}
const input = document.getElementById('input')
input.addEventListener('keyup', (Element) =>{
    console.log(Element.key)
    console.log(Element.keyCode)
    if (Element.keyCode ==13) {
        countries.filter((ulke) => {
            if(ulke.name == input.value) {
                const p = document.createElement('p')
                p.style.color = 'blue'
                p.innerHTML = `${ulke.name} - ${ulke.capital}`
                document.body.append(p)
            }
        })
    }

 
})





input.setAttribute('placeholder', 'Değerim')

const div = document.createElement('div')
div.style.width = "300px"
div.style.height = "300px"
div.style.border = "1px solid black"


document.body.appendChild(div)

document.body.removeChild(div)

