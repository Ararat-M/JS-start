let input = document.querySelector("#input");
let duplicateField = document.querySelector("#duplicateField");
let submitBtn = document.querySelector("#submitBtn");

input.addEventListener("keyup", () => {
    duplicateField.textContent = input.value;
});

submitBtn.addEventListener("click", (event) => {
    event.preventDefault();
    console.log(duplicateField.textContent);
    duplicateField.textContent = "";
    input.value = "";
});