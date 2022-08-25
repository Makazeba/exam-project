(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
    html: document.querySelector("html")
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
    refs.html.classList.toggle("overflow-lock");
  }

  const refs2 = {
    openModalBtn: document.querySelector("[data-modal2-open]"),
    closeModalBtn: document.querySelector("[data-modal2-close]"),
    modal: document.querySelector("[data-modal2]"),
    html: document.querySelector("html")
  };

  refs2.openModalBtn.addEventListener("click", toggleModal2);
  refs2.closeModalBtn.addEventListener("click", toggleModal2);

  function toggleModal2() {
    refs2.modal.classList.toggle("is-hidden");
    refs.html.classList.toggle("overflow-lock");
  }
})();
