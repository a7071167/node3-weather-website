const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')
const messageThree = document.querySelector('#message-3')
const messageFour = document.querySelector('#message-4')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value

    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''
    messageThree.textContent = ''
    messageFour.textContent = ''

    fetch(`/weather?address=${location}`).then((response) => {
    response.json().then((data) => {
        console.log(data)
        console.log(data.hiTemp)
        console.log(data.temp)
        if (data.error) {
            messageOne.textContent = data.error
        } else {
            messageOne.textContent = data.location
            messageTwo.textContent = data.forecast
            messageThree.textContent = `Highest daily temp ${data.hiTemp}`
            messageFour.textContent = `Average temp ${data.temp}`
        }
    })
    search.value = ''
})

})