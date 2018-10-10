//DOM Elements
let kgInput = document.getElementById('kgInput');
let gramOutput = document.querySelector('#gOutput');

//Listening to events
kgInput.addEventListener('input', event => {
    let kg = event.target.value;
    gramOutput.innerHTML = `$(kg * 1000 g`);
});