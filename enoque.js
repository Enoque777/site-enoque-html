document.querySelector("form").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Mensagem enviada com sucesso!");
});

const form = document.getElementById('contact-form');
const successMessage = document.getElementById('form-success');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const formData = new FormData(form);

  fetch(form.action, {
    method: "POST",
    body: formData,
    headers: {
      'Accept': 'application/json'
    }
  }).then(response => {
    if (response.ok) {
      form.reset();
      successMessage.style.display = "block";
    }
  }).catch(error => {
    console.error('Error sending message:', error);
  });
});