// function* strGenerator() {
//   yield 'h'
//   yield 'e'
//   yield 'l'
//   yield 'l'
//   yield 'o'
// }

// const str = strGenerator()

// function* numGen(n = 10) {
//   for (let i = 0; i < n; i++) {
//     yield i
//   }
// }

// const num = numGen(7)

// const iterator = {
//   [Symbol.iterator](n = 10) {
//     // gen(n = 10)
//     let i = 0
//     return {
//       next() {
//         if (i < n) {
//           return { value: ++i, done: false }
//         }
//         return { value: undefined, done: true }
//       },
//     }
//   },
// }

function* iter(n = 10) {
  for (let i = 0; i < n; i++) {
    yield i
  }
}

for (let k of iter(6)) {
  // arrays, strings as well
  console.log(k)
}
