let currentPage = 0;
let totalPages = 1;

document.addEventListener("DOMContentLoaded", function () {
   cargarPaises("country-filter");
   cargarProductos();
   cargarFechas();
   cargarCont();
   cargarPagina(0);
   cargarPaises("pais1"); // Llenará el select con id="pais1"
   cargarPaises("pais2");

   // Event listeners para los filtros
   document.getElementById("country-filter").addEventListener("change", () => cargarPagina(0));
   document.getElementById("product-filter").addEventListener("change", () => cargarPagina(0));
   document.getElementById("time-filter").addEventListener("change", () => cargarPagina(0));
   document.getElementById("cont-filter").addEventListener("change", () => cargarPagina(0));
});

function cargarPagina(page) {
   if (page < 0 || page >= totalPages) return;

   // Obtener los valores seleccionados en los filtros
   let country = document.getElementById("country-filter").value;
   let product = document.getElementById("product-filter").value;
   let time = document.getElementById("time-filter").value;
   let idcont = document.getElementById("cont-filter").value;

   let url = `/api/usuarios?page=${page}&size=5`;
   if (country) url += `&country=${encodeURIComponent(country)}`;
   if (product) url += `&product=${encodeURIComponent(product)}`;
   if (time) url += `&time=${encodeURIComponent(time)}`;
   if (idcont) url += `&idcont=${encodeURIComponent(idcont)}`;

   fetch(url)
      .then(response => response.json())
      .then(data => {
         const tbody = document.getElementById("tabla-usuarios");
         tbody.innerHTML = ""; // Limpiar contenido anterior

         data.usuarios.forEach(usuario => {
            const row = document.createElement("tr");
            row.innerHTML = `
        <td>${usuario.id}</td>
        <td>${usuario.country}</td>
        <td>${usuario.time}</td>
        <td>${usuario.balance}</td>
        <td>${usuario.product}</td>
        <td>${usuario.idcont}</td>
        <td>${usuario.value}</td>
        <td>${usuario.unit}</td> 
       `;
            tbody.appendChild(row);
         });

         // Actualizar paginación
         currentPage = data.currentPage;
         totalPages = data.totalPages;

         document.getElementById("page-input").value = currentPage + 1; // Mostrar número de página actual
         document.getElementById("total-pages").textContent = totalPages;

         document.getElementById("prev-btn").disabled = currentPage === 0;
         document.getElementById("next-btn").disabled = currentPage + 1 >= totalPages;
      })
      .catch(error => console.error("Error cargando la página:", error));
}

function cargarPaises(selectId) {
   fetch("/api/paises")
      .then(response => response.json())
      .then(paises => {
         const select = document.getElementById(selectId);
         if (!select) {
            console.error(`No se encontró el elemento con ID: ${selectId}`);
            return;
         }

         select.innerHTML = `<option value="">Seleccione un país</option>`;
         paises.forEach(pais => {
            const option = document.createElement("option");
            option.value = pais;
            option.textContent = pais;
            select.appendChild(option);
         });
      })
      .catch(error => console.error(`Error cargando los países en ${selectId}:`, error));
}


function cargarProductos() {
   fetch("/api/productos")
      .then(response => response.json())
      .then(productos => {
         const select = document.getElementById("product-filter");
         select.innerHTML = `<option value="">Seleccione un producto</option>`;
         productos.forEach(producto => {
            const option = document.createElement("option");
            option.value = producto;
            option.textContent = producto;
            select.appendChild(option);
         });
      })
      .catch(error => console.error("Error cargando los productos:", error));
}

function cargarCont() {
   fetch("/api/idcont")
      .then(response => response.json())
      .then(idconts => {
         const select = document.getElementById("cont-filter");
         select.innerHTML = `<option value="">Seleccione un continente</option>`;
         idconts.forEach(idcont => {
            const option = document.createElement("option");
            option.value = idcont;
            option.textContent = idcont;
            select.appendChild(option);
         });
      })
      .catch(error => console.error("Error cargando los continentes:", error));
}

function cargarFechas() {
   fetch("/api/times")
      .then(response => response.json())
      .then(fechas => {
         const select = document.getElementById("time-filter");
         select.innerHTML = `<option value="">Seleccione una fecha</option>`;
         fechas.forEach(fecha => {
            const option = document.createElement("option");
            option.value = fecha;
            option.textContent = fecha;
            select.appendChild(option);
         });
      })
      .catch(error => console.error("Error cargando las fechas:", error));
}

