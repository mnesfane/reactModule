const add = (...strs) => strs.join(' ')
console.log(add('a', 'd', 'a', 'd'))

let [n, ...f] = [1, 2, 3]
console.log(f)

const {age} = {name: "mn", age:23}
console.log(age)

