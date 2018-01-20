var app = {
    // Application Constructor
    initialize: function() {
      document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    //Este evento indica que las API del dispositivo de Cordova se han cargado y están listas para acceder
    onDeviceReady: function() {
   },

    receivedEvent: function(id) {
    }
  };

  app.initialize();


  var request = {};

  //Puntos de ubicacion para el marcador en la fotografia
    var x1 = 0;
    var y1 = 0;
    var x2 = 0;
    var y2 = 0;
    var y3 = 0;
    
    

  //Funcion la cual me habilita la camara del dispositivo para tomar una fotografia
  function cameraTakePicture() {
    navigator.camera.getPicture(onSuccess, onFail, { 
      quality: 50, //Calidad de la imagen guardada
      destinationType: Camera.DestinationType.DATA_URL, //Devuelve la imagen como una cadena codificada en base64
      sourceType: Camera.PictureSourceType.CAMERA //Establece la fuente de la imagen en este caso la camara del dispositivo.
    });

    //Función de devolución de llamada que proporciona los datos de imagen.
    function onSuccess(imageData) { //ImageData: Codificación Base64 de los datos de imagen
      var image = document.getElementById('outputImg'); //Obtiene el Id HTML  
      image.src = "data:image/jpeg;base64," + imageData; //Muestra la Imagen en el ID obtenido
      var content = imageData;
      sendFileCloudVision(content); //Llama a la funcion SendFileCloudVision y pasa como parametro la imagen en Base64 obtenida
      ajax(); //Llama a la funcion ajax
    }

    //Función de devolución de llamada que proporciona un mensaje de error.
    function onFail() {
      alert('Imagen No Cargada Correctamente');
    }
  }

  //Funcion la cual me habilita la camara del dispositivo para obtener una imagen del dispositivo
  function chooseFile() {
    navigator.camera.getPicture(onSuccess, onFail, { 
      quality: 50,
      destinationType: Camera.DestinationType.DATA_URL,
      sourceType: Camera.PictureSourceType.SAVEDPHOTOALBUM //Establece la fuente de la imagen en este caso las fotografias encontradas en el dispositivo.
    });

    function onSuccess(imageData) {
      var image = document.getElementById('outputImg');
      image.src = "data:image/jpeg;base64," + imageData;
      var content = imageData;
      sendFileCloudVision(content);
      ajax();
    }

    function onFail(message) {
      alert('Failed because: ' + message);
    }
  }

  //Funcion Ajax que me pertice peticion POST al Servior
  function ajax() {
    var API_KEY = "AIzaSyCGyZenFVHB3v9pmjLIc-7iSeT49kw4eKg"; 
    var CV_URL = 'https://vision.googleapis.com/v1/images:annotate?key=' + API_KEY;
    $.ajax({
      url: CV_URL,//Hacia donde deseamos enviar la peticion
      type: 'POST', //Tipo de Peticion es POST
      data: JSON.stringify(request), //El metodo JSON.stringify() convierte un valor dado en javascript a una cadena  JSON.
      contentType: 'application/json'
    }).success(function(data){
      getData(data);
      myCanvas(x1,y1);
      displayJSON(data);
    }) 
  }

  //Envía los contenidos del archivo dado a la API de Cloud Vision y genera el resultado.
  function sendFileCloudVision (content) {
    request = {
      requests: [{
        image: {
          content: content        
        },
        features: [{
          type:"LANDMARK_DETECTION",
          maxResults: 200
        }]
      }]
    };
  }

//Muestra los resultados
  function displayJSON (data) {
    var resultado = monumentosQuito[data.responses[0].landmarkAnnotations[0].mid]["texto"];
    $('#nombre').text(resultado);
    var evt = new Event('results-displayed');
    evt.result7s = resultado;
    document.dispatchEvent(evt);
  }


  //Funcion para asignar que elementos dibujar en el elemento canvas de pag2.html, 
  //La funcion recibe dos parametros que son los puntos de ubicacion en donde se dibuja un marcado de ubicacion
  function myCanvas (x1, y1){
  var c = document.getElementById("myCanvas"); //captura el elemento con el id myCanvas
  var ctx = c.getContext("2d");
  var img = document.getElementById("outputImg"); //captura en un objeto el elemnto del id de la imagen a reconocer
  ctx.drawImage(img,0,0);                         //dibuja la imagen almacenada de la etiqueta outputImg en la posicion 0,0
  var img2 = document.getElementById("marcador"); //captura el elemento en donde se dibujara el marcador
  ctx.drawImage(img2,x1,y1); //ubica el marcador dentro de la imagen de acuerdo a los puntos de referencia resultantes del reconocimiento
}

//Funcion para obtener los datos del diccionario almacenado en datos.js de acuerdo a la imagen a reconocer
function getData(data){

  //almacenamiento de los puntos de referencia resultantes del reconocimiento de la imagen para 
  //posteriormente dibujar el marcador de ubicacion dentro de la imagen
  x1 = data.responses[0].landmarkAnnotations[0].boundingPoly.vertices[0].x;
  y1 = data.responses[0].landmarkAnnotations[0].boundingPoly.vertices[0].y;
  x2 = data.responses[0].landmarkAnnotations[0].boundingPoly.vertices[1].x;
  y2 = data.responses[0].landmarkAnnotations[0].boundingPoly.vertices[1].y;
  y3 = data.responses[0].landmarkAnnotations[0].boundingPoly.vertices[2].y;

  x1 = (x1 + x2) / 2;
  //y1 = (y1 + y3) / 2;

  //Imagen antigua
  var urlA = document.getElementById("outputImg2");
  var ruta = monumentosQuito[data.responses[0].landmarkAnnotations[0].mid]["imagen"];
  urlA.src = ruta;

  //Texto de informacion
  var descripcion = monumentosQuito[data.responses[0].landmarkAnnotations[0].mid]["descripcion"]
  $("#descripcion").text(descripcion);

}


var carousel;
$(document).ready(function () {

    carousel = $("#frame ul");

    carousel.itemslide({
        one_item: true //Set this for proper full screen navigation
    }); //initialize itemslide

    $(window).resize(function () {
        carousel.reload();

    }); //Recalculate width and center positions and sizes when window is resized
});