document.getElementById("page-input").addEventListener("keypress", function (event) {
   if (event.key === "Enter") {
      irAPagina();
   }
});

function irAPagina() {
   let pageInput = document.getElementById("page-input").value;
   let pageNumber = parseInt(pageInput, 10) - 1;

   if (!isNaN(pageNumber) && pageNumber >= 0 && pageNumber < totalPages) {
      cargarPagina(pageNumber);
   } else {
      Swal.fire({
         title: "Numero de pagina invalido",
         text: "Recuerda que solo admite numeros positivos",
         icon: "error"
      });
      document.getElementById("page-input").value = currentPage + 1; // Restaurar valor actual si es inválido
   }
}



// Logica del Comparador

const etiquetasPersonalizadas = {
    "Solar": "Energía Solar",
    "Wind": "Energía Eólica",
    "Hydro": "Energía Hidroeléctrica",
    "Total Combustible Fuels": "Combustibles Fósiles",
    "Electricity": "Electricidad Total",
    "Total Renewables (Hydro, Geo, Solar, Wind, Other)": "Total Energía Renovable"
};
// LISTENER GENERAL
document.addEventListener("DOMContentLoaded", function () {
    let botonComparar = document.getElementById("comparar");
    let selectAnio = document.getElementById("anio");
    let selectMes = document.getElementById("mes");
    let selectPais1 = document.getElementById("pais1");
    let selectPais2 = document.getElementById("pais2");

    if (selectAnio) selectAnio.addEventListener("change", () => {
        ocultarElementos(".contenido3");
        ocultarElementos(".contenido1");
    });

    if (selectMes) selectMes.addEventListener("change", () => {
        ocultarElementos(".contenido3");
        ocultarElementos(".contenido1");
    });

    if (selectPais1) selectPais1.addEventListener("change", () => {
        ocultarElementos(".contenido3");
        ocultarElementos(".contenido1");
    });

    if (selectPais2) selectPais2.addEventListener("change", () => {
        ocultarElementos(".contenido3");
        ocultarElementos(".contenido1");
    });


    if (botonComparar) {
        botonComparar.addEventListener("click", function () {
            let selectAnio = document.getElementById("anio");
            let selectMes = document.getElementById("mes");

            if (!selectAnio) {
                console.error("❌ No se encontró el selector con ID 'anio'.");
                return;
            }

            if (!selectMes) {
                console.error("❌ No se encontró el selector con ID 'mes'.");
                return;
            }


            let country1 = document.getElementById("pais1")?.value;
            let country2 = document.getElementById("pais2")?.value;
            let mes = selectMes.value;
            let anio = selectAnio.value;

            if (!country1 || !country2) {
                atention("Por favor, seleccione ambos países.");
                return;
            }

            if (country1 === country2) {
                atention("Por favor, seleccione dos países diferentes.");
                return;
            }

            if (!mes || !anio) {
                atention("Por favor, seleccione un mes y un año.");
                return;
            }
            // ✅ Si el año seleccionado es "Anual"
            if (selectAnio.value === "Anual") {
                // console.log("📅 Modo Anual seleccionado");
                //selectMes.value = ""; // ❌ Limpiar la selección de mes
                realizarComparacionAnual();
            }
            // ✅ Si no es "Anual"
            else {
                // console.log("📊 Ejecutando comparación mensual...");
                realizarComparacion();
            }
        });
    } else {
        console.error("❌ No se encontró el botón con ID 'comparar'.");
    }
});

///// PARA LA COMPARACIÓN MENSUAL

