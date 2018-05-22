function timer(date) {
    var clockBlock = $('.clock');
    var currentDate = +new Date();
    if (clockBlock.length) {
        if (!date) {

            var deadLine = +new Date(currentDate + ( 1000 * 3600 * 48 ));

        } else {

            deadLine = Date.parse(date);
        }
        var timerId = setInterval(function () {
            if (currentDate >= deadLine) {
                clearInterval(timerId);
            }

            var differentOfMilliseconds = ( deadLine - currentDate );
            clockBlock[0].querySelector('.js-day').innerText = calculateOfTime(differentOfMilliseconds, ( 1000 * 3600 * 24 ));
            clockBlock[0].querySelector('.js-hours').innerText = calculateOfTime(differentOfMilliseconds, ( 1000 * 3600 ), 24);
            clockBlock[0].querySelector('.js-minutes').innerText = calculateOfTime(differentOfMilliseconds, ( 1000 * 60 ), 60);
            clockBlock[0].querySelector('.js-seconds').innerText = calculateOfTime(differentOfMilliseconds, ( 1000 ), 60);
            currentDate += 1000;

        }, 1000);
    }

}

function calculateOfTime(totalMilliseconds, separator, limit) {
    if (limit) {
        var result = Math.floor(( totalMilliseconds / separator ) % limit);
        return result < 10 ? '0' + result : result;
    }
    result = Math.floor(totalMilliseconds / separator);
    return result < 10 ? '0' + result : result;

}
function isEmptyHost() {
    var hostsItem = document.body.querySelectorAll('.hosts');
    if (hostsItem.length) {
        for (var i = 0; i < hostsItem.length; i++) {
            var title = hostsItem[i].querySelector('h2');
            if (title) {
                if (!title.textContent && title.textContent == '') {
                    var child = hostsItem[i].children[0];
                    child.style.backgroundImage = 'none';
                    child.style.backgroundColor = '#90d23c';
                    for (var j = 0; j < child.children.length; j++) {
                        child.children[j].style.display = 'none';
                        child.children[j].style.minHeight = '150px';
                    }
                }
            }

        }

    }
}

function initMap() {
    var uluru = {lat: -33.9133416, lng: 151.0971857};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: uluru,
        disableDefaultUI: true
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map

    });
}

function toggleMap() {

    document.body.querySelector('.js-seen').onclick = function ( ) {

            var arrOfBtn = document.body.querySelectorAll('.js-map-toggle');
            arrOfBtn.forEach( function (item) {
                item.classList.toggle('js-seen');
                item.closest('.js-parent').classList.toggle('js-none');

            });
                document.body.querySelector('.js-shadow').classList.toggle('js-none');
              toggleMap();
        }

}

$(document).ready(function () {
    timer();
    isEmptyHost();
    toggleMap();

});

