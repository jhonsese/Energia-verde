        
         // Datos de países (asegúrate de que coincidan exactamente con los nombres del GeoJSON)
         var countryData = {
            "Argentina": {
               flag: "https://flagcdn.com/w320/ar.png",
               description: "Argentina está invirtiendo en energía eólica y solar...",
               population: "45 millones",
               capital: "Buenos Aires",
               language: "Español"
            },
            "Bolivia": {
               flag: "https://flagcdn.com/w320/bo.png",
               description: "Bolivia aprovecha la energía hidroeléctrica...",
               population: "12 millones",
               capital: "Sucre",
               language: "Español"
            },
            "Brazil": {
               flag: "https://flagcdn.com/w320/br.png",
               description: "Brasil es líder en energía hidroeléctrica y etanol...",
               population: "214 millones",
               capital: "Brasilia",
               language: "Portugués"
            },
            "Chile": {
               flag: "https://flagcdn.com/w320/cl.png",
               description: "Chile ha avanzado en energía solar y eólica...",
               population: "19 millones",
               capital: "Santiago",
               language: "Español"
            },
            "Colombia": {
               flag: "https://flagcdn.com/w320/co.png",
               description: "Colombia apuesta por energías renovables...",
               population: "51 millones",
               capital: "Bogotá",
               language: "Español"
            },
            "Ecuador": {
               flag: "https://flagcdn.com/w320/ec.png",
               description: "Ecuador aprovecha energía hidroeléctrica...",
               population: "18 millones",
               capital: "Quito",
               language: "Español"
            },
            "Mexico": {
               flag: "https://flagcdn.com/w320/mx.png",
               description: "México invierte en energía eólica y solar...",
               population: "128 millones",
               capital: "Ciudad de México",
               language: "Español"
            },
            "Paraguay": {
               flag: "https://flagcdn.com/w320/py.png",
               description: "Paraguay usa casi 100% de energía hidroeléctrica...",
               population: "7 millones",
               capital: "Asunción",
               language: "Español"
            },
            "Peru": {
               flag: "https://flagcdn.com/w320/pe.png",
               description: "Perú está aumentando su capacidad solar...",
               population: "33 millones",
               capital: "Lima",
               language: "Español"
            },
            "Uruguay": {
               flag: "https://flagcdn.com/w320/uy.png",
               description: "Uruguay es líder en energía renovable...",
               population: "3.5 millones",
               capital: "Montevideo",
               language: "Español"
            },
            "Venezuela": {
               flag: "https://flagcdn.com/w320/ve.png",
               description: "Venezuela tiene alto potencial hidroeléctrico...",
               population: "28 millones",
               capital: "Caracas",
               language: "Español"
            },
            "Spain": {
               flag: "https://flagcdn.com/w320/es.png",
               description: "España es un líder europeo en energías renovables...",
               population: "47 millones",
               capital: "Madrid",
               language: "Español"
            },
            "France": {
               flag: "https://flagcdn.com/w320/fr.png",
               description: "Francia apuesta por la energía nuclear y renovable...",
               population: "67 millones",
               capital: "París",
               language: "Francés"
            },
            "Germany": {
               flag: "https://flagcdn.com/w320/de.png",
               description: "Alemania lidera en energía solar y eólica en Europa...",
               population: "83 millones",
               capital: "Berlín",
               language: "Alemán"
            }
         };

         // Inicializar el mapa
         var map = L.map('map', {
            center: [20, 0],
            zoom: 2,
            minZoom: 2,
            maxZoom: 10
         });


         // Controles personalizados
         document.getElementById('zoom-in').addEventListener('click', function () {
            map.zoomIn();
         });

         document.getElementById('zoom-out').addEventListener('click', function () {
            map.zoomOut();
         });

         document.getElementById('reset-view').addEventListener('click', function () {
            map.setView([20, 0], 2);
         });
         // Añadir capa base
         L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; OpenStreetMap contributors'
         }).addTo(map);

         // Cargar límites de países con GeoJSON
         fetch('https://raw.githubusercontent.com/johan/world.geo.json/master/countries.geo.json')
            .then(response => response.json())
            .then(data => {
               L.geoJSON(data, {
                  style: {
                     color: "#008000",
                     weight: 1,
                     fillOpacity: 0.2
                  },
                  onEachFeature: function (feature, layer) {
                     layer.on('click', function () {
                        var countryName = feature.properties.name; // Nombre del país

                        console.log("Clic en:", countryName); // Para depuración

                        // Verificar si el país está en countryData
                        if (countryData[countryName]) {
                           var data = countryData[countryName];

                           // Actualizar la información en la barra lateral
                           document.getElementById('country-title').textContent = countryName;
                           document.getElementById('country-data').textContent = data.description;
                           document.getElementById('population').textContent = data.population;
                           document.getElementById('capital').textContent = data.capital;
                           document.getElementById('language').textContent = data.language;
                           document.getElementById('country-flag').innerHTML =
                              `<img src="${data.flag}" width="100%">`;

                           // Mostrar la barra lateral
                           document.getElementById('sidebar').classList.add('show');
                        } else {
                           console.log("País no encontrado en countryData:", countryName);
                        }
                     });
                  }
               }).addTo(map);
            });

         // Función para cerrar el sidebar
         function closeSidebar() {
            document.getElementById('sidebar').classList.remove('show');
         }