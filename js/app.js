// let identifiant = document.querySelector('#field-username').value;
let password = document.querySelector('#field-password').value;

// identifiant = identifiant.preventDefault;
// console.log(identifiant.length);
// e.preventDefault();


function nbCaractere(event) {
    event.preventDefault();

    let identifiant = document.querySelector('#field-username');
    let identifiantInput = identifiant.value;

    if (identifiantInput.length > 3) {
        console.log('OK');
    }
    else if (identifiantInput.length <= 3) {
        console.log('Trop court');
    }
    
}
// cette fonction va ajouter la "bulle"
nbCaractere();

function addelement(){
    let buttonelement = document.querySelector('#login-submit');
    buttonelement.addEventListener('submit', nbCaractere);
}

addelement();