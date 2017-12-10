var app = {
    // Application Constructor
    initialize: function() {
      document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
     document.getElementById("openCamera").addEventListener
     ("click", cameraTakePicture);
     this.receivedEvent('deviceready');

   },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
      var parentElement = document.getElementById(id);
      var listeningElement = parentElement.querySelector('.listening');
      var receivedElement = parentElement.querySelector('.received');

      listeningElement.setAttribute('style', 'display:none;');
      receivedElement.setAttribute('style', 'display:block;');

      console.log('Received Event: ' + id);
    }
  };

  app.initialize();


  var request = {};


  function cameraTakePicture() {
   navigator.camera.getPicture(onSuccess, onFail, { 
    quality: 50,
    destinationType: Camera.DestinationType.DATA_URL,
    sourceType: Camera.PictureSourceType.CAMERA

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


function chooseFile() {
 navigator.camera.getPicture(onSuccess, onFail, { 
  quality: 50,
  destinationType: Camera.DestinationType.DATA_URL,
  sourceType: Camera.PictureSourceType.SAVEDPHOTOALBUM

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


function ajax() {
  var API_KEY = "AIzaSyCGyZenFVHB3v9pmjLIc-7iSeT49kw4eKg";
  var CV_URL = 'https://vision.googleapis.com/v1/images:annotate?key=' + API_KEY;
  $.ajax({
    url: CV_URL,
    type: 'POST',
    data: JSON.stringify(request),
    contentType: 'application/json'
  }).success(displayJSON) 
}



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

function displayJSON (data) {
  var resultado = monumentosQuito[data.responses[0].landmarkAnnotations[0].mid]["texto"];
  $('#results').text(resultado);
  var evt = new Event('results-displayed');
  evt.results = resultado;
  document.dispatchEvent(evt);
}






