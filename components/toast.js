// selecting toast container
const toastContainer = document.querySelector(".toastContainer");
const toastnoti = () => {
  // creating toast
  const toast = document.createElement("div");
  toast.textContent = "Please re-check the name";
  toastContainer.appendChild(toast);
  toast.classList.add("toastNoti");
  // removing toast
  setTimeout(() => {
    toast.remove();
  }, 2000);
};
export default toastnoti;
