//JAVASCRIPT
// SAY HELLO
function showMessage() {
    let message =
        document.getElementById("helloMessage");
    message.innerText =
        "Hello! Thanks for visiting my portfolio 😊";
}
// DARK MODE
let themeButton =
    document.getElementById("themeButton");
themeButton.addEventListener(
    "click",
    function() {
        document.body.classList.toggle("dark");
        if (
            document.body.classList.contains("dark")
        ) {
            themeButton.innerText =
                "Light Mode";
        }
        else {
            themeButton.innerText =
                "Dark Mode";
        }
    }
);
// CONTACT FORM
let form =
    document.getElementById("contactForm");
form.addEventListener(
    "submit",
    function(event) {
        event.preventDefault();
        let name =
            document.getElementById("name").value;
        let email =
            document.getElementById("email").value;
        let message =
            document.getElementById("message").value;
        let result =
            document.getElementById("formMessage");
        if (
            name === "" ||
            email === "" ||
            message === ""
        ) {
            result.innerText =
                "Please fill in all the fields.";
            result.style.color = "red";
        }
        else {
            result.innerText =
                "Message submitted successfully!";
            result.style.color = "green";
            form.reset();
        }
    }
);