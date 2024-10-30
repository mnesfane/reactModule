// const props = [{id:1 , name:'m'},{id:2 , name:'s'},{id:3 , name:'f'}]

// let [ , ,{name}] = props;
// console.log(name)

// --------------- insert inside an array in the middle

// let t = [5, 6, 7]

// const pureInsert = function(index, value){
//     return [...t.slice(0, index), value, ...t.slice(index)]
// }
// console.log(pureInsert(1, 200))

// [[[[[[[[[[[[[[]]]]]]]]]]]]]] suppression

// let t = [5, 6, 7]

// const pureDel = function(index, value){
//     return [...t.slice(0, index),...t.slice(index + 1)]
// }
// console.log(pureInsert(1, 200))
// -----------
// let objArr = [{id: 1}, {id: 2}, {id: 3}]
// const pureDelobj = function(id){
//     let index = objArr.findIndex(ob => ob.id === 2)
//     console.log(index)
//     return [...objArr.slice(0, index), ...objArr.slice(index + 1)]
// }
// console.log(pureDelobj(2))

// -----------------  modifier

let objGrp = [{id: 1, grp: '101'}, {id: 2, grp: '102'}, {id: 3, grp: '103'}]
const modifierObj = function(id, newGrp){
    // let t = [...objGrp];
    return objGrp.map(function(ob){
        if(ob.id == id){
            return {...ob, grp: newGrp}
        }
        return ob
    })

}
console.log(objGrp)
console.log(modifierObj(2, '105'))

// [[[[[[[[[]]]]]]]]] 
const pers = { id: 22, name: "mn" , adresse:{street: 'nyu', num: 47}, phone:'060000'}

// pers['phone'] = '0939393'
// pers['adresse']['city'] = 'miami'
const pers2 = {...pers, adresse: {...pers.adresse, city: 'miami'}, phone: '09090909'}
console.log(pers2)
// [[[]]]  js devoir
