(() => {
  'use strict';
  const forms = document.querySelectorAll('.needs-validation');
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add('was-validated');
    }, false);
  });
})();

const button = document.querySelector(".carrito_enviar");

if (button) {
  button.addEventListener('click', () => {
    location.href = "index2.html";
  });
}

const botones = document.querySelectorAll(".añadir");

botones.forEach(boton => {
  boton.addEventListener("click", e => {
    e.preventDefault();

    const card = boton.closest(".card");
    const nombre = card.querySelector(".card-title").textContent;
    const descripcion = card.querySelector(".card-text").textContent;
    const imagen = card.querySelector("img").src;

    const producto = { nombre, descripcion, imagen };

    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    carrito.push(producto);
    localStorage.setItem("carrito", JSON.stringify(carrito));

    alert(`"${nombre}" añadido al carrito 🛒`);
  });
});
