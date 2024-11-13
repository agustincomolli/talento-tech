document.addEventListener("DOMContentLoaded", () => {
    const addButton = document.querySelector("#add");

    addButton.addEventListener("click", addProduct);
});

/**
 * Agrega un producto a la tabla con los valores ingresados en el formulario.
 *
 * @private
 */
function addProduct(event) {
    event.preventDefault();

    const table = document.querySelector("table");
    const product = document.querySelector("#product").value;
    const price = document.querySelector("#price").value;
    const hasDiscount = document.querySelector("#has-discount").checked;

    const row = document.createElement("tr");

    const productCell = document.createElement("td");
    productCell.textContent = product;
    row.appendChild(productCell);

    const priceCell = document.createElement("td");
    priceCell.textContent = `$ ${price}`;
    row.appendChild(priceCell);

    const discountCell = document.createElement("td");
    discountCell.textContent = hasDiscount ? "Sí" : "No";
    row.appendChild(discountCell);

    // Agregar la fila a la tabla
    table.tBodies[0].appendChild(row);
};