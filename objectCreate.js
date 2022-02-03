const person = Object.create(
  {
    calculateAge() {
      console.log('age:', new Date().getFullYear() - this.birthYear)
    },
  },
  {
    name: {
      value: 'yers',
      enumerable: true,
      writable: true,
      configurable: true,
    },
    birthYear: {
      value: 2001,
      enumerable: false,
      writable: false,
      configurable: false,
    },
    age: {
      get() {
        return new Date().getFullYear() - this.birthYear
      },
      set(value) {
        document.body.style.background = 'red'
        console.log('set age', value)
      },
    },
  }
)
// person.name = 'max'

for (let key in person) {
  if (person.hasOwnProperty(key)) {
    console.log('key', key, person[key])
  }
}
