// const listItems = document.getElementsByTagName("li");
// console.log(listItems);

// const ul = document.getElementById("groceryList");
// const firstChild = groceryList.firstElementChild;
// console.log(firstChild);

// firstChild.classList.add("standOut");

// const ph = document.getElementById("groceryList");
// const newListItem = document.createElement("li");
// newListItem.innerText = "krop sla";
// ph.appendChild(newListItem);

// const groceries = [
//     {
//         name: "tandenborstel",
//         price: 2
//     },
//     {
//         name: "deodorant",
//         price: 4
//     },
//     {
//         name: "bakmeel",
//         price: 1
//     },
//     {
//         name: "wortel",
//         price: 0.5
//     },
//     {
//         name: "krop sla",
//         price: 1
//     }
// ]

// console.table(groceries);

// for (let index = 0; index < groceries.length; index++) {
//     const element = groceries[index];
//     console.log(element);
// }

// const table = document.createElement("table");
// const tr = document.createElement("tr");
// const tdName = document.createElement("td");
// const tdPrice = document.createElement("td");

// tr.appendChild(tdName);
// tr.appendChild(tdPrice);
// table.appendChild(tr);

// const body = document.getElementById("body");
// body.appendChild(table);


// for (let index = 0; index < groceries.length; index++) {
//     const element = groceries[index].name;
//     const tr = document.createElement("tr");
//     const tdName = document.createElement("td");
//     const tdPrice = document.createElement("td");
//     tdName.id = "name";
//     tdName.innerText = groceries[index].name;
//     tdPrice.innerText = groceries[index].price;
//     tr.appendChild(tdName);
//     tr.appendChild(tdPrice);
//     table.appendChild(tr);
// }

// for (let index = 0; index < groceries.length; index++) {
//     const element = groceries[index].price;
//     console.log(element);
// }

// const totalPrice = function() {
//     let total = 0;
//     let price = groceries.forEach(function(element, index, array){
//             total += element.price;
//     })
// }

