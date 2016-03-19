var number = prompt('Введите, пожалуйста, число' , 0);
var degree = prompt('Введите, пожалуйста, степень' , 0);
		function pow(a, b){
			var a = parseInt(number);
			var b = parseInt(degree);
  		var result;
          switch (true){
                  case (b == 0): // Если степень равна 0
                      result = 1;
                      // console.log('число в степени = ', result);
                      break;
                  case (b == 1): // Если степень равна 1
                      result = a;
                      // console.log('число в степени = ', result);
                      break;
                  case (b < 0): // Если степень меньше 0
                      result = a;
                      for (var j = 1; j < (b * (-1)); j++) {
                          result = result * a;
                          // console.log('число в степени = ', result);
                      }
                      result = 1 / result;
                      // console.log('число в степени = ', result);
                      break;
                  default: // Если степень больше 1
                      result = a;
                      for (var i = 1; i < b; i++) {
                          result = result * a;
                      }
                      // console.log('число в степени = ', result);
            }
      return result;
  }
var degreeResult = pow();
console.log('число ', number, ' в степени ', degree, ' = ', degreeResult); // Вывод результата в консоль
document.write('число ', number, ' в степени ', degree, ' = ', degreeResult); // Вывод результата на экран
