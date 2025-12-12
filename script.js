document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('reservationForm');
    if (form) {
        const nomInput = document.getElementById('nom');
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('message');
        /*Changer la couleur du fonds des boites*/
        nomInput.addEventListener('focus', function() {
            this.style.backgroundColor = '#fff9f0';
            this.style.borderColor = '#b32c2c';
        });
        emailInput.addEventListener('focus', function() {
            this.style.backgroundColor = '#fff9f0';
            this.style.borderColor = '#b32c2c';
        });
        messageInput.addEventListener('focus', function() {
            this.style.backgroundColor = '#fff9f0';
            this.style.borderColor = '#b32c2c';
        });
        nomInput.addEventListener('blur', function() {
            this.style.backgroundColor = '#ffffff';
            this.style.borderColor = '#ccc';
        });
        emailInput.addEventListener('blur', function() {
            this.style.backgroundColor = '#ffffff';
            this.style.borderColor = '#ccc';
        });
        messageInput.addEventListener('blur', function() {
            this.style.backgroundColor = '#ffffff';
            this.style.borderColor = '#ccc';
        });
        /*Validation du formulaire*/
        form.addEventListener('submit', function(event) {
            event.preventDefault(); 
            /*verifier si tout les champs sont remplis*/
            if (nomInput.value.trim() === '' || emailInput.value.trim() === '' || messageInput.value.trim() === '') {
                alert('Tous les champs doivent être remplis.');
                return;
            }
            alert('Réservation envoyée.');
            form.reset();
        });
    }
    
});