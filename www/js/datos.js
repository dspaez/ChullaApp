//Diccionario de Datos
var monumentosQuito = {

	"/m/05m_f35" : {
		texto: "Palacio de Carondelet",
		imagen: "img/palaciodecarondelet.jpg",
		latitud: -0.220267,
		longitud: -78.512356,
		descripcion: "El Palacio de Carondelet es la sede del Gobierno y residencia oficial del presidente de la República del Ecuador. Está ubicado en el centro histórico de la ciudad de Quito. Es el eje neurálgico del espacio público conocido como Plaza de la Independencia o Plaza Grande (nombre colonial), alrededor de la cual se levantan además el Palacio Arzobispal, el Palacio Municipal, el Palacio de Pizarro, la Casa de los Alcaldes, el Palacio de la Curia y la Catedral Metropolitana. Fue conocido durante la colonia española como Palacio Real de Quito pues era la sede de la Real Audiencia y de la gobernación civil y militar de la región."
	},

	"/m/065_vzg" : {
		texto: "Iglesia La Merced",
		imagen: "img/iglesiamerced.jpg",
		latitud: -0.185393,
		longitud: -78.493194,
		descripcion: "La Basílica de Nuestra Señora de la Merced, es un templo católico localizado en el Centro Histórico de la ciudad de Quito, capital de Ecuador. Constituye la primera iglesia y principal sede de la Orden mercedaria en el país, y por ello lleva el título de Basílica. El edificio, de color blanco, tiene cinco cúpulas, una torre cuadrada y está decorado con inscripciones incas y árabes. La construcción comenzó en 1701, la torre se completó en 1736 y la basílica fue consagrada en 1747. El retablo mayor fue tallado y construido por Bernardo de Legarda. En su sacristía así como en el interior de la Iglesia, se encuentran varias obras del artista Victor Mideros."
	},

	"/g/121y9tdx" : {
		texto: "Teatro Nacional Sucre",
		imagen: "img/teatrosucre.jpg",
		latitud: -0.218964,
		longitud: -78.508698,
		descripcion: "El Teatro Nacional Sucre es uno de los más antiguos teatros de ópera de Sudamérica y de la ciudad de Quito, además del más prestigioso teatro del Ecuador. Fue construido entre 1879 y 1886 por orden del presidente Ignacio de Veintimilla, siguiendo un modelo de inspiración europea, pues se trata de un teatro a la italiana. Cuando fue inaugurado gobernaba la República José María Plácido Caamaño."
	},

	"/m/04yg38p" : {
		texto: "Iglesia San Francisco",
		imagen: "img/sanfrancisco.jpg",
		latitud: -0.220667,
		longitud: -78.51506,
		descripcion: "Es un edificio católico que se yergue en medio del centro histórico de la ciudad de Quito, frente a la plaza del mismo nombre. La imponente estructura ostenta el privilegio de ser el conjunto arquitectónico de mayor dimensión dentro de los centros históricos de toda América,​ y por ello es conocido como el Escorial del Nuevo Mundo. San Francisco es, además, una joya de la arquitectura continental por su amalgama de diferentes estilos armoniosamente combinados a lo largo de sus más de 150 años de construcción."
	},

	"/m/01dtq1" :  {
		texto: "Iglesia Santo Domingo",
		imagen: "img/iglesiasantodomingo.jpg",
		latitud: -0.215145,
		longitud: -78.51285,
		descripcion: "La Iglesia de Santo Domingo es un templo católico levantado en el Centro Histórico de la ciudad de Quito DM, capital de Ecuador. El conjunto de convento, iglesia y capillas se ubica en la calle Flores, frente a la Plaza de Santo Domingo, llamada así por la referida iglesia que la precede."
	},

	"/m/03nqwd0" :  { 
		texto: "Basílica del Voto Nacional",
		imagen: "img/basilica.jpg",
		latitud:-0.223728,
		longitud: -78.507378,
		descripcion: "La Basílica del Voto Nacional, también llamada de la Consagración de Jesús o Basílica de San Juan (por el sector en el que está ubicada), es un edificio religioso de estilo neogótico del centro histórico de la ciudad de Quito D.M.. Por sus dimensiones y estilo está considerado como el templo neogótico más grande de América. Se ubica en el sector conocido como Santa Prisca, en las calles Carchi y Venezuela, junto al Convento de los padres Oblatos​ ."

	},

	//Mitad Del Mundo funciona con imagenes de google
	"/m/05s3kn" :  {
		texto: "Mitad Del Mundo",
		latitud:-0.002162,
		longitud: -78.455417,
		descripcion: ""
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