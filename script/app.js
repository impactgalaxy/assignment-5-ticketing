
let totalSeats = 40;
const arr = [];
let totalPrice = 0;
let count = 0;

function myApp() {
    const seats = document.querySelectorAll(".seat");
    const tbody = document.getElementById("tbody");

    for (const seat of seats) {

        seat.addEventListener("click", () => {
            const getInnerText = seat.innerText;
            setBackgroundColorById(getInnerText);

            if (seat.classList.contains("bg-green-600")) {

                if (arr.length > 3) {
                    alert("You can't by over 4 seats");
                    totalSeats = totalSeats;
                    count = count;
                    removeBackgroundColorById(getInnerText);
                    addValueById("avail-seats", totalSeats);
                    addValueById("show", totalSeats);
                    addValueById("count", count);
                }
                else {
                    totalSeats -= 1;
                    const tr = document.createElement("tr");
                    const td1 = document.createElement("td");
                    const td2 = document.createElement("td");
                    const td3 = document.createElement("td");
                    td1.innerText = getInnerText;
                    td2.innerText = "Economy";
                    td3.innerText = "550";
                    td3.setAttribute("class", "price");
                    tr.append(td1, td2, td3);
                    tbody.appendChild(tr);
                    arr.push(getInnerText);
                    addValueById("total-price", totalPrice += 550);
                    addValueById("grand-total", totalPrice);
                    addValueById("avail-seats", totalSeats);
                    addValueById("show", totalSeats);
                    count += 1
                    addValueById("count", count);
                }

            } else {
                totalSeats += 1;
                arr.pop();
                addValueById("avail-seats", totalSeats);
                addValueById("show", totalSeats);
                tbody.removeChild(tbody.lastElementChild);
                addValueById("total-price", totalPrice -= 550);
                addValueById("grand-total", totalPrice);
                count -= 1
                addValueById("count", count);
            }
        });
    }

}
const couponCode = document.getElementById("couponCode");
const couponBtn = document.getElementById("couponBtn");
couponCode.onkeyup = function (event) {
    if (event.target.value.length > 4) {
        couponBtn.removeAttribute("disabled");
    }

}


function couponApply() {
    const couponCode = document.getElementById("couponCode");
    const couponDiv = document.getElementById("couponDiv");
    const couponBtn = document.getElementById("couponBtn");
    const discountShow = document.getElementById("discountShow");
    const totalPrice = document.getElementById("total-price").innerText;
    const newTotal = parseFloat(totalPrice);

    if (couponCode.value === "NEW15" && newTotal !== 0) {
        const discounted = newTotal * 15 / 100;
        discountShow.innerText = `Congratulations! You have got ${discounted} taka discount`;
        addValueById("grand-total", newTotal - discounted);

    } else if (couponCode.value === "Couple20" && newTotal !== 0) {
        const discounted = newTotal * 20 / 100;
        discountShow.innerText = `Congratulations! You have got ${discounted} taka discount`;
        addValueById("grand-total", newTotal - discounted);
    }
    else {
        couponDiv.style.display = "none";
        discountShow.innerText = "";
    }

    couponCode.value = "";
    couponBtn.setAttribute("disabled", true);

}
const form = document.getElementById("form");
const message = document.getElementById("message");

form.addEventListener("click", (e) => {
    e.preventDefault();
    const userNumber = document.getElementById("user-number");

    const price = document.getElementById("total-price").innerText;
    if (userNumber.value === "" || parseInt(price) === 0) {
        alert("Please input you number\nOr by at least 1 seat");
    }
    else {
        message.classList.add("flex");
        message.classList.remove("hidden");
        hideElement("main");
        hideElement("footer");
        hideElement("header");
    }
})
function display() {
    hideElement("message");
    message.classList.remove("flex");
    displayElement("header");
    displayElement("main")
    displayElement("footer");
    location.reload();

}


myApp();

