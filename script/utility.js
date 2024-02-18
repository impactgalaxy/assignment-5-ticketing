function setBackgroundColorById(elementId) {
    const getId = document.getElementById(elementId);
    getId.classList.toggle("bg-green-600");
}
function removeBackgroundColorById(elementId) {
    const getId = document.getElementById(elementId);
    getId.classList.remove("bg-green-600");
}
function addValueById(elementId, value) {
    const getId = document.getElementById(elementId);
    getId.innerText = value;
}
function hideElement(elementId) {
    const getId = document.getElementById(elementId);
    getId.classList.add("hidden");
}
function displayElement(elementId) {
    const getId = document.getElementById(elementId);
    getId.classList.add("block");
}