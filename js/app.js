let userConnexion = {
    init: function(){
        // Mettre en place un écouteur sur la soumission du formulaire (type "submit")
        let formElement = document.querySelector('#login-form');
        formElement.addEventListener('submit', userConnexion.handleFormSubmit)
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

        /* console.log(identifiantInput);
        console.log(identifiantInput.length);
        console.log(passwordInput);
        console.log(passwordInput.length); */

        if (identifiantInput.length >= 3 && passwordInput.length >= 3) {
            console.log('OK');
        }
        else if (identifiantInput.length < 3) {
            console.log('Identifiant trop court');
            // Cibler l'id de la div voulue
            let divError1 = document.querySelector('#errors');
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
            let newParagraphe2 = document.createElement('p');
            newParagraphe2.textContent = 'Mot de passe doit contenir au minimum 3 caractères.';
            divError2.appendChild(newParagraphe2);
        }
            
    }
    
};

userConnexion.init();






















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