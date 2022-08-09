myMap.set('true', 456)
myMap.set('key', 'numb')
myMap.set(3, 'numb1')

for (const [key, value] of myMap) {
  console.log(Ключ - ${key}, значение - ${value})
}