function realizarComparacion() {
    // Obtener valores seleccionados
    let country1 = document.getElementById("pais1").value;
    let country2 = document.getElementById("pais2").value;
    let mes = document.getElementById("mes").value;
    let anio = document.getElementById("anio").value;


    ocultarElementos(".contenido3" )

    // ✅ Verificar que ambos países sean diferentes antes de la petición
    if (!country1 || !country2) {
        alert("Por favor seleccione ambos países.");
        return;
    }
    if (country1 === country2) {
        alert("Por favor seleccione dos países diferentes.");
        return;
    }

    // ✅ Verificar que se haya seleccionado mes y año
    if (!mes || !anio) {
        alert("Por favor seleccione un mes y un año.");
        return;
    }

    // ✅ Construcción de fecha correcta
    let time = `${mes} ${anio}`;

    // ✅ Construcción de URL con parámetros codificados
    let url1 = `/api/comparacion?country=${encodeURIComponent(country1)}&time=${encodeURIComponent(time)}`;
    let url2 = `/api/comparacion?country=${encodeURIComponent(country2)}&time=${encodeURIComponent(time)}`;

    // ✅ Hacer las peticiones fetch
    Promise.all([fetch(url1), fetch(url2)])
        .then(responses => Promise.all(responses.map(res => res.json())))
        .then(([data1, data2]) => {
            // console.log("📊 Datos recibidos:", data1, data2);

            // ✅ Verificar que los datos no sean null o undefined antes de usar Object.keys()
            if (!data1 || !data2) {
                alert("Error al obtener los datos.");
                return;
            }

            // ✅ Si ambos datos están vacíos, no se puede comparar
            if (Object.keys(data1).length === 0 && Object.keys(data2).length === 0) {
                alert("No es posible realizar la comparación.");
                mostrarElementos(false, ".contenido1");
                return;
            }

            // ✅ Verificar si los datos son iguales
            if (JSON.stringify(data1) === JSON.stringify(data2)) {
                alert("Los datos son idénticos. Por favor elija dos países diferentes.");
                mostrarElementos(false, ".contenido1");
                return;
            }

            // ✅ Verificar si alguno de los datos está vacío
            if (Object.keys(data1).length === 0) {
                alert(`No hay datos disponibles para ${country1} en ${time}.`);
                mostrarElementos(false, ".contenido1");
                return;
            }
            if (Object.keys(data2).length === 0) {
                alert(`No hay datos disponibles para ${country2} en ${time}.`);
                mostrarElementos(false, ".contenido1");
                return;
            }

            // ✅ Si hay datos, mostrar la tabla y actualizar la UI
            mostrarElementos(true, ".contenido1");
            actualizarTabla("tablaComparacionab", data1);

            actualizarTabla("tablaComparacionbb", data2);

            calcularPorcentajeRenovable("pais1-nombre", data1, country1, "porcentaje-renovable-1");
            calcularPorcentajeRenovable("pais2-nombre", data2, country2, "porcentaje-renovable-2");



        })
        .catch(error => console.error("Error en la comparación:", error));
}

// ✅ Función para mostrar u ocultar elementos en la UI
function mostrarElementos(mostrar, claseMostrar) {
    let contenido = document.querySelector(claseMostrar);

    if (!contenido) {
        console.error(`❌ No se encontró el elemento con clase: ${claseMostrar}`);
        return;
    }

    contenido.style.display = mostrar ? "block" : "none";
    contenido.style.opacity = mostrar ? 1 : 0;
}

function ocultarElementos(claseOcultar) {
    let contenido = document.querySelector(claseOcultar);

    if (!contenido) {
        console.error(`❌ No se encontró el elemento con clase: ${claseOcultar}`);
        return;
    }

    contenido.style.display = "none";
    contenido.style.opacity = 0;
}




function actualizarTabla(tablaId, data) {
    let tbody = document.getElementById(tablaId);
    if (!tbody) {
        console.error(`No se encontró el elemento con ID: ${tablaId}`);
        return; // ✅ Aquí se detiene si no se encuentra el tbody
    }

    tbody.innerHTML = ""; // ✅ Se limpia la tabla antes de llenarla

    const ordenEnergia = ["Solar", "Wind", "Hydro",
        "Total Renewables (Hydro, Geo, Solar, Wind, Other)",
        "Total Combustible Fuels", "Electricity"];

    ordenEnergia.forEach(tipoEnergia => {
        if (data.hasOwnProperty(tipoEnergia)) {
            let etiqueta = etiquetasPersonalizadas[tipoEnergia] || tipoEnergia;

            let row = document.createElement("tr");
            row.innerHTML = `<td>${etiqueta}</td><td>${data[tipoEnergia].toFixed(2)} </td>`;
            tbody.appendChild(row);
        }
    });
}


