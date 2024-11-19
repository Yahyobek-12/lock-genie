const btn = document.querySelector('button')
let result = document.querySelector('.result')

btn.addEventListener('click', () => {
    let abc = [
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'g', 'k', 'l', 'm', 'n', 'o', 'p',
        'q', 'r', 's', 't', 'u', 'v', 'w', 'x',
        'y', 'z'
    ]
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    let characters = ['!', '~', '?', '(', ')', '[', ']']
    
    let connectAbcToNumbers = abc.concat(numbers)
    let allCharacters = characters.concat(connectAbcToNumbers)
    
    function createRandomPassword(arr) {
        let randomIndex = Math.floor(Math.random() * arr.length)
        return arr[randomIndex]
    }

    function randomizeCase(char) {
        if (typeof char === 'string') {
            if (Math.random() < 0.5) {
                return char.toUpperCase()
            } else {
                return char
            }
        } else {
            return char
        }
    }
    
    let passwordLength = 12
    let randomPassword = ''
    
    for (let i = 0; i < passwordLength; i++) {
        let randomChar = createRandomPassword(allCharacters)
        randomPassword += randomizeCase(randomChar)
    }
    
    console.log(randomPassword);
    result.textContent = randomPassword
})

result.addEventListener('click', () => {
    const password = result.textContent
    if (password) {
        navigator.clipboard.writeText(password).then(() => {
            alert(`Copied to clipboard: ${password}`)
        }).catch(err => {
            alert('Failed to copy text to clipboard.')
        })
    } else {
        alert('No password to copy!')
    }
})
