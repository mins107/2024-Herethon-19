document.addEventListener('DOMContentLoaded', function() {
    const verificationForm = document.getElementById('verificationForm');
    const verificationUsername = document.getElementById('verificationUsername');
    const verificationEmail = document.getElementById('verificationEmail');
    const verificationErrorMessage = document.getElementById('verificationErrorMessage');
    const submitButton = verificationForm.querySelector('button[type="submit"]');

    function showErrorMessage(element, message) {
        element.textContent = message;
        element.style.display = 'block';
    }

    function checkFieldsFilled() {
        const allFilled = verificationUsername.value.trim() && verificationEmail.value.trim();
        submitButton.disabled = !allFilled;
    }

    verificationUsername.addEventListener('input', checkFieldsFilled);
    verificationEmail.addEventListener('input', checkFieldsFilled);

    verificationForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = verificationUsername.value.trim();
        const email = verificationEmail.value.trim();

        fetch(`/users/pwverification/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'X-CSRFToken': getCookie('csrftoken')
            },
            body: `username=${encodeURIComponent(username)}&email=${encodeURIComponent(email)}`
        })
        .then(response => {
            if (response.ok) {
                window.location.href = '/users/pwreset/';
            } else {
                return response.text().then(text => { throw new Error(text); });
            }
        })
        .catch(error => {
            showErrorMessage(verificationErrorMessage, error.message);
        });
    });

    function getCookie(name) {
        let cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            const cookies = document.cookie.split(';');
            for (let i = 0; i < cookies.length; i++) {
                const cookie = cookies[i].trim();
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
});
