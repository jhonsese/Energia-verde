function cargarPagina(pagina) {
    fetch(`/usuarios?page=${pagina}`)
        .then(response => response.text())
        .then(html => {
            let parser = new DOMParser();
            let doc = parser.parseFromString(html, 'text/html');
            document.getElementById("tabla-usuarios").innerHTML = doc.getElementById("tabla-usuarios").innerHTML;
            document.querySelector(".pagination").innerHTML = doc.querySelector(".pagination").innerHTML;
        });
}

document.addEventListener("DOMContentLoaded", function () {
    fetch("/api/regiones")
        .then(response => response.json())
        .then(data => {
            const select = document.getElementById("region-filter");
            data.forEach(region => {
                select.innerHTML += `<option value="${region}">${region}</option>`;
            });
        });

    fetch("/api/productos")
        .then(response => response.json())
        .then(data => {
            const select = document.getElementById("product-filter");
            data.forEach(product => {
                select.innerHTML += `<option value="${product}">${product}</option>`;
            });
        });
});

function cargarPaises() {
    const region = document.getElementById("region-filter").value;
    fetch(`/api/paises?region=${region}`)
        .then(response => response.json())
        .then(data => {
            const select = document.getElementById("country-filter");
            select.innerHTML = `<option value="">Seleccione un país</option>`;
            data.forEach(country => {
                select.innerHTML += `<option value="${country}">${country}</option>`;
            });
        });
}
