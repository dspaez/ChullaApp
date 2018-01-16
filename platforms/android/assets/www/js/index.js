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
    function onFail(message) {
      alert('Failed because: ' + message);
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
    }).success(displayJSON) 
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
    var ruta= monumentosQuito[data.responses[0].landmarkAnnotations[0].mid]["imagen"];
    var image2 = document.getElementById('outputImg2');
    image2.src = ruta;
    $('#results').text(resultado);
    var evt = new Event('results-displayed');
    evt.result7s = resultado;
    document.dispatchEvent(evt);
  }






