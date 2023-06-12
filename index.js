const form = document.querySelector('form')
form.addEventListener("submit", firstAndLast)

function firstAndLast(event) {
    event.preventDefault()
    const first = (event.target.first.value)
    const last = (event.target.last.value)
    document.querySelector("h2").innerText = "Hello, my name is " + first + " " + last
}