class YandexMap {
    constructor() {
        this.map();

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
        
            function ReadRoute() {
                return ymaps.route([pointA.value, pointB.value]).then( //получили координаты 
                    function(route) {
                        distance.value = Math.round(route.getLength() / 1000); //получаем расстояние (в метрах и переводим в км)
                        map.geoObjects.removeAll();
                        map.geoObjects.add(route); //рисуем карту
        
                    },
                    (error) => {
                        alert('Ошибка: Введены неверные значения ');
                    }
                );
            }    
        })
    }
}

new YandexMap();