function calcularPorcentajeRenovable(IdTexto, data, country, IdPorcent) {
    let spanPorcentaje = document.getElementById(IdPorcent);
    let spanPais = document.getElementById(IdTexto);

    // Verificar si los elementos existen en el DOM
    if (!spanPorcentaje || !spanPais) {
        console.error("No se encontraron los elementos en el DOM.");
        return;
    }

    // Inicializar acumuladores para energía renovable y total
    let totalElectricidad = 0;
    let totalRenovable = 0;

    // Iterar sobre los datos para identificar los valores de "Electricity" y "Total Renewables"
    data.forEach(entry => {
        const { product, total_energia } = entry;

        if (product === "Electricity") {
            totalElectricidad += total_energia; // Asignar el total de energía producida
        }

        if (product === "Total Renewables (Hydro, Geo, Solar, Wind, Other)") {
            totalRenovable += total_energia; // Sumar el total de energía renovable
        }
    });

    // Evitar división por 0 y calcular el porcentaje
    let porcentaje = (totalElectricidad === 0) ? 0 : (totalRenovable / totalElectricidad) * 100;

    // Actualizar el contenido en la UI
    spanPais.textContent = country; // Mostrar el nombre del país
    spanPorcentaje.textContent = `${porcentaje.toFixed(2)}%`; // Mostrar porcentaje con 2 decimales

    // Devolver el porcentaje
    return porcentaje.toFixed(2); // Devolver el porcentaje con 2 decimales
}


//// A PARTIR DE AQUÍ VA LA COMPARACION ANUAL
function realizarComparacionAnual() {
    let country1 = document.getElementById("pais1").value;
    let country2 = document.getElementById("pais2").value;
    let year = document.getElementById("mes").value; // Selector de año

    ocultarElementos(".contenido1");

    let url1 = `/api/comparacion-anual?country=${encodeURIComponent(country1)}`;
    let url2 = `/api/comparacion-anual?country=${encodeURIComponent(country2)}`;

    Promise.all([fetch(url1), fetch(url2)])
        .then((responses) => Promise.all(responses.map((res) => res.json())))
        .then(([data1, data2]) => {
            // Filtrar los datos por el año seleccionado
            const filtrarDatosPorAnio = (data, anio) => {
                return data.filter((d) => d.year === anio);
            };

            const datosFiltrados1 = filtrarDatosPorAnio(data1, year);
            const datosFiltrados2 = filtrarDatosPorAnio(data2, year);

            // console.log("📊 Datos filtrados:", datosFiltrados1, datosFiltrados2);
            // console.log("📊 Datos originales:", data1, data2);

            mostrarElementos(true, ".contenido3");

            actualizarTablaAnual("tablaComparacioncb", datosFiltrados1);
            actualizarTablaAnual("tablaComparaciondb", datosFiltrados2);

            let porcentaje1= calcularPorcentajeRenovableAnual("pais1-nombre2", datosFiltrados1, country1, "porcentaje-renovable-12");
            let porcentaje2= calcularPorcentajeRenovableAnual("pais2-nombre2", datosFiltrados2, country2, "porcentaje-renovable-22");
            // console.log("pocentajes", porcentaje1, porcentaje2);

            const p1 = calcularPorcentajesEnergia(data1);
            const p2 = calcularPorcentajesEnergia(data2);
            // console.log("📊 Datos Porcentaje:", p1, p2);
            crearGraficoEnergia(p1, p2, country1, country2, year);

            // console.log("crecimiento anual",calcularCrecimientoEnergia(data1));

            actualizarTablaCrecimiento("tcrecimientoa", calcularCrecimientoEnergia(data1));
            actualizarTablaCrecimiento("tcrecimientoc", calcularCrecimientoEnergia(data2));

            escrito1(country1, country2, porcentaje1, porcentaje2);
            escrito2(country1, country2, p1, p2);
            escrito3(country1, country2, calcularCrecimientoEnergia(data1), calcularCrecimientoEnergia(data2))


        })

        .catch((error) => console.error("❌ Error en la comparación anual:", error));

}

function actualizarTablaAnual(tablaId, data) {
    let tbody = document.getElementById(tablaId);
    if (!tbody) {
        console.error(`No se encontró el elemento con ID: ${tablaId}`);
        return; // ✅ Aquí se detiene si no se encuentra el tbody
    }

    tbody.innerHTML = ""; // ✅ Se limpia la tabla antes de llenarla

    // Iterar sobre los datos proporcionados
    data.forEach(entry => {
        const { product, total_energia } = entry; // Extraemos las propiedades necesarias

        // Obtenemos la etiqueta personalizada o usamos el nombre original si no está en el diccionario
        let etiqueta = etiquetasPersonalizadas[product] || product;

        // Creamos una nueva fila para la tabla
        let row = document.createElement("tr");
        row.innerHTML = `<td>${etiqueta}</td><td>${total_energia.toFixed(2)} GWh</td>`;
        tbody.appendChild(row);
    });
}

