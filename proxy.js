//obj
const person = {
  name: 'Yers',
  age: 20,
  job: 'stud',
}

const objProxy = new Proxy(person, {
  get(target, prop) {
    // console.log('target', target)
    // console.log('prop', prop)
    console.log(`Getting prop ${prop}`)
    if (!(prop in target)) {
      return prop
        .split('_')
        .map((p) => target[p])
        .join(' ')
    }
    return target[prop]
  },
  set(target, prop, value) {
    if (prop in target) {
      target[prop] = value
    } else {
      throw new Error(`No ${prop} field in target`)
    }
  },
  has(target, prop) {
    return ['age', 'name', 'job'].includes(prop)
  },
  deleteProperty(target, prop) {
    console.log(`deleting...`, prop)
    delete target[prop]
    return true
  },
})

//func
const log = (text) => `Log:${text}`

const fp = new Proxy(log, {
  apply(target, thisArg, args) {
    console.log('Calling fn....')
    return target.apply(thisArg, args).toUpperCase()
  },
})

//classes
class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
}

const PersonProxy = new Proxy(Person, {
  construct(target, args) {
    console.log('construct....')
    return new Proxy(new target(...args), {
      get(t, prop) {
        console.log(`getting prop "${prop}"`)
        return t[prop]
      },
    })
  },
})

const p = new PersonProxy('Maxim', 30)
