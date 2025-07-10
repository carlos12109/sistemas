function iniciarSesion() {
  const usuario = document.getElementById("usuario").value;
  const contrasena = document.getElementById("contrasena").value;

  if (usuario === "admin" && contrasena === "1234") {
    mostrarPantalla("menuScreen");
  } else {
    alert("Usuario o contraseña incorrecta");
  }
}

function cerrarSesion() {
  mostrarPantalla("loginScreen");
  document.getElementById("usuario").value = "";
  document.getElementById("contrasena").value = "";
}

function mostrarAgregarNuevo() {
  mostrarPantalla("agregarNuevoScreen");
}

function mostrarModificarUsuario() {
  mostrarPantalla("modificarUsuarioScreen");
}

function volverAlMenu() {
  mostrarPantalla("menuScreen");
}

function realizarReporte() {
  mostrarPantalla("reporteScreen");
}

function visualizarReporte() {
  mostrarPantalla("visualizarReporteScreen");
}

function exportarReporte() {
  mostrarPantalla("exportarReporteScreen");
}

function volverAlReporte() {
  mostrarPantalla("reporteScreen");
}

function salirDeReporte() {
  document.getElementById("fechaInicio").value = "";
  document.getElementById("fechaFin").value = "";
  mostrarPantalla("menuScreen");
}

function mostrarPantalla(idPantalla) {
  const pantallas = [
    "loginScreen",
    "menuScreen",
    "agregarNuevoScreen",
    "modificarUsuarioScreen",
    "reporteScreen",
    "visualizarReporteScreen",
    "exportarReporteScreen"
  ];

  pantallas.forEach(id => {
    document.getElementById(id).classList.add("hidden");
  });

  document.getElementById(idPantalla).classList.remove("hidden");
}

// Inicializar la pantalla de inicio de sesión al cargar la página"
// este boton retrocede a la pantalla de reporte <button onclick="salirReporte()">Salir</button>
window.onload = function () {
  mostrarPantalla("loginScreen");
};
