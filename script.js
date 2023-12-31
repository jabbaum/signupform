let pass1 = document.querySelector('#pass');
let pass2 = document.querySelector('#pass2');

function passMatch(origin, match) {
    isValid = origin === match;
    if(isValid) {
        
    }
}

pass2.addEventListener("input", (e)=>{
    let isValid = 0;
    let currentPass1 = pass1.value;
    let currentPass2 = pass2.value;
    let errorDisplayer = document.querySelector('label>span');

    isValid = currentPass2.length === 0 || currentPass2 === currentPass1;
    console.log(`here is pass1: ${currentPass1} and here is pass2: ${currentPass2   } and here is valid: ${isValid} lastly, here is curpass2.length === 0: ${currentPass2.length===0}`);

    if(isValid) {
        errorDisplayer.textContent = '';
        pass2.className = "valid";
    } else {
        errorDisplayer.textContent = ' Passwords must match';
        pass2.className = 'invalid'
    }
});