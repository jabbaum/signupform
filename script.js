let pass1 = document.querySelector('#pass');
let pass2 = document.querySelector('#pass2');
const form = document.querySelector('.astroForm');
const minimum = 5;
let submitError = document.querySelector('span.error.submit');


function passMatch(origin, match) {
    let isValid = origin === match;
    console.log(`Here is what is recieved: ${origin} and ${match} and here is valid: ${isValid}`);
    let errorDisplayer = document.querySelectorAll('label>span');
    const mismatch = ' Passwords must match';
    const tooShort = ' Passwords must be at least 5 characters';

    if(isValid) {
        errorDisplayer.forEach(element => {
            element.textContent = '';
        });
        submitError.textContent = ''
        pass2.className = "valid";
        pass1.className = "valid";
        return true;
    } else if(origin.length < minimum) {
        errorDisplayer.forEach(element => {
            element.textContent = tooShort;
        });
        submitError.textContent = tooShort;
        pass2.className = 'invalid';
        pass1.className = 'invalid';
        return false;
    } else if(!isValid) {
        errorDisplayer.forEach(element => {
            element.textContent = mismatch;
        });
        submitError.textContent = mismatch;
        pass2.className = 'invalid';
        pass1.className = 'invalid';
    }
}

pass2.addEventListener("input", (e)=>{
    let currentPass1 = pass1.value;
    let currentPass2 = pass2.value;
    console.log(`here is what is passed to the function: ${currentPass1} ${currentPass2}`);

    passMatch(currentPass1, currentPass2);
});

pass1.addEventListener("input", (e) => {
    let currentPass1 = pass1.value;
    let currentPass2 = pass2.value;

    passMatch(currentPass1, currentPass2);
});

form.addEventListener('submit', (e)=>{
    let currentPass1 = pass1.value;
    let currentPass2 = pass2.value;
    if(!passMatch(currentPass1, currentPass2) || pass1.value.length < 5) {
        e.preventDefault();
        if(!passMatch(currentPass1, currentPass2)) {
            submitError.textContent = "Passwords must match";
        } else if(pass1.value.length < 5) {
            submitError.textContent = "Passwords must be at least 5 characters long";
        }
    }
});

