//Diccionario de Datos
var monumentosQuito = {

	"/m/05m_f35" : {
		texto: "Palacio de Carondelet",
		imagen: "../img/palaciodecarondelet.jpg",
		latitud: -0.220267,
		longitud: -78.512356
	},

	"/m/065_vzg" : {
		texto: "Iglesia La Merced",
		imagen: "../img/iglesiamerced.jpg",
		latitud: -0.185393,
		longitud: -78.493194

	},

	"/g/121y9tdx" : {
		texto: "Teatro Sucre",
		imagen: "../img/teatrosucre.jpg",
		latitud: -0.218964,
		longitud: -78.508698

	},

	"/m/04yg38p" : {
		texto: "Iglesia San Francisco",
		imagen: "../img/sanfrancisco.jpg",
		latitud: -0.220667,
		longitud: -78.51506
	},

	"/m/01dtq1" :  {
		texto: "Iglesia Santo Domingo",
		imagen: "../img/iglesiasantodomingo.jpg",
		latitud: -0.215145,
		longitud: -78.51285

	},

	"/m/03nqwd0" :  { 
		texto: "Basilica del Voto Nacional",
		latitud:-0.223728,
		longitud: -78.507378

	},

	//Mitad Del Mundo funciona con imagenes de google
	"/m/05s3kn" :  {
		texto: "Mitad Del Mundo",
		latitud:-0.002162,
		longitud: -78.455417

	}
}

/*var monumentosQuito = {
	
	palacioCarondelet : [
	 {
		id: "/m/05m_f35",
		nombre: "Palacio de Carondelet"
	 }
	],

	iglesiaLaMerced : [
	  {
		id: "/m/065_vzg",
		nombre: "Iglesia La Merced"
	  }
	],

	teatroSucre : [
	  {
		id: "/g/121y9tdx",
		nombre: "Teatro Sucre"
	  }
	],

	iglesiaSanFrancisco : [
	  {
		id: "/m/04yg38p",
		nombre: "Iglesia de San Francisco"
	  }
	],

	iglesiaSantoDomingo : [
	  {
		id: "/m/01dtq1",
		nombre: "Iglesia de Santo Domingo"
	  }
	]
}
*/



/*var data = {
            landmarkAnnotations: [
                {
                    mid: "/g/121y9tdx",

                    description: "Teatro Nacional Sucre",

                    score: 0.60572535,
                }
            ],

            landmarkAnnotations2: [
                {
                    mid: "/g/100y9tdx",

                    description: "Teatro Nacional Quito",

                    score: 0.4568945,
                }
            ]
        }*/




/*
function mostrarPropiedades(objeto) {
  var resultado = "";  
  for (var i in objeto) {
    if (objeto.hasOwnProperty(i)) {
        resultado += i + " = " + objeto[i] + "\n";
    }
  }
  return resultado;
}

console.log (mostrarPropiedades(monumentosQuito))


 
for (var propiedad in monumentosQuito) {
  console.log(propiedad);
}
*/