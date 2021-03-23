const buttonLogin = document.getElementById('button-login');

function alertLoginButton() {
  const emailPhone = document.getElementById('user-email-phone').value;
  alert(emailPhone);
}

buttonLogin.addEventListener('click', alertLoginButton);

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
