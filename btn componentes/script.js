const btnOpen = document.querySelector("[data-abrir]");
const containerAlertModal = document.querySelector("container-modal-alert");
const alertModal = document.querySelector(".alert-modal");
const btnCancel = document.querySelector("[data-cancel]");
const btnPrev = document.querySelector("[data-prev]");

//Evento de click dos botões
btnOpen.addEventListener("click", openModal);
btnCancel.addEventListener("click", mansangerAlert);
btnPrev.addEventListener("click", mansangerAert);


//Função onde adiciona a classe 'show' para abrir o modal
function openModal() {
  const modal = document.querySelector(".container-modal");
  modal.classList.add("show");
}

//Função onde remove a classe 'show' para fechar o modal
function closeModal() {
  const modal = document.querySelector(".container-modal");
  modal.classList.remove("show");
}


// alert
function mansangerAert(color) {
  containerAlertModal.classList.add("active");
  alertModal.style.background = color
  setTimeout(()=>{
    containerAlertModal.classList.remove('active')
  },5000)
}


function mansangerAlertCancel(colorRed) {
  closeModal();
  mansangerAlert();
  alertModal.style.background = colorRed;
  setTimeout(() => {
    closeAlert();
  }, 5000);
}
mansangerAlertCancel("#ff5145");


