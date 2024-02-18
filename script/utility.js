function setBackgroundColorById(elementId) {
    const getId = document.getElementById(elementId);
    getId.classList.toggle("bg-orange-600");
}
function removeBackgroundColorById(elementId) {
    const getId = document.getElementById(elementId);
    getId.classList.remove("bg-orange-600");
}
function addValueById(elementId, value) {
    const getId = document.getElementById(elementId);
    getId.innerText = value;
}