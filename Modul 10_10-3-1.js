const num = +prompt('Введите число')

if (Number.isNaN(num)) {
  console.log('Упс, кажется, вы ошиблись')
} else if (typeof num === 'number') {
  if (num % 2 === 0) {
    console.log('Это чётное число')
  } else {
    console.log('Это нечётное число')
  }
}