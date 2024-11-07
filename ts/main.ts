
const modal = document.getElementById("modal") as HTMLElement;
const loginBtn = document.getElementById("loginBtn") as HTMLElement;
const getStartedBtn = document.getElementById("getStartedBtn") as HTMLElement;
const closeModalBtn = document.getElementById("closeModal") as HTMLElement;

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
