document.getElementById("form-contacto").addEventListener("submit", function(event) {
    event.preventDefault();
    document.getElementById("mensaje").textContent = "¡Gracias por tu mensaje! Te contactaré pronto.";
    this.reset();
  });
  