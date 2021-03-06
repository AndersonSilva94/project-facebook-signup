function deleteAutocomplete () {
  const inputsForms = document.querySelectorAll('input[type="text"]');
  for (let index = 0; index < inputsForms.length; index += 1) {
    inputsForms[index].autocomplete = "off";
  }
}
deleteAutocomplete();

const buttonLogin = document.getElementById('button-login');

function alertLoginButton() {
  const emailPhone = document.getElementById('user-email-phone').value;
  const passwordEnter = document.getElementById('user-password').value;
  if (emailPhone === '') {
    alert('Digite um email válido!');
  } else if(passwordEnter === '') {
    alert('Digite uma senha!')
  }
}

buttonLogin.addEventListener('click', alertLoginButton);

const rightContentInputs = document.querySelectorAll('.right-content input[type="text"]');
const passwordInput = document.querySelector('.right-content input[type="password"]');
const divRadios = document.querySelectorAll('#radio-gender input[type="radio"]');

function validateInputs () {
  let resultTrue = true;
  let resultFalse = false;
  for (let index = 0; index < rightContentInputs.length; index += 1) {
    if ((rightContentInputs[index].value && passwordInput.value) === '') {
      resultTrue = resultFalse;
    }
  }
  return resultTrue;
}

function validateRadios () {
  let resultTrue = true;
  let resultFalse = false;
  for(let index = 0; index < divRadios.length; index += 1) {
    if (divRadios[index].checked) {
      resultFalse = resultFalse || resultTrue;
    }
  }
  return resultFalse
}

const buttonRegister = document.getElementById('facebook-register');

function createElements (elements, text) {
  const createElement = document.createElement(elements);
  createElement.innerHTML = text;
  return createElement;
}

function realoadPage(element) {
  element.addEventListener('click', () => {
    location.reload();
  })
}

function createDiv () {
  const rightContent = document.querySelector('.right-content');
  const firstname = document.querySelector('input[name="firstname"]').value;
  const lastname = document.querySelector('input[name="lastname"]').value;
  const birthday = document.querySelector('input[name="birthdate"]').value;
  const email = document.querySelector('input[name="phone_email"]').value;
  rightContent.innerHTML = '';
  rightContent.appendChild(createElements('div', ''));
  const newDiv = document.querySelector('.right-content div');
  newDiv.id = 'new-div';
  newDiv.appendChild(createElements('h2', `Olá, ${firstname} ${lastname} <br> Estamos muito felizes em ter você conosco!`))
  newDiv.appendChild(createElements('img', ''));
  const imgDiv = document.querySelector('#new-div img');
  imgDiv.src = 'imgs/smile.svg';
  newDiv.appendChild(createElements('h3',
  `Alguns dados informados: `));
  newDiv.appendChild(createElements('p',
   `<strong>Data de nascimento:</strong> ${birthday}`));
  newDiv.appendChild(createElements('p',
   `<strong>E-mail ou telefone:</strong> ${email}`));
  newDiv.appendChild(createElements('button', 'Voltar'));
   const buttonReload = document.querySelector('#new-div button')
   realoadPage(buttonReload);
}

function validateForm () {
  buttonRegister.addEventListener('click', (event) => {
    const functionInputsText = validateInputs();
    const functionInputsRadio = validateRadios();
    if ((functionInputsText && functionInputsRadio) === false) {
      event.preventDefault();
      document.querySelector('.validateError').style.display = 'flex';
    } else {
      createDiv();
    }
  })
}
validateForm();

const radioFemale = document.getElementById('feminino');
const radioMale = document.getElementById('masculino');
const radioCustomized = document.getElementById('personalizado');
const divInputCustomized = document.getElementById('customized-container');

function selectCustomized() {
  const inputCustomized = document.createElement('input');
  inputCustomized.type = 'text';
  inputCustomized.name = 'gender-custom';
  inputCustomized.placeholder = 'Gênero (opcional)';
  inputCustomized.id = 'input-customized';
  divInputCustomized.appendChild(inputCustomized);
}

function removeCustomized() {
  const inputCustomized = document.getElementById('input-customized');
  if (inputCustomized) {
    divInputCustomized.removeChild(inputCustomized);
  }
}

radioCustomized.addEventListener('change', selectCustomized);

radioFemale.addEventListener('change', removeCustomized);

radioMale.addEventListener('change', removeCustomized);
