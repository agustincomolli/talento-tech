let number_1 = new Number(prompt("Ingresa un numero: "));
let number_2 = new Number(prompt("Ingresa otro numero: "));

if (isNaN(number_1)) {
    document.write("<p class='error'>El primer valor no es un numero</p>");
} else if (isNaN(number_2)) {
    document.write("<p class='error'>El segundo valor no es un numero</p>");
} else {
    add = number_1 + number_2;
    substract = number_1 - number_2;
    multiply = number_1 * number_2;
    divide = number_1 / number_2;

    document.write("<h3 class='info'>Los valores introducidos son: " + number_1 + " y " + number_2 + "</h3>");
    document.write("<p>El resultado de la suma es: " + (number_1 + number_2) + "</p>");
    document.write("<p>El resultado de la resta es: " + (number_1 - number_2) + "</p>");
    document.write("<p>El resultado de la multiplicacion es: " + (number_1 * number_2) + "</p>");
    document.write("<p>El resultado de la division es: " + (number_1 / number_2) + "</p>");
}