function calcularPorcentajeRenovableAnual(IdTexto, data, country, IdPorcent) {
    let spanPorcentaje = document.getElementById(IdPorcent);
    let spanPais = document.getElementById(IdTexto);

    // Verificar si los elementos existen en el DOM
    if (!spanPorcentaje || !spanPais) {
        console.error("No se encontraron los elementos en el DOM.");
        return;
    }

    // Inicializar acumuladores para energía renovable y total
    let renovable = 0;
    let consumida = 0;

    // Iterar sobre los datos para calcular energía renovable y total consumida
    data.forEach(entry => {
        const { product, total_energia } = entry;

        // Verificar si el producto está en el diccionario de energías renovables
        if (product === "Total Renewables (Hydro, Geo, Solar, Wind, Other)") {
            renovable += total_energia; // Sumar al acumulador de renovables
        }

        if (product === "Electricity") { // Energía total consumida
            consumida += total_energia; // Sumar al acumulador de consumida
        }
    });

    // Evitar división por 0
    let porcentaje = (consumida === 0) ? 0 : (renovable / consumida) * 100;

    // Actualizar el contenido en la UI
    spanPais.textContent = etiquetasPersonalizadas[country] || country; // Mostrar el nombre del país con etiqueta personalizada
    spanPorcentaje.textContent = `${porcentaje.toFixed(2)}%`; // Mostrar porcentaje con 2 decimales

    return porcentaje.toFixed(2); // Devolver el porcentaje con 2 decimales
}



function calcularPorcentajesEnergia(datos) {
    // Objeto para almacenar los porcentajes organizados por año
    let resultados = {};

    // Iterar sobre los datos
    datos.forEach(item => {
        let { product, year, total_energia } = item;

        // Si el año aún no está en resultados, inicializarlo
        if (!resultados[year]) {
            resultados[year] = {
                Porcentajes: {
                    Hydro: "0%",
                    Solar: "0%",
                    Wind: "0%",
                    TotalRenewables: "0%"
                }
            };
        }

        // Asignar valores según el tipo de energía
        if (product === "Electricity") {
            resultados[year].Electricity = total_energia;
        } else if (product === "Hydro") {
            resultados[year].Hydro = total_energia;
        } else if (product === "Solar") {
            resultados[year].Solar = total_energia;
        } else if (product === "Wind") {
            resultados[year].Wind = total_energia;
        } else if (product.includes("Total Renewables (Hydro, Geo, Solar, Wind, Other)")) {
            resultados[year].TotalRenewables = total_energia;
        }
    });

    // Calcular porcentajes
    Object.keys(resultados).forEach(year => {
        let totalElectricity = resultados[year].Electricity;

        if (totalElectricity > 0) {
            resultados[year].Porcentajes = {
                Hydro: (resultados[year].Hydro / totalElectricity * 100).toFixed(2) + '%',
                Solar: (resultados[year].Solar / totalElectricity * 100).toFixed(2) + '%',
                Wind: (resultados[year].Wind / totalElectricity * 100).toFixed(2) + '%',
                TotalRenewables: (resultados[year].TotalRenewables / totalElectricity * 100).toFixed(2) + '%'
            };
        }

        // Eliminar los valores absolutos de energía
        delete resultados[year].Electricity;
        delete resultados[year].Hydro;
        delete resultados[year].Solar;
        delete resultados[year].Wind;
        delete resultados[year].TotalRenewables;
    });

    return resultados;
}


const mesesPorAnio = {
    "2022": ["August", "September", "October", "November", "December"],
    "2023": ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    "2024": ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November"],
    "Anual":["2022","2023","2024"]
};


// Cargar meses automáticamente cuando el usuario cambia el año
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("anio").addEventListener("change", cargarMeses);
});

function cargarMeses() {
    let anioSeleccionado = document.getElementById("anio").value;
    let selectMes = document.getElementById("mes");

    // Si no se ha seleccionado un año, mostrar solo la opción por defecto
    if (!anioSeleccionado) {
        selectMes.innerHTML = `<option value="">Seleccione</option>`;
        return;
    }

    // Obtener los meses correspondientes al año seleccionado
    let meses = mesesPorAnio[anioSeleccionado] || []; // Si no hay meses, usa un array vacío

    // Limpiar y actualizar el select de meses
    selectMes.innerHTML = `<option value="">Seleccione</option>`; // Resetear opciones
    meses.forEach(mes => {
        let option = document.createElement("option");
        option.value = mes;
        option.textContent = mes;
        selectMes.appendChild(option);
    });
}


const selector = document.getElementById("selectorEtiquetas");

