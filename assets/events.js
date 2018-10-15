let button = document.getElementById("add.button");
let table = document.getElementById("tbody");
let totalPrice = document.getElementById("totalPrice");
let totalPriceValue = 0;

button.addEventListener("click", function (event) {
    event.preventDefault();

    let productName = document.getElementById("product").value;
    let productPrice = document.getElementById("price").value;

    totalPriceValue += parseFloat(productPrice);
    totalPrice.innerText = totalPriceValue;

    let tableRow = document.createElement("tr");
    let tableDataName = document.createElement("td");
    let tableDataPrice = document.createElement("td");
    let tableDataRemove = document.createElement("td");

    tableDataName.innerText = productName;
    tableDataPrice.innerText = productPrice;
    tableDataRemove.innerHTML = '<a href="#">verwijder</a>';

    tableDataRemove.addEventListener("click", deleteRow);

    tableRow.appendChild(tableDataName);
    tableRow.appendChild(tableDataPrice);
    tableRow.appendChild(tableDataRemove);
    table.appendChild(tableRow);
})

function deleteRow(event) {
    let tr = event.target.parentNode.parentNode;
    table.removeChild(tr);
}