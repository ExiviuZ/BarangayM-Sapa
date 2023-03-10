const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
// const email = document.querySelector("#email");
const password = document.querySelector("#password");
const houseNumber = document.querySelector("#houseNumber");
const sitio = document.querySelector("#sitio");
const contact = document.querySelector("#contact");
const username = document.querySelector("#username");
const form = document.querySelector(".form");
const formControls = document.querySelectorAll(".form-control");
const gender = document.querySelector("#gender");
const maritalStatus = document.querySelector("#maritalStatus");
const birthday = document.querySelector("#birthday");

  contact.addEventListener('input', () => {
    const firstChar = contact.value[0];
    const secondChar = contact.value[1];
    if (firstChar !== '0') {
      contact.value = '0';
    } else if (secondChar !== '9') {
      contact.value = '09';
    } else {
      // the input is valid, no need to modify it
    }
  });

birthday.max = new Date().toLocaleDateString("en-ca");

form.addEventListener("submit", (e) => {
  checkInputs(e);
});

username.addEventListener("keypress", function (event) {
  var key = event.keyCode;
  if (key === 32) {
    event.preventDefault();
  }
});

password.addEventListener("keypress", function (event) {
  var key = event.keyCode;
  if (key === 32) {
    event.preventDefault();
  }
});

function checkInputs(e) {
  let firstNameValue = firstName.value.trim();
  let lastNameValue = lastName.value.trim();
  let passwordValue = password.value.trim();
  let usernameValue = username.value.trim();
  // let emailValue = email.value.trim();
  let houseNumberValue = houseNumber.value.trim();
  let sitioValue = sitio.value.trim();
  let contactValue = contact.value.trim();

  if (firstNameValue == "") {
    setErrorFor(firstName, "First Name is blank");
    e.preventDefault();
  } else {
    setSuccessFor(firstName);
  }
  if (gender.value == "") {
    setErrorFor(gender, "Gender not specified.");
    e.preventDefault();
  } else {
    setSuccessFor(gender);
  }
  if (maritalStatus.value == "") {
    setErrorFor(maritalStatus, "Marital Status not specified.");
    e.preventDefault();
  } else {
    setSuccessFor(maritalStatus);
  }
  if (birthday.value == "") {
    setErrorFor(birthday, "Birthday not given.");
    e.preventDefault();
  } else {
    setSuccessFor(birthday);
  }

  // if (gender.value == "") {
  //   setErrorFor(gender, "Gender is not Specified");
  //   e.preventDefault();
  // } else {
  //   setSuccessFor(gender);
  // }

  if (lastNameValue == "") {
    setErrorFor(lastName, "Last Name is blank");
    e.preventDefault();
  } else {
    setSuccessFor(lastName);
  }

  // if (emailValue == "") {
  //   setErrorFor(email, "Email is blank");
  //   e.preventDefault();
  // } else if (
  //   !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailValue)
  // ) {
  //   setErrorFor(email, "That Email is invalid");
  //   e.preventDefault();
  // } else {
  //   setSuccessFor(email);
  // }

  if (usernameValue == "") {
    setErrorFor(username, "Username is blank");
    e.preventDefault();
  } else if (usernameValue.length < 4) {
    setErrorFor(username, "username should be atleast 4 characters");
    e.preventDefault();
  } else {
    setSuccessFor(username);
  }

  if (passwordValue == "") {
    setErrorFor(password, "Password is blank");
    e.preventDefault();
  } else if (passwordValue.length < 8) {
    setErrorFor(password, "Password should be atleast 8 characters");
    e.preventDefault();
  } else {
    setSuccessFor(password);
  }
  if (houseNumberValue == "") {
    setErrorFor(houseNumber, "House # is blank");
    e.preventDefault();
  } else if (contactValue.length > 4){
    setErrorFor(sitio, "Contact should not be 4 characters length");
  }else {
    setSuccessFor(houseNumber);
  }
  if (sitioValue == "") {
    setErrorFor(sitio, "Sitio is blank");
    e.preventDefault();
  } else {
    setSuccessFor(sitio);
  }
  if (contactValue == "") {
    setErrorFor(contact, "Contact is blank");
    e.preventDefault();
  } else if(contactValue.length < 11){
    setErrorFor(contact, "Contact should be 11 characters");
  } 
  else {
    setSuccessFor(contact);
  }
}

function setErrorFor(input, message) {
  let formControl = input.parentElement;
  let span = formControl.querySelector("span");

  span.innerText = message;

  formControl.classList.add("error");
  formControl.classList.remove("success");
}
function setSuccessFor(input) {
  let formControl = input.parentElement;
  let span = formControl.querySelector("span");

  span.innerText = "Looks Good";

  formControl.classList.add("success");
  formControl.classList.remove("error");
}
