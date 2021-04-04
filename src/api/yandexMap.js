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

        loadScript('https://api-maps.yandex.ru/2.1/?apikey=107edbda-a282-45c8-9340-736038bcb720&lang=ru_RU').then(
            () => {
                this.map();
            },
        );
    }

    map() {
        ymaps.ready(() => {
            let map;
            let pointA = document.getElementById('pointA'); //получаем точку А
            let pointB = document.getElementById('pointB'); //получаем точку В
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
