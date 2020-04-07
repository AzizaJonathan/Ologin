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
        // Récupérer la valeur du champ Mot de passe
        let password = document.querySelector('#field-password');
        // Sa valeur, via sa propriété "value"
        let identifiantInput = identifiant.value;
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
        else if (passwordInput.length < 3 && identifiantInput.length < 3) {
            // console.log('Mot de passe trop court');
            let divError3 = document.querySelector('#errors');
            divError3.style.display = 'block';
            let newParagraphe3 = document.createElement('p');
            newParagraphe3.textContent = 'Mot de passe et identifiant doivent contenir au minimum 3 caractères.';
            divError3.appendChild(newParagraphe3);
        }
            
    }
    
};

userConnexion.init();

// divError1.style.display = 'block';