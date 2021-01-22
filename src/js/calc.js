class Calc {
  constructor() {
      this.distance = document.getElementById('distance'); //расстояние
      this.consumption100 = document.getElementById('consumption'); //расход литров на 100км
      this.price = document.getElementById('price'); //цена за 1 л

      this.output = document.getElementById('output'); //результат
      this.btnConsider = document.getElementById('consider'); //кнопка подсчитать
      
      this.calculation();
  }  

  calculation() {
      this.btnConsider.addEventListener('click', () => {
          this.output.innerHTML = Math.round(this.consumption100.value * this.distance.value  * this.price.value  / 100) + ' рублей';
      })
  }
}
new Calc();

// check_liters.addEventListener("click", function() {
//     if (check_liters.checked) {
//         calc_100.style.listStyle.add = "collapse";
//     } else {
//         calc_100.style.display = "none";
//     }
// });

// document.getElementById('consider').addEventListener("click", function() {
//     if (check_liters.checked) {
//         consumption.value = Math.round(liters.value / distance_100.value * 100);
//         output_100.innerHTML = consumption.value + " литров/100км";
//     }

//     output.innerHTML = Math.round(consumption.value * distance.value * price.value / 100) + " рублей";
//     if (check_two_sides.checked) {
//         output.innerHTML = (consumption.value * distance.value * price.value / 100) * 2 + " рублей";
//     }

//     // Валидация 
//     let entry_field = document.querySelectorAll(".entry_field"); //получаем все инпуты
//     for (var i = 0; i < entry_field.length; i++) {
//         entry_field[i].onkeypress = function(event) {
//             event = event || window.event;
//             if (event.charCode && (event.charCode < 48 || event.charCode > 57))
//                 return false;
//         };
//     }

//     for (var i = 0; i < entry_field.length; i++) {
//         if (!entry_field[i].value) {
//             output.innerHTML = "Заполните все поля!";
//             entry_field[i].style.border = "2px solid red";

//         } else {
//             entry_field[i].style.border = "2px solid #22ff00";
//         }
//     }

// });