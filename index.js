window.onload = function() {
    function ValidateEmail(mail) {
        return (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
    }
    document.getElementById('send-button').addEventListener('click', function() {
        if (ValidateEmail(document.getElementById('email-input').value) === true) {
            alert(`Message sent!:\n${document.getElementById('message-input').value}`)
        } else {
            alert(`Invalid email: ${document.getElementById('email-input').value === '' ? '(No email supplied)' : document.getElementById('email-input').value}`)
        }
    })
}