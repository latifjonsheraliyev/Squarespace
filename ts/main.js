"use strict";
const modal = document.getElementById("modal");
const loginBtn = document.getElementById("loginBtn");
const getStartedBtn = document.getElementById("getStartedBtn");
const closeModalBtn = document.getElementById("closeModal");
const showModal = () => {
    modal.style.display = "block";
};
const hideModal = () => {
    modal.style.display = "none";
};
loginBtn.addEventListener("click", (event) => {
    event.preventDefault();
    showModal();
});
getStartedBtn.addEventListener("click", (event) => {
    event.preventDefault();
    showModal();
});
closeModalBtn.addEventListener("click", () => {
    hideModal();
});
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        hideModal();
    }
});
//# sourceMappingURL=main.js.map