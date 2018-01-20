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
