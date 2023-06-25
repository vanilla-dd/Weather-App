const toastContainer = document.querySelector(".toastContainer");
const toastnoti = () => {
  const toast = document.createElement("div");
  toast.textContent = "Please re-check the name";
  toastContainer.appendChild(toast);
  toast.classList.add("toastNoti");
  setTimeout(() => {
    toast.remove();
  }, 2000);
};
export default toastnoti;
