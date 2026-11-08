const container = document.querySelector(".container");
const envelope = document.querySelector(".envelope");
const letter = document.querySelector(".letter");
const viewButton = document.querySelector(".view");

function setOpen(isOpen) {
    container.classList.toggle("open", isOpen);
    viewButton.textContent = isOpen ? "Close Letter" : "View Letter";
    viewButton.setAttribute("aria-expanded", String(isOpen));
    letter.setAttribute("aria-hidden", String(!isOpen));
}

function toggle() {
    setOpen(!container.classList.contains("open"));
}

viewButton.addEventListener("click", toggle);
envelope.addEventListener("click", toggle);

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setOpen(false);
});