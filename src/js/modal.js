(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
    body: document.querySelector("[data-page]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("backdrop--is-hidden");
    refs.body.classList.toggle("no-scroll");
  }
})();

(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open-hero]"),
    closeModalBtn: document.querySelector("[data-modal-close-hero]"),
    modal: document.querySelector("[data-modal-hero]"),
    body: document.querySelector("[data-page-hero]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("backdrop--is-hidden");
    refs.body.classList.toggle("no-scroll");
  }
})();

(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open-offerings]"),
    closeModalBtn: document.querySelector("[data-modal-close-offerings]"),
    modal: document.querySelector("[data-modal-offerings]"),
    body: document.querySelector("[data-page-offerings]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("backdrop--is-hidden");
    refs.body.classList.toggle("no-scroll");
  }
})();