let userConnexion = {
    init: function(){
        // Mettre en place un écouteur sur la soumission du formulaire (type "submit")
        let formElement = document.querySelector('#login-form');
        formElement.addEventListener('submit', userConnexion.handleFormSubmit);
        
        let identifiant = document.querySelector('#field-username');
        let password = document.querySelector('#field-password');

        identifiant.addEventListener('blur', function(event) {
            let identifiantInput = identifiant.value;
            if(identifiantInput.length >= 3){
                // event.target.style.border = '#008000 1px solid';
                identifiant.classList.add('valid');
            }
            else {
                // event.target.style.border = '#ff0000 1px solid';
                identifiant.classList.add('invalid');
            }
        });

        password.addEventListener('blur', function(event) {
            let passwordInput = password.value;
            if(passwordInput.length >= 3){
                // event.target.style.border = '#008000 1px solid';
                password.classList.add('valid');
            }
            else {
                // event.target.style.border = '#ff0000 1px solid';
                password.classList.add('valid');
            }
        });
    },
        
    // On intercepte l'événement
    handleFormSubmit: function(event){
        // On annule la soumission du form (comportement par défaut)
        event.preventDefault();
        // Récupérer la valeur du champ Identifiant
        let identifiant = document.querySelector('#field-username');
        // Sa valeur, via sa propriété "value"
        let identifiantInput = identifiant.value;
        // Récupérer la valeur du champ Mot de passe
        let password = document.querySelector('#field-password');
        // Sa valeur, via "value"
        let passwordInput = password.value;

        if (identifiantInput.length >= 3 && passwordInput.length >= 3) {
            console.log('OK');
        }
        else if (identifiantInput.length < 3) {
            console.log('Identifiant trop court');
            // Cibler l'id de la div voulue
            let divError1 = document.querySelector('#errors');
            divError1.style.display = 'block';
            // Créer un élément p et le ranger dans une variable
            let newParagraphe1 = document.createElement('p');
            // Ajouter un texte à cette variable
            newParagraphe1.textContent = 'Identifiant doit contenir au minimum 3 caractères.';
            // Affecter ce nouveau texte (p) dans la div ciblée
            divError1.appendChild(newParagraphe1);
        }
        else if (passwordInput.length < 3) {
            console.log('Mot de passe trop court');
            let divError2 = document.querySelector('#errors');
            divError2.style.display = 'block';
            let newParagraphe2 = document.createElement('p');
            newParagraphe2.textContent = 'Mot de passe doit contenir au minimum 3 caractères.';
            divError2.appendChild(newParagraphe2);
        }
            
    }
    
};

userConnexion.init();

// divError1.style.display = 'block';





















// let identifiant = document.querySelector('#field-username').value;


// identifiant = identifiant.preventDefault;
// console.log(identifiant.length);
// e.preventDefault();

// La fonction doit récuperer l'input
// Elle doit ensuite vérifier si la chaine dépasse les 3 caractères
// Si ça n'est pas le cas, alors on affiche la bulle indiquant qu'il faut dépasser 3 caractères
// Si c'est le cas, passer au password et idem


/* function nbCaractere() {
    // event.preventDefault();

    let identifiant = document.querySelector('#field-username');
    let identifiantInput = identifiant.value;
    identifiantInput.preventDefault();

    if (identifiantInput.length > 3) {
        console.log('OK');
    }
    else if (identifiantInput.length <= 3) {
        console.log('Trop court');
    }
    
} */
// cette fonction va ajouter la "bulle"
// nbCaractere();

/* function addelement(){
    let buttonelement = document.querySelector('#login-submit');
    buttonelement.addEventListener('submit', nbCaractere);
}

addelement(); */

// Quand on change de champ (addeventlistener)
    // On vérifie si > 3 caractères (condition if)
        // On colore en vert 
    // Sinon (else)
        // On colore en rouge

