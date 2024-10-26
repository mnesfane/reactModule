const str = "dev201"
const doubleStr = str.split('').map((s) => s + s).join('')
console.log(doubleStr)

// ------------- 2

let str2 = 'apple samsung htc'
let newT =  str2.split(' ').map(s => s[0])
console.log(newT)
// =============== 3

arr = ['apple',  'samsung',  'htc']

let objArr = arr.map(function(elm, index){
    return {id: index, nom: elm}
})
console.log(objArr);