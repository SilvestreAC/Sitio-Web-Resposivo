
const overlay = document.getElementById("overlay");
const links = document.querySelectorAll("nav a");

links.forEach(link => {
  link.addEventListener("click", e => {
    const targetId = link.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);

    // Mostrar overlay
    overlay.style.opacity = "1";

    // Resaltar sección
    targetSection.classList.add("highlight");

    // Quitar efecto después de 1.5 segundos
    setTimeout(() => {
      overlay.style.opacity = "0";
      targetSection.classList.remove("highlight");
    }, 1500);
  });
});
