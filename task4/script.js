let link = document.querySelector("#link");

link.addEventListener("click", function(event) {
    event.preventDefault();
    userText = prompt();
    this.textContent = userText;
});