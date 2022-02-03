const obj = {
  name: 'Vlad',
  age: 20,
  job: 'stud',
}

const entries = [
  ['name', 'Vlad'],
  ['age', 20],
  ['job', 'stud'],
]

// console.log(Object.entries(obj))
// console.log(Object.fromEntries(entries))

const map = new Map(entries)
// console.log(map.get('name'))
map.set('newField', 32).set(obj, 'value of object').set(NaN, 'nan ??')
// console.log(map.get(obj))

// map.delete('job')
// console.log(map.has('job'))
// console.log(map.size)

// map.clear()
// console.log(map.size)

//// ==========

// for (let [key, value] of map) {
//   console.log(key, value)
// }

// for (let val of map.values()) {
//   console.log(val)
// }

// for (let key of map.keys()) {
//   console.log(key)
// }

// map.forEach((value, key, m) => {
//   console.log(value, key)
// })

//////======

// const array = [...map]
// const array = Array.from(map)
// const mapObj = Object.fromEntries(map.entries())
// console.log(mapObj)

////=====

const users = [{ name: 'elena' }, { name: 'alex' }, { name: 'sasha' }]

const visits = new Map()

visits.set(users[0], new Date())
set(users[1], new Date(new Date().getTime() + 1000 * 60))
set(users[2], new Date(new Date().getTime() + 5000 * 60))

function lastVisit(user) {
  return visits.get(user)
}
console.log(lastVisit(users[2]))
