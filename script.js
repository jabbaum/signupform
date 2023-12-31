let pass1 = document.querySelector('#pass');
let pass2 = document.querySelector('#pass2');

function passMatch(origin, match) {
    let isValid = origin === match;
    console.log(`Here is what is recieved: ${origin} and ${match} and here is valid: ${isValid}`);
    let errorDisplayer = document.querySelectorAll('label>span');

    if(isValid) {
        errorDisplayer.forEach(element => {
            element.textContent = '';
        });
        pass2.className = "valid";
        pass1.className = "valid";
        return true;
    } else {
        errorDisplayer.forEach(element => {
            element.textContent = ' Passwords must match';
        });
        pass2.className = 'invalid';
        pass1.className = 'invalid';
        return false;
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