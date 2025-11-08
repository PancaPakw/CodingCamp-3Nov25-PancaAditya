welcomeMessage();

function welcomeMessage() {

    let name = prompt("Please enter your name:");

    if (name != null) {

        document.getElementById('welcome-speech').innerHTML = 'Hello ' + name + ', welcome to SMK Negeri 1 Gedangan';
    }
}

function validateForm() { }