// Iterar sobre el diccionario para agregar cada opción
for (let key in etiquetasPersonalizadas) {
    if (etiquetasPersonalizadas.hasOwnProperty(key)) {
        const option = document.createElement("option");
        option.value = key; // Valor interno (clave del diccionario)
        option.textContent = etiquetasPersonalizadas[key]; // Texto visible (en español)
        selector.appendChild(option); // Añadir la opción al selector
    }
}


// Función para crear el gráfico comparativo de energía entre dos países
function crearGraficoEnergia(datosPais1, datosPais2, nombrePais1, nombrePais2, añoSeleccionado) {
    // Obtener el contexto del canvas donde se renderizará la gráfica
    const ctx = document.getElementById('graficoEnergia').getContext('2d');

    // Verificar si el gráfico ya existe y destruirlo para evitar duplicados
    if (window.miGrafico) {
        window.miGrafico.destroy();
    }

    // Extraer los datos del año seleccionado
    const data1 = datosPais1[añoSeleccionado]?.Porcentajes || {};
    const data2 = datosPais2[añoSeleccionado]?.Porcentajes || {};

    // Tipos de energía a graficar
    const etiquetas = ["Hydro", "Solar", "Wind"];

    // Crear datasets para cada país
    const datasetPais1 = {
        label: nombrePais1,
        data: etiquetas.map(tipo => parseFloat(data1[tipo]) || 0),
        backgroundColor: 'rgba(54, 162, 235, 0.6)', // Azul
        borderColor: 'rgb(54, 162, 235)',
        borderWidth: 1
    };

    const datasetPais2 = {
        label: nombrePais2,
        data: etiquetas.map(tipo => parseFloat(data2[tipo]) || 0),
        backgroundColor: 'rgba(255, 99, 132, 0.6)', // Rojo
        borderColor: 'rgb(255, 99, 132)',
        borderWidth: 1
    };

    // Configuración de los datos para el gráfico
    const data = {
        labels: etiquetas,
        datasets: [datasetPais1, datasetPais2]
    };

    // Configuración del gráfico
    const config = {
        type: 'bar',
        data: data,
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: `Comparación Energética - Año ${añoSeleccionado}`
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100, // Máximo 100% ya que son porcentajes
                    title: {
                        display: true,
                        text: 'Porcentaje (%)'
                    }
                }
            }
        }
    };

    // Crear y renderizar el gráfico
    window.miGrafico = new Chart(ctx, config);
}


function calcularCrecimientoEnergia(datos) {
let categoriasExcluidas = ["Electricity"];
let crecimientoPorCategoria = {};

// Llamamos a la función que calcula los porcentajes
let porcentajes = calcularPorcentajesEnergia(datos);

let years = Object.keys(porcentajes).sort(); // Ordenamos los años

for (let categoria in porcentajes[years[0]].Porcentajes) {
 if (!categoriasExcluidas.includes(categoria)) {
     let crecimiento = {};
     let crecimientosArray = [];

     for (let i = 1; i < years.length; i++) {
         let yearActual = years[i];
         let yearAnterior = years[i - 1];

         let totalActual = parseFloat(porcentajes[yearActual].Porcentajes[categoria]);
         let totalAnterior = parseFloat(porcentajes[yearAnterior].Porcentajes[categoria]);

         // Calcular crecimiento porcentual
         let crecimientoAnual = ((totalActual - totalAnterior) / totalAnterior * 100).toFixed(2);

         // Guardar resultado
         crecimiento[`${yearAnterior}-${yearActual}`] = `${crecimientoAnual}%`;

         // Agregar al array para promedio
         crecimientosArray.push(parseFloat(crecimientoAnual));

     }

     // Calcular promedio de crecimiento
     let promedioCrecimiento = (crecimientosArray.reduce((a, b) => a + b, 0) / crecimientosArray.length).toFixed(2);

     crecimiento["PromedioCrecimiento"] = `${promedioCrecimiento}%`;

     // Guardar crecimiento para la categoría actual
     crecimientoPorCategoria[categoria] = crecimiento;
 }
}

return crecimientoPorCategoria;
}

