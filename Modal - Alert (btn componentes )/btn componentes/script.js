//Variaveis recebendo os elementos do Dom
const btnOpen = document.querySelector("[data-abrir]");
const containerAlertModal = document.querySelector(".container-modal-alert");
const alertModal = document.querySelector(".alert-modal");
const btnCancel = document.querySelector("[data-cancel]");
const btnPrev = document.querySelector("[data-prev]");
const modal = document.querySelector(".container-modal");

//Eventos dos botões
btnOpen.addEventListener("click", openModal);
btnCancel.addEventListener("click", callAlert);
btnPrev.addEventListener("click", callAlert);

//Adciona a classe 'show' e abre o modal
function openModal() {
  modal.classList.add("show");
}

//Remove a classe 'show' e fecha o modal
function closeModal() {
  modal.classList.remove("show");
}

//Remover o modal clicando em qualquer lugar da tela

window.addEventListener("click", (event) => {
  if (event.target == modal) closeModal();
});


//Adciona a classe 'active' e abre o alert
//Adciona a cor ao background do alert
//Cria um paragrafo e um texo dentro modal do alert
//Adicionou um elemento html,ou seja o "Favicon"
//Chama o timeout para remover a class 'active depois de 5 segundos
function setAlert(color,favicon,msg) {
  containerAlertModal.classList.add("active");
  
  let paragraf = document.createElement('p')
  
  paragraf.innerText = msg
  paragraf.classList.add('p-style')
  
  alertModal.style.background = color;
  alertModal.innerHTML = favicon
  alertModal.appendChild(paragraf)
  setTimeout(() => {
    containerAlertModal.classList.remove("active");
  }, 5000);
}

//Chama a função para fechar modal
//e verifica qual botão esta disparando o evento
//disprara a função setAlert passando cor por parametro
function callAlert(event) {
  closeModal();
  if (event.target.innerText === "Cancelar"){
    setAlert("#ff5145",'<i class="fa-solid fa-triangle-exclamation"></i>', 'Não foi possivél completar a ação. Revise.')
    
  } 
  else setAlert("#67FF5C",'<i class="fa-regular fa-circle-check"></i>', 'Menssagem de sucesso! Parabéns.');
}
