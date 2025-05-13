function redirectToThankYou() {
    var nextPage = document.getElementById('fcf-form-id').getAttribute('_next');
    if (nextPage) {
        alert("Redirecting to: " + nextPage);
        window.location.href = nextPage;
        return false;
    } else {
        alert("Error: _next attribute not found on form.");
        return true; // Allow form submission to proceed if attribute not found
    }
}