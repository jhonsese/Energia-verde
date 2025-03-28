
// Datos de países (asegúrate de que coincidan exactamente con los nombres del GeoJSON)
var countryData={
   "South Georgia": {
      "nombre_es": "Islas Georgias del Sur y Sandwich del Sur",
      "flag": "https://flagcdn.com/w320/gs.png",
      "population": "30 habitantes",
      "capital": "King Edward Point",
      "language": "Inglés"
   },
   "Grenada": {
      "nombre_es": "Grenada",
      "flag": "https://flagcdn.com/w320/gd.png",
      "population": "112.519 habitantes",
      "capital": "St. George's",
      "language": "Inglés"
   },
   "Switzerland": {
      "nombre_es": "Suiza",
      "flag": "https://flagcdn.com/w320/ch.png",
      "population": "8.654.622 habitantes",
      "capital": "Bern",
      "language": "Francés, Alemán suizo, Italiano, Romanche"
   },
   "Sierra Leone": {
      "nombre_es": "Sierra Leone",
      "flag": "https://flagcdn.com/w320/sl.png",
      "population": "7.976.985 habitantes",
      "capital": "Freetown",
      "language": "Inglés"
   },
   "Hungary": {
      "nombre_es": "Hungría",
      "flag": "https://flagcdn.com/w320/hu.png",
      "population": "9.749.763 habitantes",
      "capital": "Budapest",
      "language": "Húngaro"
   },
   "Taiwan": {
      "nombre_es": "Taiwán",
      "flag": "https://flagcdn.com/w320/tw.png",
      "population": "23.503.349 habitantes",
      "capital": "Taipei",
      "language": "Chino"
   },
   "Wallis and Futuna": {
      "nombre_es": "Wallis y Futuna",
      "flag": "https://flagcdn.com/w320/wf.png",
      "population": "11.750 habitantes",
      "capital": "Mata-Utu",
      "language": "Francés"
   },
   "Barbados": {
      "nombre_es": "Barbados",
      "flag": "https://flagcdn.com/w320/bb.png",
      "population": "287.371 habitantes",
      "capital": "Bridgetown",
      "language": "Inglés"
   },
   "Pitcairn Islands": {
      "nombre_es": "Islas Pitcairn",
      "flag": "https://flagcdn.com/w320/pn.png",
      "population": "56 habitantes",
      "capital": "Adamstown",
      "language": "Inglés"
   },
   "Ivory Coast": {
      "nombre_es": "Costa de Marfil",
      "flag": "https://flagcdn.com/w320/ci.png",
      "population": "26.378.275 habitantes",
      "capital": "Yamoussoukro",
      "language": "Francés"
   },
   "Tunisia": {
      "nombre_es": "Túnez",
      "flag": "https://flagcdn.com/w320/tn.png",
      "population": "11.818.618 habitantes",
      "capital": "Tunis",
      "language": "Árabe"
   },
   "Italy": {
      "nombre_es": "Italia",
      "flag": "https://flagcdn.com/w320/it.png",
      "population": "59.554.023 habitantes",
      "capital": "Rome",
      "language": "Italiano"
   },
   "Benin": {
      "nombre_es": "Benín",
      "flag": "https://flagcdn.com/w320/bj.png",
      "population": "12.123.198 habitantes",
      "capital": "Porto-Novo",
      "language": "Francés"
   },
   "Indonesia": {
      "nombre_es": "Indonesia",
      "flag": "https://flagcdn.com/w320/id.png",
      "population": "273.523.621 habitantes",
      "capital": "Jakarta",
      "language": "Indonesio"
   },
   "Cape Verde": {
      "nombre_es": "Cabo Verde",
      "flag": "https://flagcdn.com/w320/cv.png",
      "population": "555.988 habitantes",
      "capital": "Praia",
      "language": "Portugués"
   },
   "Saint Kitts and Nevis": {
      "nombre_es": "San Cristóbal y Nieves",
      "flag": "https://flagcdn.com/w320/kn.png",
      "population": "53.192 habitantes",
      "capital": "Basseterre",
      "language": "Inglés"
   },
   "Laos": {
      "nombre_es": "Laos",
      "flag": "https://flagcdn.com/w320/la.png",
      "population": "7.275.556 habitantes",
      "capital": "Vientiane",
      "language": "Lao"
   },
   "Caribbean Netherlands": {
      "nombre_es": "Caribe Neerlandés",
      "flag": "https://flagcdn.com/w320/bq.png",
      "population": "25.987 habitantes",
      "capital": "Kralendijk",
      "language": "Inglés, Neerlandés, Papiamento"
   },
   "Uganda": {
      "nombre_es": "Uganda",
      "flag": "https://flagcdn.com/w320/ug.png",
      "population": "45.741.000 habitantes",
      "capital": "Kampala",
      "language": "Inglés, Suajili"
   },
   "Andorra": {
      "nombre_es": "Andorra",
      "flag": "https://flagcdn.com/w320/ad.png",
      "population": "77.265 habitantes",
      "capital": "Andorra la Vella",
      "language": "Catalán"
   },
   "Burundi": {
      "nombre_es": "Burundi",
      "flag": "https://flagcdn.com/w320/bi.png",
      "population": "11.890.781 habitantes",
      "capital": "Gitega",
      "language": "Francés, Kirundi"
   },
   "South Africa": {
      "nombre_es": "Sudáfrica",
      "flag": "https://flagcdn.com/w320/za.png",
      "population": "59.308.690 habitantes",
      "capital": "Pretoria, Bloemfontein, Cape Town",
      "language": "Afrikáans, Inglés, Ndebele del sur, Sotho del norte, Sotho del sur, Suazi, Setswana, Tsonga, Venda, Xhosa, Zulú"
   },
   "France": {
      "nombre_es": "Francia",
      "flag": "https://flagcdn.com/w320/fr.png",
      "population": "67.391.582 habitantes",
      "capital": "Paris",
      "language": "Francés"
   },
   "Libya": {
      "nombre_es": "Libia",
      "flag": "https://flagcdn.com/w320/ly.png",
      "population": "6.871.287 habitantes",
      "capital": "Tripoli",
      "language": "Árabe"
   },
   "Mexico": {
      "nombre_es": "México",
      "flag": "https://flagcdn.com/w320/mx.png",
      "population": "128.932.753 habitantes",
      "capital": "Mexico City",
      "language": "Español"
   },
   "Gabon": {
      "nombre_es": "Gabón",
      "flag": "https://flagcdn.com/w320/ga.png",
      "population": "2.225.728 habitantes",
      "capital": "Libreville",
      "language": "Francés"
   },
   "Northern Mariana Islands": {
      "nombre_es": "Islas Marianas del Norte",
      "flag": "https://flagcdn.com/w320/mp.png",
      "population": "57.557 habitantes",
      "capital": "Saipan",
      "language": "Caroliniano, Chamorro, Inglés"
   },
   "North Macedonia": {
      "nombre_es": "Macedonia del Norte",
      "flag": "https://flagcdn.com/w320/mk.png",
      "population": "2.077.132 habitantes",
      "capital": "Skopje",
      "language": "Macedonio"
   },
   "China": {
      "nombre_es": "China",
      "flag": "https://flagcdn.com/w320/cn.png",
      "population": "1.402.112.000 habitantes",
      "capital": "Beijing",
      "language": "Chino"
   },
   "Yemen": {
      "nombre_es": "Yemen",
      "flag": "https://flagcdn.com/w320/ye.png",
      "population": "29.825.968 habitantes",
      "capital": "Sana'a",
      "language": "Árabe"
   },
   "Saint Barthélemy": {
      "nombre_es": "San Bartolomé",
      "flag": "https://flagcdn.com/w320/bl.png",
      "population": "4.255 habitantes",
      "capital": "Gustavia",
      "language": "Francés"
   },
   "Guernsey": {
      "nombre_es": "Guernsey",
      "flag": "https://flagcdn.com/w320/gg.png",
      "population": "62.999 habitantes",
      "capital": "St. Peter Port",
      "language": "Inglés, Francés, Guerneseyés"
   },
   "Solomon Islands": {
      "nombre_es": "Islas Salomón",
      "flag": "https://flagcdn.com/w320/sb.png",
      "population": "686.878 habitantes",
      "capital": "Honiara",
      "language": "Inglés"
   },
   "Svalbard and Jan Mayen": {
      "nombre_es": "Islas Svalbard y Jan Mayen",
      "flag": "https://flagcdn.com/w320/sj.png",
      "population": "2.562 habitantes",
      "capital": "Longyearbyen",
      "language": "Noruego"
   },
   "Faroe Islands": {
      "nombre_es": "Islas Faroe",
      "flag": "https://flagcdn.com/w320/fo.png",
      "population": "48.865 habitantes",
      "capital": "Tórshavn",
      "language": "Danés, Feroés"
   },
   "Uzbekistan": {
      "nombre_es": "Uzbekistán",
      "flag": "https://flagcdn.com/w320/uz.png",
      "population": "34.232.050 habitantes",
      "capital": "Tashkent",
      "language": "Ruso, Uzbeko"
   },
   "Egypt": {
      "nombre_es": "Egipto",
      "flag": "https://flagcdn.com/w320/eg.png",
      "population": "102.334.403 habitantes",
      "capital": "Cairo",
      "language": "Árabe"
   },
   "Senegal": {
      "nombre_es": "Senegal",
      "flag": "https://flagcdn.com/w320/sn.png",
      "population": "16.743.930 habitantes",
      "capital": "Dakar",
      "language": "Francés"
   },
   "Sri Lanka": {
      "nombre_es": "Sri Lanka",
      "flag": "https://flagcdn.com/w320/lk.png",
      "population": "21.919.000 habitantes",
      "capital": "Sri Jayawardenepura Kotte",
      "language": "Cingalés, Tamil"
   },
   "Palestine": {
      "nombre_es": "Palestina",
      "flag": "https://flagcdn.com/w320/ps.png",
      "population": "4.803.269 habitantes",
      "capital": "Ramallah, Jerusalem",
      "language": "Árabe"
   },
   "Bangladesh": {
      "nombre_es": "Bangladesh",
      "flag": "https://flagcdn.com/w320/bd.png",
      "population": "164.689.383 habitantes",
      "capital": "Dhaka",
      "language": "Bengalí"
   },
   "Peru": {
      "nombre_es": "Perú",
      "flag": "https://flagcdn.com/w320/pe.png",
      "population": "32.971.846 habitantes",
      "capital": "Lima",
      "language": "Aimara, Quechua, Español"
   },
   "Singapore": {
      "nombre_es": "Singapur",
      "flag": "https://flagcdn.com/w320/sg.png",
      "population": "5.685.807 habitantes",
      "capital": "Singapore",
      "language": "Inglés, Chino, Malayo, Tamil"
   },
   "Turkey": {
      "nombre_es": "Turquía",
      "flag": "https://flagcdn.com/w320/tr.png",
      "population": "84.339.067 habitantes",
      "capital": "Ankara",
      "language": "Turco"
   },
   "Afghanistan": {
      "nombre_es": "Afganistán",
      "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_the_Taliban.svg/320px-Flag_of_the_Taliban.svg.png",
      "population": "40.218.234 habitantes",
      "capital": "Kabul",
      "language": "Darí, Pastún, Turcomano"
   },
   "Aruba": {
      "nombre_es": "Aruba",
      "flag": "https://flagcdn.com/w320/aw.png",
      "population": "106.766 habitantes",
      "capital": "Oranjestad",
      "language": "Neerlandés, Papiamento"
   },
   "Cook Islands": {
      "nombre_es": "Islas Cook",
      "flag": "https://flagcdn.com/w320/ck.png",
      "population": "18.100 habitantes",
      "capital": "Avarua",
      "language": "Inglés, Maorí de las Islas Cook"
   },
   "United Kingdom": {
      "nombre_es": "Reino Unido",
      "flag": "https://flagcdn.com/w320/gb.png",
      "population": "67.215.293 habitantes",
      "capital": "London",
      "language": "Inglés"
   },
   "Zambia": {
      "nombre_es": "Zambia",
      "flag": "https://flagcdn.com/w320/zm.png",
      "population": "18.383.956 habitantes",
      "capital": "Lusaka",
      "language": "Inglés"
   },
   "Finland": {
      "nombre_es": "Finlandia",
      "flag": "https://flagcdn.com/w320/fi.png",
      "population": "5.530.719 habitantes",
      "capital": "Helsinki",
      "language": "Finlandés, Sueco"
   },
   "Niger": {
      "nombre_es": "Níger",
      "flag": "https://flagcdn.com/w320/ne.png",
      "population": "24.206.636 habitantes",
      "capital": "Niamey",
      "language": "Francés"
   },
   "Christmas Island": {
      "nombre_es": "Isla de Navidad",
      "flag": "https://flagcdn.com/w320/cx.png",
      "population": "2.072 habitantes",
      "capital": "Flying Fish Cove",
      "language": "Inglés"
   },
   "Tokelau": {
      "nombre_es": "Islas Tokelau",
      "flag": "https://flagcdn.com/w320/tk.png",
      "population": "1.411 habitantes",
      "capital": "Fakaofo",
      "language": "Inglés, Samoano, Tokelauano"
   },
   "Guinea-Bissau": {
      "nombre_es": "Guinea-Bisáu",
      "flag": "https://flagcdn.com/w320/gw.png",
      "population": "1.967.998 habitantes",
      "capital": "Bissau",
      "language": "Portugués, Criollo de Guinea Alta"
   },
   "Azerbaijan": {
      "nombre_es": "Azerbaiyán",
      "flag": "https://flagcdn.com/w320/az.png",
      "population": "10.110.116 habitantes",
      "capital": "Baku",
      "language": "Azerí"
   },
   "Réunion": {
      "nombre_es": "Reunión",
      "flag": "https://flagcdn.com/w320/re.png",
      "population": "840.974 habitantes",
      "capital": "Saint-Denis",
      "language": "Francés"
   },
   "Djibouti": {
      "nombre_es": "Djibouti",
      "flag": "https://flagcdn.com/w320/dj.png",
      "population": "988.002 habitantes",
      "capital": "Djibouti",
      "language": "Árabe, Francés"
   },
   "North Korea": {
      "nombre_es": "Corea del Norte",
      "flag": "https://flagcdn.com/w320/kp.png",
      "population": "25.778.815 habitantes",
      "capital": "Pyongyang",
      "language": "Coreano"
   },
   "Mauritius": {
      "nombre_es": "Mauricio",
      "flag": "https://flagcdn.com/w320/mu.png",
      "population": "1.265.740 habitantes",
      "capital": "Port Louis",
      "language": "Inglés, Francés, Criollo mauriciano"
   },
   "Montserrat": {
      "nombre_es": "Montserrat",
      "flag": "https://flagcdn.com/w320/ms.png",
      "population": "4.922 habitantes",
      "capital": "Plymouth",
      "language": "Inglés"
   },
   "United States Virgin Islands": {
      "nombre_es": "Islas Vírgenes de los Estados Unidos",
      "flag": "https://flagcdn.com/w320/vi.png",
      "population": "106.290 habitantes",
      "capital": "Charlotte Amalie",
      "language": "Inglés"
   },
   "Colombia": {
      "nombre_es": "Colombia",
      "flag": "https://flagcdn.com/w320/co.png",
      "population": "50.882.884 habitantes",
      "capital": "Bogotá",
      "language": "Español"
   },
   "Greece": {
      "nombre_es": "Grecia",
      "flag": "https://flagcdn.com/w320/gr.png",
      "population": "10.715.549 habitantes",
      "capital": "Athens",
      "language": "Griego"
   },
   "Croatia": {
      "nombre_es": "Croacia",
      "flag": "https://flagcdn.com/w320/hr.png",
      "population": "4.047.200 habitantes",
      "capital": "Zagreb",
      "language": "Croata"
   },
   "Morocco": {
      "nombre_es": "Marruecos",
      "flag": "https://flagcdn.com/w320/ma.png",
      "population": "36.910.558 habitantes",
      "capital": "Rabat",
      "language": "Árabe, Bereber"
   },
   "Algeria": {
      "nombre_es": "Argelia",
      "flag": "https://flagcdn.com/w320/dz.png",
      "population": "44.700.000 habitantes",
      "capital": "Algiers",
      "language": "Árabe"
   },
   "Antarctica": {
      "nombre_es": "Antártida",
      "flag": "https://flagcdn.com/w320/aq.png",
      "population": "1.000 habitantes",
      "capital": "Desconocida",
      "language": ""
   },
   "Netherlands": {
      "nombre_es": "Países Bajos",
      "flag": "https://flagcdn.com/w320/nl.png",
      "population": "16.655.799 habitantes",
      "capital": "Amsterdam",
      "language": "Neerlandés"
   },
   "Sudan": {
      "nombre_es": "Sudán",
      "flag": "https://flagcdn.com/w320/sd.png",
      "population": "43.849.269 habitantes",
      "capital": "Khartoum",
      "language": "Árabe, Inglés"
   },
   "Fiji": {
      "nombre_es": "Fiyi",
      "flag": "https://flagcdn.com/w320/fj.png",
      "population": "896.444 habitantes",
      "capital": "Suva",
      "language": "Inglés, Fiyiano, Hindi de Fiyi"
   },
   "Liechtenstein": {
      "nombre_es": "Liechtenstein",
      "flag": "https://flagcdn.com/w320/li.png",
      "population": "38.137 habitantes",
      "capital": "Vaduz",
      "language": "Alemán"
   },
   "Nepal": {
      "nombre_es": "Nepal",
      "flag": "https://flagcdn.com/w320/np.png",
      "population": "29.136.808 habitantes",
      "capital": "Kathmandu",
      "language": "Nepalí"
   },
   "Puerto Rico": {
      "nombre_es": "Puerto Rico",
      "flag": "https://flagcdn.com/w320/pr.png",
      "population": "3.194.034 habitantes",
      "capital": "San Juan",
      "language": "Inglés, Español"
   },
   "Georgia": {
      "nombre_es": "Georgia",
      "flag": "https://flagcdn.com/w320/ge.png",
      "population": "3.714.000 habitantes",
      "capital": "Tbilisi",
      "language": "Georgiano"
   },
   "Pakistan": {
      "nombre_es": "Pakistán",
      "flag": "https://flagcdn.com/w320/pk.png",
      "population": "220.892.331 habitantes",
      "capital": "Islamabad",
      "language": "Inglés, Urdu"
   },
   "Monaco": {
      "nombre_es": "Mónaco",
      "flag": "https://flagcdn.com/w320/mc.png",
      "population": "39.244 habitantes",
      "capital": "Monaco",
      "language": "Francés"
   },
   "Botswana": {
      "nombre_es": "Botswana",
      "flag": "https://flagcdn.com/w320/bw.png",
      "population": "2.351.625 habitantes",
      "capital": "Gaborone",
      "language": "Inglés, Setswana"
   },
   "Lebanon": {
      "nombre_es": "Líbano",
      "flag": "https://flagcdn.com/w320/lb.png",
      "population": "6.825.442 habitantes",
      "capital": "Beirut",
      "language": "Árabe, Francés"
   },
   "Papua New Guinea": {
      "nombre_es": "Papúa Nueva Guinea",
      "flag": "https://flagcdn.com/w320/pg.png",
      "population": "8.947.027 habitantes",
      "capital": "Port Moresby",
      "language": "Inglés, Hiri Motu, Tok pisin"
   },
   "Mayotte": {
      "nombre_es": "Mayotte",
      "flag": "https://flagcdn.com/w320/yt.png",
      "population": "226.915 habitantes",
      "capital": "Mamoudzou",
      "language": "Francés"
   },
   "Dominican Republic": {
      "nombre_es": "República Dominicana",
      "flag": "https://flagcdn.com/w320/do.png",
      "population": "10.847.904 habitantes",
      "capital": "Santo Domingo",
      "language": "Español"
   },
   "Norfolk Island": {
      "nombre_es": "Isla de Norfolk",
      "flag": "https://flagcdn.com/w320/nf.png",
      "population": "2.302 habitantes",
      "capital": "Kingston",
      "language": "Inglés, Norfuk"
   },
   "Bouvet Island": {
      "nombre_es": "Isla Bouvet",
      "flag": "https://flagcdn.com/w320/bv.png",
      "population": "0 habitantes",
      "capital": "Desconocida",
      "language": "Noruego"
   },
   "Qatar": {
      "nombre_es": "Catar",
      "flag": "https://flagcdn.com/w320/qa.png",
      "population": "2.881.060 habitantes",
      "capital": "Doha",
      "language": "Árabe"
   },
   "Madagascar": {
      "nombre_es": "Madagascar",
      "flag": "https://flagcdn.com/w320/mg.png",
      "population": "27.691.019 habitantes",
      "capital": "Antananarivo",
      "language": "Francés, Malgache"
   },
   "India": {
      "nombre_es": "India",
      "flag": "https://flagcdn.com/w320/in.png",
      "population": "1.380.004.385 habitantes",
      "capital": "New Delhi",
      "language": "Inglés, Hindi, Tamil"
   },
   "Syria": {
      "nombre_es": "Siria",
      "flag": "https://flagcdn.com/w320/sy.png",
      "population": "17.500.657 habitantes",
      "capital": "Damascus",
      "language": "Árabe"
   },
   "Montenegro": {
      "nombre_es": "Montenegro",
      "flag": "https://flagcdn.com/w320/me.png",
      "population": "621.718 habitantes",
      "capital": "Podgorica",
      "language": "Montenegrino"
   },
   "Eswatini": {
      "nombre_es": "Suazilandia",
      "flag": "https://flagcdn.com/w320/sz.png",
      "population": "1.160.164 habitantes",
      "capital": "Mbabane",
      "language": "Inglés, Suazi"
   },
   "Paraguay": {
      "nombre_es": "Paraguay",
      "flag": "https://flagcdn.com/w320/py.png",
      "population": "7.132.530 habitantes",
      "capital": "Asunción",
      "language": "Guaraní, Español"
   },
   "El Salvador": {
      "nombre_es": "El Salvador",
      "flag": "https://flagcdn.com/w320/sv.png",
      "population": "6.486.201 habitantes",
      "capital": "San Salvador",
      "language": "Español"
   },
   "Ukraine": {
      "nombre_es": "Ucrania",
      "flag": "https://flagcdn.com/w320/ua.png",
      "population": "44.134.693 habitantes",
      "capital": "Kyiv",
      "language": "Ucraniano"
   },
   "Isle of Man": {
      "nombre_es": "Isla de Man",
      "flag": "https://flagcdn.com/w320/im.png",
      "population": "85.032 habitantes",
      "capital": "Douglas",
      "language": "Inglés, Manés"
   },
   "Namibia": {
      "nombre_es": "Namibia",
      "flag": "https://flagcdn.com/w320/na.png",
      "population": "2.540.916 habitantes",
      "capital": "Windhoek",
      "language": "Afrikáans, Alemán, Inglés, Herero, Khoekhoe, Kwangali, Lozi, Ndonga, Setswana"
   },
   "United Arab Emirates": {
      "nombre_es": "Emiratos Árabes Unidos",
      "flag": "https://flagcdn.com/w320/ae.png",
      "population": "9.890.400 habitantes",
      "capital": "Abu Dhabi",
      "language": "Árabe"
   },
   "Bulgaria": {
      "nombre_es": "Bulgaria",
      "flag": "https://flagcdn.com/w320/bg.png",
      "population": "6.927.288 habitantes",
      "capital": "Sofia",
      "language": "Búlgaro"
   },
   "Greenland": {
      "nombre_es": "Groenlandia",
      "flag": "https://flagcdn.com/w320/gl.png",
      "population": "56.367 habitantes",
      "capital": "Nuuk",
      "language": "Groenlandés"
   },
   "Germany": {
      "nombre_es": "Alemania",
      "flag": "https://flagcdn.com/w320/de.png",
      "population": "83.240.525 habitantes",
      "capital": "Berlin",
      "language": "Alemán"
   },
   "Cambodia": {
      "nombre_es": "Camboya",
      "flag": "https://flagcdn.com/w320/kh.png",
      "population": "16.718.971 habitantes",
      "capital": "Phnom Penh",
      "language": "Jemer"
   },
   "Iraq": {
      "nombre_es": "Irak",
      "flag": "https://flagcdn.com/w320/iq.png",
      "population": "40.222.503 habitantes",
      "capital": "Baghdad",
      "language": "Árabe, Arameo, Sorani"
   },
   "French Southern and Antarctic Lands": {
      "nombre_es": "Tierras Australes y Antárticas Francesas",
      "flag": "https://flagcdn.com/w320/tf.png",
      "population": "400 habitantes",
      "capital": "Port-aux-Français",
      "language": "Francés"
   },
   "Sweden": {
      "nombre_es": "Suecia",
      "flag": "https://flagcdn.com/w320/se.png",
      "population": "10.353.442 habitantes",
      "capital": "Stockholm",
      "language": "Sueco"
   },
   "Cuba": {
      "nombre_es": "Cuba",
      "flag": "https://flagcdn.com/w320/cu.png",
      "population": "11.326.616 habitantes",
      "capital": "Havana",
      "language": "Español"
   },
   "Kyrgyzstan": {
      "nombre_es": "Kirguizistán",
      "flag": "https://flagcdn.com/w320/kg.png",
      "population": "6.591.600 habitantes",
      "capital": "Bishkek",
      "language": "Kirguís, Ruso"
   },
   "Russia": {
      "nombre_es": "Rusia",
      "flag": "https://flagcdn.com/w320/ru.png",
      "population": "144.104.080 habitantes",
      "capital": "Moscow",
      "language": "Ruso"
   },
   "Malaysia": {
      "nombre_es": "Malasia",
      "flag": "https://flagcdn.com/w320/my.png",
      "population": "32.365.998 habitantes",
      "capital": "Kuala Lumpur",
      "language": "Inglés, Malayo"
   },
   "São Tomé and Príncipe": {
      "nombre_es": "Santo Tomé y Príncipe",
      "flag": "https://flagcdn.com/w320/st.png",
      "population": "219.161 habitantes",
      "capital": "São Tomé",
      "language": "Portugués"
   },
   "Cyprus": {
      "nombre_es": "Chipre",
      "flag": "https://flagcdn.com/w320/cy.png",
      "population": "1.207.361 habitantes",
      "capital": "Nicosia",
      "language": "Griego, Turco"
   },
   "Canada": {
      "nombre_es": "Canadá",
      "flag": "https://flagcdn.com/w320/ca.png",
      "population": "38.005.238 habitantes",
      "capital": "Ottawa",
      "language": "Inglés, Francés"
   },
   "Malawi": {
      "nombre_es": "Malawi",
      "flag": "https://flagcdn.com/w320/mw.png",
      "population": "19.129.955 habitantes",
      "capital": "Lilongwe",
      "language": "Inglés, Chichewa"
   },
   "Saudi Arabia": {
      "nombre_es": "Arabia Saudí",
      "flag": "https://flagcdn.com/w320/sa.png",
      "population": "34.813.867 habitantes",
      "capital": "Riyadh",
      "language": "Árabe"
   },
   "Bosnia and Herzegovina": {
      "nombre_es": "Bosnia y Herzegovina",
      "flag": "https://flagcdn.com/w320/ba.png",
      "population": "3.280.815 habitantes",
      "capital": "Sarajevo",
      "language": "Bosnio, Croata, Serbio"
   },
   "Ethiopia": {
      "nombre_es": "Etiopía",
      "flag": "https://flagcdn.com/w320/et.png",
      "population": "114.963.583 habitantes",
      "capital": "Addis Ababa",
      "language": "Amhárico"
   },
   "Spain": {
      "nombre_es": "España",
      "flag": "https://flagcdn.com/w320/es.png",
      "population": "47.351.567 habitantes",
      "capital": "Madrid",
      "language": "Español, Catalán, Euskera, Gallego"
   },
   "Slovenia": {
      "nombre_es": "Eslovenia",
      "flag": "https://flagcdn.com/w320/si.png",
      "population": "2.100.126 habitantes",
      "capital": "Ljubljana",
      "language": "Esloveno"
   },
   "Oman": {
      "nombre_es": "Omán",
      "flag": "https://flagcdn.com/w320/om.png",
      "population": "5.106.622 habitantes",
      "capital": "Muscat",
      "language": "Árabe"
   },
   "Saint Pierre and Miquelon": {
      "nombre_es": "San Pedro y Miquelón",
      "flag": "https://flagcdn.com/w320/pm.png",
      "population": "6.069 habitantes",
      "capital": "Saint-Pierre",
      "language": "Francés"
   },
   "Macau": {
      "nombre_es": "Macao",
      "flag": "https://flagcdn.com/w320/mo.png",
      "population": "649.342 habitantes",
      "capital": "Desconocida",
      "language": "Portugués, Chino"
   },
   "San Marino": {
      "nombre_es": "San Marino",
      "flag": "https://flagcdn.com/w320/sm.png",
      "population": "33.938 habitantes",
      "capital": "City of San Marino",
      "language": "Italiano"
   },
   "Lesotho": {
      "nombre_es": "Lesotho",
      "flag": "https://flagcdn.com/w320/ls.png",
      "population": "2.142.252 habitantes",
      "capital": "Maseru",
      "language": "Inglés, Sotho"
   },
   "Marshall Islands": {
      "nombre_es": "Islas Marshall",
      "flag": "https://flagcdn.com/w320/mh.png",
      "population": "59.194 habitantes",
      "capital": "Majuro",
      "language": "Inglés, Marshalés"
   },
   "Sint Maarten": {
      "nombre_es": "Sint Maarten",
      "flag": "https://flagcdn.com/w320/sx.png",
      "population": "40.812 habitantes",
      "capital": "Philipsburg",
      "language": "Inglés, Francés, Neerlandés"
   },
   "Iceland": {
      "nombre_es": "Islandia",
      "flag": "https://flagcdn.com/w320/is.png",
      "population": "366.425 habitantes",
      "capital": "Reykjavik",
      "language": "Islandés"
   },
   "Luxembourg": {
      "nombre_es": "Luxemburgo",
      "flag": "https://flagcdn.com/w320/lu.png",
      "population": "632.275 habitantes",
      "capital": "Luxembourg",
      "language": "Alemán, Francés, Luxemburgués"
   },
   "Argentina": {
      "nombre_es": "Argentina",
      "flag": "https://flagcdn.com/w320/ar.png",
      "population": "45.376.763 habitantes",
      "capital": "Buenos Aires",
      "language": "Guaraní, Español"
   },
   "Turks and Caicos Islands": {
      "nombre_es": "Islas Turks y Caicos",
      "flag": "https://flagcdn.com/w320/tc.png",
      "population": "38.718 habitantes",
      "capital": "Cockburn Town",
      "language": "Inglés"
   },
   "Nauru": {
      "nombre_es": "Nauru",
      "flag": "https://flagcdn.com/w320/nr.png",
      "population": "10.834 habitantes",
      "capital": "Yaren",
      "language": "Inglés, Nauruano"
   },
   "Cocos (Keeling) Islands": {
      "nombre_es": "Islas Cocos o Islas Keeling",
      "flag": "https://flagcdn.com/w320/cc.png",
      "population": "544 habitantes",
      "capital": "West Island",
      "language": "Inglés"
   },
   "Western Sahara": {
      "nombre_es": "Sahara Occidental",
      "flag": "https://flagcdn.com/w320/eh.png",
      "population": "510.713 habitantes",
      "capital": "El Aaiún",
      "language": "Bereber, Hassanía, Español"
   },
   "Dominica": {
      "nombre_es": "Dominica",
      "flag": "https://flagcdn.com/w320/dm.png",
      "population": "71.991 habitantes",
      "capital": "Roseau",
      "language": "Inglés"
   },
   "Costa Rica": {
      "nombre_es": "Costa Rica",
      "flag": "https://flagcdn.com/w320/cr.png",
      "population": "5.094.114 habitantes",
      "capital": "San José",
      "language": "Español"
   },
   "Australia": {
      "nombre_es": "Australia",
      "flag": "https://flagcdn.com/w320/au.png",
      "population": "25.687.041 habitantes",
      "capital": "Canberra",
      "language": "Inglés"
   },
   "Thailand": {
      "nombre_es": "Tailandia",
      "flag": "https://flagcdn.com/w320/th.png",
      "population": "69.799.978 habitantes",
      "capital": "Bangkok",
      "language": "Tailandés"
   },
   "Haiti": {
      "nombre_es": "Haití",
      "flag": "https://flagcdn.com/w320/ht.png",
      "population": "11.402.533 habitantes",
      "capital": "Port-au-Prince",
      "language": "Francés, Criollo haitiano"
   },
   "Tuvalu": {
      "nombre_es": "Tuvalu",
      "flag": "https://flagcdn.com/w320/tv.png",
      "population": "11.792 habitantes",
      "capital": "Funafuti",
      "language": "Inglés, Tuvaluano"
   },
   "Honduras": {
      "nombre_es": "Honduras",
      "flag": "https://flagcdn.com/w320/hn.png",
      "population": "9.904.608 habitantes",
      "capital": "Tegucigalpa",
      "language": "Español"
   },
   "Equatorial Guinea": {
      "nombre_es": "Guinea Ecuatorial",
      "flag": "https://flagcdn.com/w320/gq.png",
      "population": "1.402.985 habitantes",
      "capital": "Malabo",
      "language": "Francés, Portugués, Español"
   },
   "Saint Lucia": {
      "nombre_es": "Santa Lucía",
      "flag": "https://flagcdn.com/w320/lc.png",
      "population": "183.629 habitantes",
      "capital": "Castries",
      "language": "Inglés"
   },
   "French Polynesia": {
      "nombre_es": "Polinesia Francesa",
      "flag": "https://flagcdn.com/w320/pf.png",
      "population": "280.904 habitantes",
      "capital": "Papeetē",
      "language": "Francés"
   },
   "Belarus": {
      "nombre_es": "Bielorrusia",
      "flag": "https://flagcdn.com/w320/by.png",
      "population": "9.398.861 habitantes",
      "capital": "Minsk",
      "language": "Bielorruso, Ruso"
   },
   "Latvia": {
      "nombre_es": "Letonia",
      "flag": "https://flagcdn.com/w320/lv.png",
      "population": "1.901.548 habitantes",
      "capital": "Riga",
      "language": "Letón"
   },
   "Palau": {
      "nombre_es": "Palau",
      "flag": "https://flagcdn.com/w320/pw.png",
      "population": "18.092 habitantes",
      "capital": "Ngerulmud",
      "language": "Inglés, Palauano"
   },
   "Guadeloupe": {
      "nombre_es": "Guadalupe",
      "flag": "https://flagcdn.com/w320/gp.png",
      "population": "400.132 habitantes",
      "capital": "Basse-Terre",
      "language": "Francés"
   },
   "Philippines": {
      "nombre_es": "Filipinas",
      "flag": "https://flagcdn.com/w320/ph.png",
      "population": "109.581.085 habitantes",
      "capital": "Manila",
      "language": "Inglés, Filipino"
   },
   "Gibraltar": {
      "nombre_es": "Gibraltar",
      "flag": "https://flagcdn.com/w320/gi.png",
      "population": "33.691 habitantes",
      "capital": "Gibraltar",
      "language": "Inglés"
   },
   "Denmark": {
      "nombre_es": "Dinamarca",
      "flag": "https://flagcdn.com/w320/dk.png",
      "population": "5.831.404 habitantes",
      "capital": "Copenhagen",
      "language": "Danés"
   },
   "Cameroon": {
      "nombre_es": "Camerún",
      "flag": "https://flagcdn.com/w320/cm.png",
      "population": "26.545.864 habitantes",
      "capital": "Yaoundé",
      "language": "Inglés, Francés"
   },
   "Guinea": {
      "nombre_es": "Guinea",
      "flag": "https://flagcdn.com/w320/gn.png",
      "population": "13.132.792 habitantes",
      "capital": "Conakry",
      "language": "Francés"
   },
   "Bahrain": {
      "nombre_es": "Bahrein",
      "flag": "https://flagcdn.com/w320/bh.png",
      "population": "1.701.583 habitantes",
      "capital": "Manama",
      "language": "Árabe"
   },
   "Suriname": {
      "nombre_es": "Surinam",
      "flag": "https://flagcdn.com/w320/sr.png",
      "population": "586.634 habitantes",
      "capital": "Paramaribo",
      "language": "Neerlandés"
   },
   "DR Congo": {
      "nombre_es": "Congo (Rep. Dem.)",
      "flag": "https://flagcdn.com/w320/cd.png",
      "population": "108.407.721 habitantes",
      "capital": "Kinshasa",
      "language": "Francés, Kikongo, Lingala, Tshiluba, Suajili"
   },
   "Somalia": {
      "nombre_es": "Somalia",
      "flag": "https://flagcdn.com/w320/so.png",
      "population": "15.893.219 habitantes",
      "capital": "Mogadishu",
      "language": "Árabe, Somalí"
   },
   "Czechia": {
      "nombre_es": "Chequia",
      "flag": "https://flagcdn.com/w320/cz.png",
      "population": "10.698.896 habitantes",
      "capital": "Prague",
      "language": "Checo, Eslovaco"
   },
   "New Caledonia": {
      "nombre_es": "Nueva Caledonia",
      "flag": "https://flagcdn.com/w320/nc.png",
      "population": "271.960 habitantes",
      "capital": "Nouméa",
      "language": "Francés"
   },
   "Vanuatu": {
      "nombre_es": "Vanuatu",
      "flag": "https://flagcdn.com/w320/vu.png",
      "population": "307.150 habitantes",
      "capital": "Port Vila",
      "language": "Bislama, Inglés, Francés"
   },
   "Saint Helena, Ascension and Tristan da Cunha": {
      "nombre_es": "Santa Elena, Ascensión y Tristán de Acuña",
      "flag": "https://flagcdn.com/w320/sh.png",
      "population": "53.192 habitantes",
      "capital": "Jamestown",
      "language": "Inglés"
   },
   "Togo": {
      "nombre_es": "Togo",
      "flag": "https://flagcdn.com/w320/tg.png",
      "population": "8.278.737 habitantes",
      "capital": "Lomé",
      "language": "Francés"
   },
   "British Virgin Islands": {
      "nombre_es": "Islas Vírgenes del Reino Unido",
      "flag": "https://flagcdn.com/w320/vg.png",
      "population": "30.237 habitantes",
      "capital": "Road Town",
      "language": "Inglés"
   },
   "Kenya": {
      "nombre_es": "Kenia",
      "flag": "https://flagcdn.com/w320/ke.png",
      "population": "53.771.300 habitantes",
      "capital": "Nairobi",
      "language": "Inglés, Suajili"
   },
   "Niue": {
      "nombre_es": "Niue",
      "flag": "https://flagcdn.com/w320/nu.png",
      "population": "1.470 habitantes",
      "capital": "Alofi",
      "language": "Inglés, Niueano"
   },
   "Heard Island and McDonald Islands": {
      "nombre_es": "Islas Heard y McDonald",
      "flag": "https://flagcdn.com/w320/hm.png",
      "population": "0 habitantes",
      "capital": "Desconocida",
      "language": "Inglés"
   },
   "Rwanda": {
      "nombre_es": "Ruanda",
      "flag": "https://flagcdn.com/w320/rw.png",
      "population": "12.952.209 habitantes",
      "capital": "Kigali",
      "language": "Inglés, Francés, Kinyarwanda"
   },
   "Estonia": {
      "nombre_es": "Estonia",
      "flag": "https://flagcdn.com/w320/ee.png",
      "population": "1.331.057 habitantes",
      "capital": "Tallinn",
      "language": "Estonio"
   },
   "Romania": {
      "nombre_es": "Rumania",
      "flag": "https://flagcdn.com/w320/ro.png",
      "population": "19.286.123 habitantes",
      "capital": "Bucharest",
      "language": "Rumano"
   },
   "Trinidad and Tobago": {
      "nombre_es": "Trinidad y Tobago",
      "flag": "https://flagcdn.com/w320/tt.png",
      "population": "1.399.491 habitantes",
      "capital": "Port of Spain",
      "language": "Inglés"
   },
   "Guyana": {
      "nombre_es": "Guyana",
      "flag": "https://flagcdn.com/w320/gy.png",
      "population": "786.559 habitantes",
      "capital": "Georgetown",
      "language": "Inglés"
   },
   "Timor-Leste": {
      "nombre_es": "Timor Oriental",
      "flag": "https://flagcdn.com/w320/tl.png",
      "population": "1.318.442 habitantes",
      "capital": "Dili",
      "language": "Portugués, Tetun"
   },
   "Vietnam": {
      "nombre_es": "Vietnam",
      "flag": "https://flagcdn.com/w320/vn.png",
      "population": "97.338.583 habitantes",
      "capital": "Hanoi",
      "language": "Vietnamita"
   },
   "Uruguay": {
      "nombre_es": "Uruguay",
      "flag": "https://flagcdn.com/w320/uy.png",
      "population": "3.473.727 habitantes",
      "capital": "Montevideo",
      "language": "Español"
   },
   "Vatican City": {
      "nombre_es": "Ciudad del Vaticano",
      "flag": "https://flagcdn.com/w320/va.png",
      "population": "451 habitantes",
      "capital": "Vatican City",
      "language": "Italiano, Latín"
   },
   "Hong Kong": {
      "nombre_es": "Hong Kong",
      "flag": "https://flagcdn.com/w320/hk.png",
      "population": "7.500.700 habitantes",
      "capital": "City of Victoria",
      "language": "Inglés, Chino"
   },
   "Austria": {
      "nombre_es": "Austria",
      "flag": "https://flagcdn.com/w320/at.png",
      "population": "8.917.205 habitantes",
      "capital": "Vienna",
      "language": "Alemán"
   },
   "Antigua and Barbuda": {
      "nombre_es": "Antigua y Barbuda",
      "flag": "https://flagcdn.com/w320/ag.png",
      "population": "97.928 habitantes",
      "capital": "Saint John's",
      "language": "Inglés"
   },
   "Turkmenistan": {
      "nombre_es": "Turkmenistán",
      "flag": "https://flagcdn.com/w320/tm.png",
      "population": "6.031.187 habitantes",
      "capital": "Ashgabat",
      "language": "Ruso, Turcomano"
   },
   "Mozambique": {
      "nombre_es": "Mozambique",
      "flag": "https://flagcdn.com/w320/mz.png",
      "population": "31.255.435 habitantes",
      "capital": "Maputo",
      "language": "Portugués"
   },
   "Panama": {
      "nombre_es": "Panamá",
      "flag": "https://flagcdn.com/w320/pa.png",
      "population": "4.314.768 habitantes",
      "capital": "Panama City",
      "language": "Español"
   },
   "Micronesia": {
      "nombre_es": "Micronesia",
      "flag": "https://flagcdn.com/w320/fm.png",
      "population": "115.021 habitantes",
      "capital": "Palikir",
      "language": "Inglés"
   },
   "Ireland": {
      "nombre_es": "Irlanda",
      "flag": "https://flagcdn.com/w320/ie.png",
      "population": "4.994.724 habitantes",
      "capital": "Dublin",
      "language": "Inglés, Irlandés"
   },
   "Curaçao": {
      "nombre_es": "Curazao",
      "flag": "https://flagcdn.com/w320/cw.png",
      "population": "155.014 habitantes",
      "capital": "Willemstad",
      "language": "Inglés, Neerlandés, Papiamento"
   },
   "French Guiana": {
      "nombre_es": "Guayana Francesa",
      "flag": "https://flagcdn.com/w320/gf.png",
      "population": "254.541 habitantes",
      "capital": "Cayenne",
      "language": "Francés"
   },
   "Norway": {
      "nombre_es": "Noruega",
      "flag": "https://flagcdn.com/w320/no.png",
      "population": "5.379.475 habitantes",
      "capital": "Oslo",
      "language": "Noruego nynorsk, Noruego bokmål, Sami"
   },
   "Åland Islands": {
      "nombre_es": "Alandia",
      "flag": "https://flagcdn.com/w320/ax.png",
      "population": "29.458 habitantes",
      "capital": "Mariehamn",
      "language": "Sueco"
   },
   "Central African Republic": {
      "nombre_es": "República Centroafricana",
      "flag": "https://flagcdn.com/w320/cf.png",
      "population": "4.829.764 habitantes",
      "capital": "Bangui",
      "language": "Francés, Sango"
   },
   "Burkina Faso": {
      "nombre_es": "Burkina Faso",
      "flag": "https://flagcdn.com/w320/bf.png",
      "population": "20.903.278 habitantes",
      "capital": "Ouagadougou",
      "language": "Francés"
   },
   "Eritrea": {
      "nombre_es": "Eritrea",
      "flag": "https://flagcdn.com/w320/er.png",
      "population": "5.352.000 habitantes",
      "capital": "Asmara",
      "language": "Árabe, Inglés, Tigriña"
   },
   "Tanzania": {
      "nombre_es": "Tanzania",
      "flag": "https://flagcdn.com/w320/tz.png",
      "population": "59.734.213 habitantes",
      "capital": "Dodoma",
      "language": "Inglés, Suajili"
   },
   "South Korea": {
      "nombre_es": "Corea del Sur",
      "flag": "https://flagcdn.com/w320/kr.png",
      "population": "51.780.579 habitantes",
      "capital": "Seoul",
      "language": "Coreano"
   },
   "Jordan": {
      "nombre_es": "Jordania",
      "flag": "https://flagcdn.com/w320/jo.png",
      "population": "10.203.140 habitantes",
      "capital": "Amman",
      "language": "Árabe"
   },
   "Mauritania": {
      "nombre_es": "Mauritania",
      "flag": "https://flagcdn.com/w320/mr.png",
      "population": "4.649.660 habitantes",
      "capital": "Nouakchott",
      "language": "Árabe"
   },
   "Lithuania": {
      "nombre_es": "Lituania",
      "flag": "https://flagcdn.com/w320/lt.png",
      "population": "2.794.700 habitantes",
      "capital": "Vilnius",
      "language": "Lituano"
   },
   "United States Minor Outlying Islands": {
      "nombre_es": "Islas Ultramarinas Menores de Estados Unidos",
      "flag": "https://flagcdn.com/w320/um.png",
      "population": "300 habitantes",
      "capital": "Washington DC",
      "language": "Inglés"
   },
   "Slovakia": {
      "nombre_es": "República Eslovaca",
      "flag": "https://flagcdn.com/w320/sk.png",
      "population": "5.458.827 habitantes",
      "capital": "Bratislava",
      "language": "Eslovaco"
   },
   "Angola": {
      "nombre_es": "Angola",
      "flag": "https://flagcdn.com/w320/ao.png",
      "population": "32.866.268 habitantes",
      "capital": "Luanda",
      "language": "Portugués"
   },
   "Kazakhstan": {
      "nombre_es": "Kazajistán",
      "flag": "https://flagcdn.com/w320/kz.png",
      "population": "18.754.440 habitantes",
      "capital": "Nur-Sultan",
      "language": "Kazajo, Ruso"
   },
   "Moldova": {
      "nombre_es": "Moldavia",
      "flag": "https://flagcdn.com/w320/md.png",
      "population": "2.617.820 habitantes",
      "capital": "Chișinău",
      "language": "Rumano"
   },
   "Mali": {
      "nombre_es": "Mali",
      "flag": "https://flagcdn.com/w320/ml.png",
      "population": "20.250.834 habitantes",
      "capital": "Bamako",
      "language": "Francés"
   },
   "Falkland Islands": {
      "nombre_es": "Islas Malvinas",
      "flag": "https://flagcdn.com/w320/fk.png",
      "population": "2.563 habitantes",
      "capital": "Stanley",
      "language": "Inglés"
   },
   "Armenia": {
      "nombre_es": "Armenia",
      "flag": "https://flagcdn.com/w320/am.png",
      "population": "2.963.234 habitantes",
      "capital": "Yerevan",
      "language": "Armenio"
   },
   "Samoa": {
      "nombre_es": "Samoa",
      "flag": "https://flagcdn.com/w320/ws.png",
      "population": "198.410 habitantes",
      "capital": "Apia",
      "language": "Inglés, Samoano"
   },
   "Jersey": {
      "nombre_es": "Jersey",
      "flag": "https://flagcdn.com/w320/je.png",
      "population": "100.800 habitantes",
      "capital": "Saint Helier",
      "language": "Inglés, Francés, Jèrriais"
   },
   "Japan": {
      "nombre_es": "Japón",
      "flag": "https://flagcdn.com/w320/jp.png",
      "population": "125.836.021 habitantes",
      "capital": "Tokyo",
      "language": "Japonés"
   },
   "Bolivia": {
      "nombre_es": "Bolivia",
      "flag": "https://flagcdn.com/w320/bo.png",
      "population": "11.673.029 habitantes",
      "capital": "Sucre",
      "language": "Aimara, Guaraní, Quechua, Español"
   },
   "Chile": {
      "nombre_es": "Chile",
      "flag": "https://flagcdn.com/w320/cl.png",
      "population": "19.116.209 habitantes",
      "capital": "Santiago",
      "language": "Español"
   },
   "United States": {
      "nombre_es": "Estados Unidos",
      "flag": "https://flagcdn.com/w320/us.png",
      "population": "329.484.123 habitantes",
      "capital": "Washington, D.C.",
      "language": "Inglés"
   },
   "Saint Vincent and the Grenadines": {
      "nombre_es": "San Vicente y Granadinas",
      "flag": "https://flagcdn.com/w320/vc.png",
      "population": "110.947 habitantes",
      "capital": "Kingstown",
      "language": "Inglés"
   },
   "Bermuda": {
      "nombre_es": "Bermudas",
      "flag": "https://flagcdn.com/w320/bm.png",
      "population": "63.903 habitantes",
      "capital": "Hamilton",
      "language": "Inglés"
   },
   "Seychelles": {
      "nombre_es": "Seychelles",
      "flag": "https://flagcdn.com/w320/sc.png",
      "population": "98.462 habitantes",
      "capital": "Victoria",
      "language": "Criollo seychelense, Inglés, Francés"
   },
   "British Indian Ocean Territory": {
      "nombre_es": "Territorio Británico del Océano Índico",
      "flag": "https://flagcdn.com/w320/io.png",
      "population": "3.000 habitantes",
      "capital": "Diego Garcia",
      "language": "Inglés"
   },
   "Guatemala": {
      "nombre_es": "Guatemala",
      "flag": "https://flagcdn.com/w320/gt.png",
      "population": "16.858.333 habitantes",
      "capital": "Guatemala City",
      "language": "Español"
   },
   "Ecuador": {
      "nombre_es": "Ecuador",
      "flag": "https://flagcdn.com/w320/ec.png",
      "population": "17.643.060 habitantes",
      "capital": "Quito",
      "language": "Español"
   },
   "Martinique": {
      "nombre_es": "Martinica",
      "flag": "https://flagcdn.com/w320/mq.png",
      "population": "378.243 habitantes",
      "capital": "Fort-de-France",
      "language": "Francés"
   },
   "Tajikistan": {
      "nombre_es": "Tayikistán",
      "flag": "https://flagcdn.com/w320/tj.png",
      "population": "9.537.642 habitantes",
      "capital": "Dushanbe",
      "language": "Ruso, Tayiko"
   },
   "Malta": {
      "nombre_es": "Malta",
      "flag": "https://flagcdn.com/w320/mt.png",
      "population": "525.285 habitantes",
      "capital": "Valletta",
      "language": "Inglés, Maltés"
   },
   "Gambia": {
      "nombre_es": "Gambia",
      "flag": "https://flagcdn.com/w320/gm.png",
      "population": "2.416.664 habitantes",
      "capital": "Banjul",
      "language": "Inglés"
   },
   "Nigeria": {
      "nombre_es": "Nigeria",
      "flag": "https://flagcdn.com/w320/ng.png",
      "population": "206.139.587 habitantes",
      "capital": "Abuja",
      "language": "Inglés"
   },
   "Bahamas": {
      "nombre_es": "Bahamas",
      "flag": "https://flagcdn.com/w320/bs.png",
      "population": "393.248 habitantes",
      "capital": "Nassau",
      "language": "Inglés"
   },
   "Kosovo": {
      "nombre_es": "Kosovo",
      "flag": "https://flagcdn.com/w320/xk.png",
      "population": "1.775.378 habitantes",
      "capital": "Pristina",
      "language": "Albanés, Serbio"
   },
   "Kuwait": {
      "nombre_es": "Kuwait",
      "flag": "https://flagcdn.com/w320/kw.png",
      "population": "4.270.563 habitantes",
      "capital": "Kuwait City",
      "language": "Árabe"
   },
   "Maldives": {
      "nombre_es": "Maldivas",
      "flag": "https://flagcdn.com/w320/mv.png",
      "population": "540.542 habitantes",
      "capital": "Malé",
      "language": "Maldivo"
   },
   "South Sudan": {
      "nombre_es": "Sudán del Sur",
      "flag": "https://flagcdn.com/w320/ss.png",
      "population": "11.193.729 habitantes",
      "capital": "Juba",
      "language": "Inglés"
   },
   "Iran": {
      "nombre_es": "Iran",
      "flag": "https://flagcdn.com/w320/ir.png",
      "population": "83.992.953 habitantes",
      "capital": "Tehran",
      "language": "Persa (farsi)"
   },
   "Albania": {
      "nombre_es": "Albania",
      "flag": "https://flagcdn.com/w320/al.png",
      "population": "2.837.743 habitantes",
      "capital": "Tirana",
      "language": "Albanés"
   },
   "Brazil": {
      "nombre_es": "Brasil",
      "flag": "https://flagcdn.com/w320/br.png",
      "population": "212.559.409 habitantes",
      "capital": "Brasília",
      "language": "Portugués"
   },
   "Serbia": {
      "nombre_es": "Serbia",
      "flag": "https://flagcdn.com/w320/rs.png",
      "population": "6.908.224 habitantes",
      "capital": "Belgrade",
      "language": "Serbio"
   },
   "Belize": {
      "nombre_es": "Belice",
      "flag": "https://flagcdn.com/w320/bz.png",
      "population": "397.621 habitantes",
      "capital": "Belmopan",
      "language": "Criollo beliceño, Inglés, Español"
   },
   "Myanmar": {
      "nombre_es": "Myanmar",
      "flag": "https://flagcdn.com/w320/mm.png",
      "population": "54.409.794 habitantes",
      "capital": "Naypyidaw",
      "language": "Birmano"
   },
   "Bhutan": {
      "nombre_es": "Bután",
      "flag": "https://flagcdn.com/w320/bt.png",
      "population": "771.612 habitantes",
      "capital": "Thimphu",
      "language": "Dzongkha"
   },
   "Venezuela": {
      "nombre_es": "Venezuela",
      "flag": "https://flagcdn.com/w320/ve.png",
      "population": "28.435.943 habitantes",
      "capital": "Caracas",
      "language": "Español"
   },
   "Liberia": {
      "nombre_es": "Liberia",
      "flag": "https://flagcdn.com/w320/lr.png",
      "population": "5.057.677 habitantes",
      "capital": "Monrovia",
      "language": "Inglés"
   },
   "Jamaica": {
      "nombre_es": "Jamaica",
      "flag": "https://flagcdn.com/w320/jm.png",
      "population": "2.961.161 habitantes",
      "capital": "Kingston",
      "language": "Inglés, Patois jamaicano"
   },
   "Poland": {
      "nombre_es": "Polonia",
      "flag": "https://flagcdn.com/w320/pl.png",
      "population": "37.950.802 habitantes",
      "capital": "Warsaw",
      "language": "Polaco"
   },
   "Cayman Islands": {
      "nombre_es": "Islas Caimán",
      "flag": "https://flagcdn.com/w320/ky.png",
      "population": "65.720 habitantes",
      "capital": "George Town",
      "language": "Inglés"
   },
   "Brunei": {
      "nombre_es": "Brunei",
      "flag": "https://flagcdn.com/w320/bn.png",
      "population": "437.483 habitantes",
      "capital": "Bandar Seri Begawan",
      "language": "Malayo"
   },
   "Comoros": {
      "nombre_es": "Comoras",
      "flag": "https://flagcdn.com/w320/km.png",
      "population": "869.595 habitantes",
      "capital": "Moroni",
      "language": "Árabe, Francés, Comorense"
   },
   "Guam": {
      "nombre_es": "Guam",
      "flag": "https://flagcdn.com/w320/gu.png",
      "population": "168.783 habitantes",
      "capital": "Hagåtña",
      "language": "Chamorro, Inglés, Español"
   },
   "Tonga": {
      "nombre_es": "Tonga",
      "flag": "https://flagcdn.com/w320/to.png",
      "population": "105.697 habitantes",
      "capital": "Nuku'alofa",
      "language": "Inglés, Tongano"
   },
   "Kiribati": {
      "nombre_es": "Kiribati",
      "flag": "https://flagcdn.com/w320/ki.png",
      "population": "119.446 habitantes",
      "capital": "South Tarawa",
      "language": "Inglés, Gilbertés"
   },
   "Ghana": {
      "nombre_es": "Ghana",
      "flag": "https://flagcdn.com/w320/gh.png",
      "population": "31.072.945 habitantes",
      "capital": "Accra",
      "language": "Inglés"
   },
   "Chad": {
      "nombre_es": "Chad",
      "flag": "https://flagcdn.com/w320/td.png",
      "population": "16.425.859 habitantes",
      "capital": "N'Djamena",
      "language": "Árabe, Francés"
   },
   "Zimbabwe": {
      "nombre_es": "Zimbabue",
      "flag": "https://flagcdn.com/w320/zw.png",
      "population": "14.862.927 habitantes",
      "capital": "Harare",
      "language": "Chibarwe, Inglés, Kalanga, Khoisan, Ndau, Ndebele del norte, Chichewa, Shona, Sotho, Tongano, Setswana, Tsonga, Venda, Xhosa, Lengua de señas de Zimbabue"
   },
   "Saint Martin": {
      "nombre_es": "Saint Martin",
      "flag": "https://flagcdn.com/w320/mf.png",
      "population": "38.659 habitantes",
      "capital": "Marigot",
      "language": "Francés"
   },
   "Mongolia": {
      "nombre_es": "Mongolia",
      "flag": "https://flagcdn.com/w320/mn.png",
      "population": "3.278.292 habitantes",
      "capital": "Ulan Bator",
      "language": "Mongol"
   },
   "Portugal": {
      "nombre_es": "Portugal",
      "flag": "https://flagcdn.com/w320/pt.png",
      "population": "10.305.564 habitantes",
      "capital": "Lisbon",
      "language": "Portugués"
   },
   "American Samoa": {
      "nombre_es": "Samoa Americana",
      "flag": "https://flagcdn.com/w320/as.png",
      "population": "55.197 habitantes",
      "capital": "Pago Pago",
      "language": "Inglés, Samoano"
   },
   "Republic of the Congo": {
      "nombre_es": "Congo",
      "flag": "https://flagcdn.com/w320/cg.png",
      "population": "5.657.000 habitantes",
      "capital": "Brazzaville",
      "language": "Francés, Kikongo, Lingala"
   },
   "Belgium": {
      "nombre_es": "Bélgica",
      "flag": "https://flagcdn.com/w320/be.png",
      "population": "11.555.997 habitantes",
      "capital": "Brussels",
      "language": "Alemán, Francés, Neerlandés"
   },
   "Israel": {
      "nombre_es": "Israel",
      "flag": "https://flagcdn.com/w320/il.png",
      "population": "9.216.900 habitantes",
      "capital": "Jerusalem",
      "language": "Árabe, Hebreo"
   },
   "New Zealand": {
      "nombre_es": "Nueva Zelanda",
      "flag": "https://flagcdn.com/w320/nz.png",
      "population": "5.084.300 habitantes",
      "capital": "Wellington",
      "language": "Inglés, Maorí, Lengua de señas de Nueva Zelanda"
   },
   "Nicaragua": {
      "nombre_es": "Nicaragua",
      "flag": "https://flagcdn.com/w320/ni.png",
      "population": "6.624.554 habitantes",
      "capital": "Managua",
      "language": "Español"
   },
   "Anguilla": {
      "nombre_es": "Anguilla",
      "flag": "https://flagcdn.com/w320/ai.png",
      "population": "13.452 habitantes",
      "capital": "The Valley",
      "language": "Inglés"
   }
}


