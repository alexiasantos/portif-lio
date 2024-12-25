const menuToggle = document.querySelector('.menu-toggle');
        const menuItens = document.querySelector('.menu-itens');
        menuToggle.addEventListener('click', () => {
            menuItens.classList.toggle('active');
        });


        // Inicializa o EmailJS com o seu User ID
emailjs.init("eoP2XQl_L52Hv2DGc"); // Substitua pelo seu User ID do EmailJS

// Obtém o formulário e adiciona o ouvinte de evento
document.getElementById("contact-form").addEventListener("submit", function (event) {
  event.preventDefault(); // Previne o comportamento padrão de envio do formulário

  // Envia os dados do formulário para o serviço EmailJS
  emailjs
    .sendForm("service_alexia", "template_alexia", this) // Substitua pelos seus dados do EmailJS
    .then(
      function () {
        alert("Mensagem enviada com sucesso!");
      },
      function (error) {
        alert("Erro ao enviar a mensagem: " + JSON.stringify(error));
      }
    );
});
