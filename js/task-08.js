const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const { email, password } = event.currentTarget.elements;

  if (password.value === '' || email.value === '') {
    return alert('Все поля должны быть заполнены');
  }

  console.log({ email: email.value, password: password.value });
  formEl.reset();
}
