import { CONSTANT_HTTP_CONNECTION } from './instance';
class YandexMap {
    constructor() {
        this.connection();
    }

    connection() {
        const loadScript = url =>
            new Promise(resolve => {
                const connectionMap = document.getElementById('scriptConnectionMap');
                connectionMap.addEventListener('load', () => {
                    resolve();
                });
                connectionMap.src = url;
            });

        loadScript(CONSTANT_HTTP_CONNECTION).then(() => {
            this.map();
        });
    }

    map() {
        ymaps.ready(() => {
            let map;
            let mapDivId = 'map'; //Id контейнера для карты
            let mapCenter = [55.76, 37.64]; //Координата центра карты по умолчанию
            map = new ymaps.Map(mapDivId, { center: mapCenter, zoom: 3 });
            document.getElementById('startRoute').addEventListener('click', ReadRoute); //по клику вызываем ReadRoute
            // ReadRoute()
            function ReadRoute() {
                return ymaps.route([pointA.value, pointB.value]).then(
                    //получили координаты
                    function (route) {
                        distance.value = Math.round(route.getLength() / 1000); //получаем расстояние (в метрах и переводим в км)
                        map.geoObjects.removeAll();
                        map.geoObjects.add(route); //рисуем карту
                    },
                    error => {
                        alert('Ошибка: Введены неверные значения ');
                    },
                );
            }
        });
    }
}

new YandexMap();
