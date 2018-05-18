

function timer( date ){
    var clockBlock = $('.clock');
    var currentDate = +new Date();
    if( clockBlock.length ){
        if( !date ){

            var deadLine = +new Date( currentDate + ( 1000 * 3600 * 48 ) );

        }else {

            deadLine = Date.parse( date );
        }
        var timerId = setInterval( function () {
            if( currentDate >= deadLine ){
                clearInterval( timerId );
            }

            var differentOfMilliseconds = ( deadLine - currentDate );
            clockBlock[ 0 ].querySelector('.js-day').innerText =   calculateOfTime(differentOfMilliseconds, ( 1000 * 3600 * 24 ) ) ;
            clockBlock[ 0 ].querySelector('.js-hours').innerText = calculateOfTime(differentOfMilliseconds, ( 1000 * 3600 ), 24 );
            clockBlock[ 0 ].querySelector('.js-minutes').innerText = calculateOfTime(differentOfMilliseconds, ( 1000 * 60 ), 60 );
            clockBlock[ 0 ].querySelector('.js-seconds').innerText = calculateOfTime(differentOfMilliseconds, ( 1000 ), 60 );
            currentDate += 1000;

        }, 1000 );
    }

}

function calculateOfTime( totalMilliseconds, separator, limit ) {
     if( limit ){
         var result = Math.floor( ( totalMilliseconds / separator ) % limit );
        return result < 10 ? '0' + result : result;
     }
    result = Math.floor( totalMilliseconds / separator );
    return result < 10 ? '0' + result : result;

}

function googleMap() {
    if ($('#map').length) {
        var map;
        var image = 'img/map-pimp.png';

        // coordinates for placemark
        var markersArray = [
            {
                icon: image,
                lat: 50.4501,
                lng: 30.523400000000038
            }
        ];

        var arrLeng = $(markersArray).length;

        function initialize() {
            // map option
            var mapOptions = {
                center: new google.maps.LatLng(50.4501, 30.523400000000038),
                disableDefaultUI: true,
                zoom: 11,
                navigationControl: !1,
                mapTypeControl: !1,
                scaleControl: !1,
                streetViewControl: !1,
                panControl: !0,
                zoomControl: !0,
                // styles: styles
            };

            // define google map
            map = new google.maps.Map(document.getElementById('map'), mapOptions);

            // markers List
            var i = 0;
            var markerArray = new Array();
            for (i; i < arrLeng; i++) {
                markerArray[i] = new google.maps.Marker({
                    position: new google.maps.LatLng(markersArray[i].lat, markersArray[i].lng),
                    map: map,
                    icon: image
                });
            }
        }

        // init map
        google.maps.event.addDomListener(window, 'load', initialize);
    }
}



$(document).ready( function () {
   timer();

});