function actualizarTablaCrecimiento(tablaId, data) {
// console.log("📊 Datos :", data);
let tbody = document.getElementById(tablaId);

// Limpiar la tabla antes de llenarla
tbody.innerHTML = "";

// Obtener las categorías (Hydro, Solar, etc.)
const categorias = Object.keys(data);

// Agregar filas a la tabla para cada categoría
categorias.forEach(categoria => {
 // Crear una fila para la categoría actual
 let filaHTML = `<tr><td>${categoria}</td>`; // Primera columna: categoría

 // Agregar valores para 2022-2023, 2023-2024, y PromedioCrecimiento
 const rangos = ["2022-2023", "2023-2024", "PromedioCrecimiento"];
 rangos.forEach(rango => {
     let valor = data[categoria][rango] !== undefined ? data[categoria][rango] : "Dato no disponible";
     filaHTML += `<td>${valor}</td>`; // Agregar celdas con los valores
 });

 filaHTML += `</tr>`; // Cerrar la fila
 tbody.innerHTML += filaHTML; // Insertar la fila en la tabla
});
}

//// A PARTIR DE ACÁ VAN LAS RECOMENDACIONES.
function escrito1(pais1, pais2, porcentaje1, porcentaje2) {
    let mensajes = [];

    if (Math.abs(porcentaje1 - porcentaje2) <= 7) {
        mensajes.push(`Tanto ${pais1} como ${pais2} se encuentran en los mismos niveles de producción, `);

        let x = (porcentaje1 + porcentaje2) / 2;

        if (x <= 20) {
            mensajes.push("aunque el nivel que poseen es relativamente bajo, por lo que se espera que conjuntamente mejoren sus estrategias.");
        } else if (x < 40) {
            mensajes.push("y se encuentran en una fase de mejora de infraestructura con miras a aumentar su producción.");
        } else if (x < 80) {
            mensajes.push("y han alcanzado una fase relativamente avanzada. Se les motiva a seguir mejorando sus estrategias.");
        } else {
            mensajes.push(", alcanzando niveles excelentes. Se puede decir que ya están plenamente alineados con el Objetivo de Desarrollo Sostenible (ODS) número 7 de la ONU.");
        }
    } else {
        let paisMayor = porcentaje1 > porcentaje2 ? pais1 : pais2;
        let paisMenor = porcentaje1 > porcentaje2 ? pais2 : pais1;
        let porcentajeMayor = Math.max(porcentaje1, porcentaje2);

        mensajes.push(`${paisMayor} está en mejores condiciones que ${paisMenor}.`);

        if (porcentajeMayor < 20) {
            mensajes.push(` Sin embargo, ${paisMayor} aún no cuenta con la infraestructura de generación suficiente para ser energéticamente independiente de los combustibles fósiles. Se espera que ambos países mejoren sus estrategias.`);
        } else if (porcentajeMayor < 40) {
            mensajes.push(` Aunque ${paisMayor} aún está en proceso de convertirse en un país energéticamente limpio, se motiva a ${paisMenor} a indagar sobre sus estrategias, aprender de su proceso y determinar un camino a seguir en conjunto.`);
        } else if (porcentajeMayor < 80) {
            mensajes.push(` ${paisMayor} ha avanzado considerablemente en energía sostenible y puede servir de referencia para ${paisMenor}.`);
        } else {
            mensajes.push(` Dado que ${paisMayor} ha realizado grandes esfuerzos por ser energéticamente sostenible, sería beneficioso que ${paisMenor} estudie en detalle sus estrategias y las implemente según sus condiciones geológicas, hidrológicas y meteorológicas.`);
        }
    }

    // Unir los fragmentos de texto en un solo string
    let mensajeFinal = mensajes.join("");

    // Insertar el mensaje en el HTML
    document.getElementById("mensaje1").textContent = mensajeFinal;

    return mensajeFinal;
}



function escrito2(pais1, pais2, p1, p2) {
    // Obtener los valores ordenados de mayor a menor para cada país
    let resultado = calcularPromedioYOrdenar(p1, p2, etiquetasPersonalizadas);

    // Obtener los dos primeros elementos de cada país
    let top2P1 = resultado.p1.slice(0, 2).join(", "); // Primeros 2 elementos de p1
    let top2P2 = resultado.p2.slice(0, 2).join(", "); // Primeros 2 elementos de p


    // Construcción del mensaje con los datos obtenidos
    let mensaje2 = `Por otro lado, es importante fomentar, independientemente de las condiciones de generación actuales, la implementación de energías renovables.
Específicamente, se debe potenciar los tipos de energía que tienen mayor participación en la producción de energía renovable, ya que esto indica que las condiciones del país facilitan su generación.
Hablando más específicamente, para ${pais1} se destacan (${top2P1}), y para ${pais2}, (${top2P2}).`;
    document.getElementById("mensaje2").textContent = mensaje2;

    return mensaje2;
}


