ymaps.ready(init);
var myMap;

function init() {
    myMap = new ymaps.Map("map", {
        center: [
            59.940671716146674, 30.321372973134626, 59.85883323379205, 29.9917831293846
        ],
        zoom: 11,
        controls: []
    });

    myMap
        .behaviors
        .disable('scrollZoom');

    var coords = [
            [
                59.94554327989287, 30.38935262114668
            ],
            [
                59.91142323563909, 30.50024587065841
            ],
            [
                59.88693161784606, 30.319658102103713
            ],
            [
                59.97033574821672, 30.315194906302924
            ]
        ],

        myCollection = new ymaps.GeoObjectCollection({}, {
            iconLayout: 'default#image',
            iconImageHref: 'http://burger.questbusters.ru/img/map-marker.png',
            iconImageSize: [46, 57],
            iconImageOffset: [-26, -52]
        });

    var slova = [1,2,3,4];

    for (var i = 0; i < coords.length; i++) {

        var currentAddress = slova[i];

        myCollection.add(new ymaps.Placemark(coords[i],
                                {// Чтобы балун и хинт открывались на метке, необходимо задать ей определенные свойства.
                                balloonContentHeader: "Балун метки",
                                balloonContentBody: "Слова" + currentAddress,
                                balloonContentFooter: "Подвал",
                                hintContent: "Хинт метки"}
        ));
    }

    myMap
        .geoObjects
        .add(myCollection);

}
