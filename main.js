window.onload = function () {
    var subscribeForm = document.getElementById("subscribe-form");
    var subscribeSpinner = document.getElementById("subscribe-spinner");
    var subscribeComplete = document.getElementById("subscribe-complete");
    var subscribeEmail = document.getElementById("subscribe-email");

    function subscribeFormSubmit(event) {
        var url = "https://script.google.com/macros/s/AKfycbz1wBbqV90CBGg6QJ8Av2GCA_vdxs3LruHBAOrSIYBWLwYtW3b7iEELrJmrqrHFhM8Ohg/exec";
        var request = new XMLHttpRequest();
        request.open('POST', url, true);

        request.onload = function () {
            // request successful
            subscribeSpinner.style.display = "none";
            subscribeComplete.style.display = "block";
        };

        request.onerror = function () {
            // request failed
            subscribeSpinner.style.display = "none";
            subscribeForm.style.display = "block";
        };

        request.send(new FormData(event.target)); // create FormData from form that triggered event

        subscribeForm.style.display = "none";
        subscribeSpinner.style.display = "block";

        event.preventDefault();
    }

    subscribeForm.addEventListener("submit", subscribeFormSubmit);
}