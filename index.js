let entrada = prompt("Ingresa tu pais de nacimiento");

while (entrada.toUpperCase() != "ESC") {
  alert("Naciste en " + entrada);
  entrada = prompt("Ingresa otra nacionalidad");
}
