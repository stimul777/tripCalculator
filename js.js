let distance = document.getElementById('distance'); //расстояние
let distance_100 = document.getElementById('distance_100'); //расстояние л.100км
let price = document.getElementById('price'); //цена за 1 л
let consumption = document.getElementById('consumption'); // л/100к
let output = document.getElementById('output'); //результат


document.getElementById('consider').addEventListener("click", distance_price);
document.getElementById('consider').addEventListener("click", valid);

document.getElementById('reset').onclick = function() {
    window.location.reload();
}

function distance_price() {
    consumption.value = Math.round(liters.value / distance_100.value * 100);
    output_100.innerHTML = consumption.value + " литров/100км";
    output.innerHTML = Math.round(consumption.value * distance.value * price.value / 100) + " рублей";
    if (check_two_sides.checked) {
        output.innerHTML = (consumption.value * distance.value * price.value / 100) * 2 + " рублей";
    }

}

// Валидация 
let entry_field = document.querySelectorAll(".entry_field"); //получаем все инпуты
for (var i = 0; i < entry_field.length; i++) {
    entry_field[i].onkeypress = function(event) {
        event = event || window.event;
        if (event.charCode && (event.charCode < 48 || event.charCode > 57))
            return false;
    };
}

function valid() {
    for (var i = 0; i < entry_field.length; i++) {
        if (!entry_field[i].value) {
            output_100.innerHTML = "Заполните все поля!";
            output.innerHTML = "Заполните все поля!";
            entry_field[i].style.border = "2px solid red";

        } else {
            entry_field[i].style.border = "2px solid #22ff00";
        }
    }
}

// Яндекс карты
ymaps.ready(function() {
    let map;
    let pointA = document.getElementById('pointA'); //получаем точку А
    let pointB = document.getElementById('pointB'); //получаем точку В
    let mapDivId = 'map'; //Id контейнера для карты 
    let mapCenter = [55.76, 37.64]; //Координата центра карты по умолчанию
    map = new ymaps.Map(mapDivId, { center: mapCenter, zoom: 3 });

    document.getElementById('ok').addEventListener('click', ReadRoute); //по клику вызываем ReadRoute


    function ReadRoute() {

        return ymaps.route([pointA.value, pointB.value]).then( //получили координаты 
            function(route) {
                distance.value = Math.round(route.getLength() / 1000); //получаем расстояние (в метрах и переводим в км)
                map.geoObjects.removeAll();
                map.geoObjects.add(route); //рисуем карту

            },
            function(error) {
                alert('Ошибка: Введены неверные значения ');
            }
        );


    }
})