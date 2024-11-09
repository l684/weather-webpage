$(function () {

    var positionOptions = {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0
    }

    navigator.geolocation.getCurrentPosition(
        geolocationSuccessCallback,
        geolactionFailureCallback,
        positionOptions
    );

    function geolocationSuccessCallback(position) {
        var lat = document.getElementById("lat");
        var long = document.getElementById("long");
        lat.value = position.coords.latitude;
        long.value = position.coords.longitude;
    }

    function geolactionFailureCallback(error) {
        /*Error codes:
         * 1 = permission denied
         * 2 = position unavailable
         * 3 = timeout */
        alert("geolocation error code " + error.code + ": " + error.message);
        
    }
});



    