function escrito3(pais1, pais2, datosPais1, datosPais2) {
    let cprom1 = parseFloat(datosPais1.TotalRenewables.PromedioCrecimiento.replace('%', ''));
    let cprom2 = parseFloat(datosPais2.TotalRenewables.PromedioCrecimiento.replace('%', ''));

    let mensaje3 = `Por otro lado, mediante el cálculo del crecimiento promedio, se puede estimar el compromiso de las naciones con el cambio climático, analizando el crecimiento total de todas las formas de producción de energía. Según esto, se puede decir que `;

    if (cprom1 > 10 && cprom2 > 10) {
        mensaje3 += `${pais1} y ${pais2} están haciendo un gran esfuerzo por mejorar su consumo de energías renovables, ya que su crecimiento promedio es superior al 10% durante el intervalo de tiempo bajo estudio.`;
    } else if (cprom1 > cprom2) {
        mensaje3 += `${pais1} está relativamente más comprometido que ${pais2}, ya que su porcentaje de crecimiento es significativamente mayor.`;
        if (cprom2 < 0) {
            mensaje3 += ` Incluso, ${pais2} posee un crecimiento negativo, lo cual podría ser alarmante para el desarrollo sostenible global. Se recomienda tomar medidas oportunas para revertir esta tendencia.`;
        }
    } else if (cprom2 > cprom1) {
        mensaje3 += `${pais2} está relativamente más comprometido que ${pais1}, ya que su porcentaje de crecimiento es significativamente mayor.`;
        if (cprom1 < 0) {
            mensaje3 += ` Incluso, ${pais1} posee un crecimiento negativo, lo cual podría ser alarmante para el desarrollo sostenible global. Se recomienda tomar medidas oportunas para revertir esta tendencia.`;
        }
    } else if (Math.abs(cprom1 - cprom2) <= 7) {
        mensaje3 += `${pais1} y ${pais2} se encuentran en niveles de desarrollo similares, y según lo reportado, se puede deducir que `;
        if (cprom1 > 10 && cprom2 > 10) {
            mensaje3 += `ambos países están muy comprometidos con la transición energética.`;
        } else if ((cprom1 < 10 && cprom2 < 10) && (cprom1 > 0 && cprom2 > 0)) {
            mensaje3 += `, si bien ambos países tienen crecimiento positivo, este no representa un avance significativo en la producción energética.`;
        } else if (cprom1 < 0 && cprom2 < 0) {
            mensaje3 += `ambos países tienen crecimiento negativo, por lo que actualmente se están alejando de los objetivos principales para la erradicación de la generación de energía a partir de fuentes no renovables. Se recomienda modificar su postura energética para lograr un entorno más amigable con el medio ambiente.`;
        }
    }
    document.getElementById("mensaje3").textContent = mensaje3;
    return mensaje3;
}



function calcularPromedioYOrdenar(p1, p2, etiquetasPersonalizadas) {
    let promediosP1 = calcularPromedio(p1);
    let promediosP2 = calcularPromedio(p2);

    let resultadosP1 = formatearYOrdenar(promediosP1, etiquetasPersonalizadas);
    let resultadosP2 = formatearYOrdenar(promediosP2, etiquetasPersonalizadas);


    // console.log( "hola",{p1: resultadosP1, p2: resultadosP2});

    return { p1: resultadosP1, p2: resultadosP2 };

}

function calcularPromedio(datos) {
    let sumas = {};
    let conteo = 0;

    // Iterar sobre los años
    for (let año in datos) {
        let porcentajes = datos[año].Porcentajes;

        for (let tipo in porcentajes) {
            let valor = parseFloat(porcentajes[tipo].replace('%', ''));
            sumas[tipo] = (sumas[tipo] || 0) + valor;
        }
        conteo++;
    }

    // Calcular el promedio
    let promedios = {};
    for (let tipo in sumas) {
        promedios[tipo] = sumas[tipo] / conteo;
    }

    return promedios;
}

function formatearYOrdenar(promedios, etiquetasPersonalizadas) {
    return Object.entries(promedios)
        .filter(([tipo]) => tipo !== "TotalRenewables") // Eliminar "Total Renewables"
        .map(([tipo, valor]) => {
            let nombre = etiquetasPersonalizadas[tipo] || tipo; // Usa el nombre personalizado si existe
            return `${nombre} (${valor.toFixed(2)}%)`;
        })
        .sort((a, b) => parseFloat(b.match(/([\d.]+)%/)[1]) - parseFloat(a.match(/([\d.]+)%/)[1])); // Orden descendente
}
