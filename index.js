const characters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '~',
  '`',
  '!',
  '@',
  '#',
  '$',
  '%',
  '^',
  '&',
  '*',
  '(',
  ')',
  '_',
  '-',
  '+',
  '=',
  '{',
  '[',
  '}',
  ']',
  ',',
  '|',
  ':',
  ';',
  '<',
  '>',
  '.',
  '?',
  '/',
]

const generateButton = document.getElementById('generate-btn')

generateButton.addEventListener('click', () => {
  renderPasswords()
})

const password1El = document.getElementById('password-1')
const password2El = document.getElementById('password-2')
const passwordElements = document.querySelectorAll('.password')

passwordElements.forEach((passwordEl) => {
  passwordEl.addEventListener('click', (e) => {
    const password = e.target.textContent
    navigator.clipboard.writeText(password)
    e.target.textContent = 'copied!'
    e.target.classList.add('copied')
    setTimeout(() => {
      e.target.textContent = password
      e.target.classList.remove('copied')
    }, 1000)
  })
})

function generatePassword() {
  let password = ''
  for (let i = 0; i < 15; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length)
    password += characters[randomIndex]
  }
  return password
}

function renderPasswords() {
  const password1 = generatePassword()
  const password2 = generatePassword()
  password1El.textContent = password1
  password2El.textContent = password2
  password1El.classList.add('clickable')
  password2El.classList.add('clickable')
}
