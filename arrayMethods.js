const people = [
  {
    name: 'Vlad',
    age: 25,
    budget: 40000,
  },
  {
    name: 'Yers',
    age: 20,
    budget: 25000,
  },
  {
    name: 'Sasha',
    age: 23,
    budget: 4100,
  },
  {
    name: 'Alex',
    age: 17,
    budget: 3200,
  },
  {
    name: 'Misha',
    age: 30,
    budget: 4000,
  },
]

// for (let i = 0; i < people.length; i++) {
//   console.log(people[i])
// }

// for (let person of people) {
//   console.log(person)
// }

// forEach
// people.forEach(function (person, index, pArr) {
//   console.log(person)
//   // console.log(index)
//   // console.log(pArr)
// })

// people.forEach((person) => console.log(person))

// map

// const newPeople = people.map((person) => {
//   // return `${person.name} (${person.age})`
//   return person.age * 3

//   // return person.name
//   // return person
// })
// console.log(newPeople)

// filter
// const adults = []
// for (let i = 0; i < people.length; i++) {
//   if (people[i].age >= 18) {
//     adults.push(people[i])
//   }
// }

// console.log(adults)

// const adults = people.filter((person) => {
//   if (person.age >= 18) {
//     return true
//   }
// })
// console.log(adults)

// == код выше равен нижнему

// const adults = people.filter((person) => person.age >= 18)
// console.log(adults)

// reduce
// let amount = 0
// for (let i = 0; i < people.length; i++) {
//   amount += people[i].budget
// }

// const amount = people.reduce((total, person) => {
//   return total + person.budget
// }, 0)
// console.log(amount)

// find

// const igor = people.find((person) => person.name === 'Yers')
// console.log(igor)

// findIndex
// const igorIndex = people.findIndex((person) => person.name === 'Yers')
// console.log(igorIndex)

//***********

const amount = people
  .filter((person) => person.budget > 3000)
  .map((person) => {
    return {
      info: `${person.name} (${person.age})`,
      budget: person.budget,
    }
  })
  .reduce((total, person) => total + person.budget, 0)

console.log(amount)
