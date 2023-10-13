const inputName = document.querySelector("#name");
const inputSurname = document.querySelector("#surname");
const inputEmail = document.querySelector("#email");
const createButton = document.querySelector(".create-button");
const nameValue = document.querySelector(".nameText");
const surnameValue = document.querySelector(".surnameText");
const emailValue = document.querySelector(".emailText");

// let nameValue = inputName.value;
// let surnameValue = inputSurmame.value;
// let emailValue = inputEmail.value;

createButton.addEventListener("click", () => {
  nameValue.innerHTML = `<span>${inputName.value}</span>`;
  surnameValue.innerHTML = `<span>${inputSurname.value}</span>`;
  emailValue.innerHTML = `<span>${inputEmail.value}</span>`;
});