const paises = new Set([
   "Australia", "Austria", "Belgium", "Canada", "Chile", "Colombia",
   "Costa Rica", "Czech Republic", "Denmark", "Estonia", "Finland",
   "France", "Germany", "Greece", "Hungary", "Iceland", "Ireland",
   "Italy", "Japan", "Korea", "Latvia", "Lithuania", "Luxembourg",
   "Mexico", "Netherlands", "New Zealand", "Norway", "Poland",
   "Portugal", "Slovak Republic", "Slovenia", "Spain", "Sweden",
   "Switzerland", "Republic of Turkiye", "United Kingdom",
   "United States", "OECD Americas", "OECD Asia Oceania",
   "OECD Europe", "OECD Total", "IEA Total", "Argentina", "Brazil",
   "Bulgaria", "People's Republic of China", "Croatia", "Cyprus",
   "India", "Malta", "North Macedonia", "Romania", "Serbia"
]);

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
                   document.getElementById('country-title').textContent = data.nombre_es;
                   document.getElementById('population').textContent = data.population;
                   document.getElementById('capital').textContent = data.capital;
                   document.getElementById('language').textContent = data.language;
                   document.getElementById('country-flag').innerHTML =
                       `<img src="${data.flag}" width="100%">`;

                   if (paises.has(countryName)) {
                      mostrarSeccion()
                      function mostrarSeccion() {
                         const seccion = document.getElementById('barras');
                         if (seccion) {
                            seccion.style.display = 'block'; // Mostrar la sección estableciendo display a 'block'
                         } else {
                            console.error("La sección con id 'barras' no existe en el DOM.");
                         }
                      }

                      console.log(`${countryName} está en countryData y en el conjunto paises`);

                      let url = `/api/comparacion-anual?country=${encodeURIComponent(countryName)}`;

                      const anioSeleccionado = "2024";

                      fetch(url)
                          .then((response) => {
                             if (!response.ok) {
                                throw new Error(`Error en la solicitud: ${response.status} ${response.statusText}`);
                             }
                             return response.json();
                          })
                          .then((datos) => {
                             // Filtrar los datos por el año seleccionado
                             const filtrarDatosPorAnio = (data, anio) => {
                                return data.filter((d) => d.year === anioSeleccionado);
                             };

                             const datosFiltrados = filtrarDatosPorAnio(datos, anioSeleccionado);
                             // Aquí puedes manejar los datos filtrados según tus necesidades
                             console.log(datosFiltrados);

                             let porcentajes=calcularPorcentajesEnergia(datosFiltrados);


                             console.log("todos",porcentajes)
                             document.getElementById('hydros').textContent = `${porcentajes[2024].Porcentajes.Hydro}`;
                             document.getElementById('solars').textContent = `${porcentajes[2024].Porcentajes.Solar}`;
                             document.getElementById('totalRenewables').textContent = `${porcentajes[2024].Porcentajes.TotalRenewables}`;
                             document.getElementById('winds').textContent = `${porcentajes[2024].Porcentajes.Wind}`;

                             const progressFillR = document.getElementById('progressRenov');
                             progressFillR.style.width = porcentajes[2024].Porcentajes.TotalRenewables; // Ajusta el ancho de la barra

                             const progressFillH = document.getElementById('progressHydro');
                             progressFillH.style.width = porcentajes[2024].Porcentajes.Hydro; // Ajusta el ancho de la barra

                             const progressFillS = document.getElementById('progressSolar');
                             progressFillS.style.width = porcentajes[2024].Porcentajes.Solar; // Ajusta el ancho de la barra

                             const progressFillW = document.getElementById('progressWind');
                             progressFillW.style.width = porcentajes[2024].Porcentajes.Wind; // Ajusta el ancho de la barra
                          })
                          .catch((error) => {
                             console.error('Hubo un problema con la operación fetch:', error);
                          });

                   }else{
                      ocultarSeccion()
                      // Función para ocultar la sección
                      function ocultarSeccion() {
                         const seccion = document.getElementById('barras');
                         if (seccion) {
                            seccion.style.display = 'none'; // Ocultar la sección estableciendo display a 'none'
                         } else {
                            console.error("La sección con id 'barras' no existe en el DOM.");
                         }
                      }

                   }

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
