const form = document.querySelector('.form')
const email = document.querySelector('#inputEmail')
const password1 = document.querySelector('#inputPassword1')
const password2 = document.querySelector('#inputPassword2')
const btn = document.querySelector('button')

// Input required
form.addEventListener('submit', e => {
    e.preventDefault()

    const emailVal = email.value
    const password1Val = password1.value
    const password2Val = password2.value

    if (emailVal === '') {
        setError(email, 'Email is required')
    } else if (!checkEmail(emailVal)) {
        setError(email, 'Enter a valid email address.');
    } else if (checkEmail(emailVal)) {
        setError(email, '');
    }
    
    if (password1Val === '') {
        setError(password1, 'Password is required')
    } else if (password1Val.length < 8) {
        setError(password1, 'Password must be at least 8 characters.')
    } else if (password1Val.length >= 8) {
        setError(password1, '')
    }
    
    if (password2Val === '') {
        setError(password2, 'Password confirmation required.')
    } else if (password1Val != password2Val) {
        setError(password2, 'Passwords do not match.')
    } else if (password2Val.length >= 8) {
        setError(password2, '')
    }
    
    if (emailVal != '' && password1Val != '' && password2Val != '' && checkEmail(emailVal) && password1Val.length >= 8 && password1Val == password2Val) {
        setTimeout(() => {
            form.submit()
        }, 6000)
        setSuccess()
    }

})

// Check Email 
function checkEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase())
}

// Set Error
function setError(input, message) {
    const inputElement = input.parentElement
    const errorHelp = inputElement.querySelector('.form-help')
    errorHelp.innerText = message
    errorHelp.classList.add('error')
}

// Set Success
function setSuccess() {
    email.value = ''
    password1.value = ''
    password2.value = ''
    btn.innerText = 'Great!';
    btn.classList.add('success')
    setTimeout(() => {
        btn.innerText = 'Submit';
        btn.classList.remove('success')
    }, 4000);
}
