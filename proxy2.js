// wrapper
const withDefValue = (target, defValue = 0) => {
  return new Proxy(target, {
    get: (obj, prop) => (prop in obj ? obj[prop] : defValue),
  })
}

const position = withDefValue(
  {
    x: 24,
    y: 42,
  },
  0
)

// console.log(position)

// hidden properties
const withHiddenProps = (target, prefix = '_') => {
  return new Proxy(target, {
    has: (obj, prop) => prop in obj && !prop.startsWith(prefix),
    ownKeys: (obj) => Reflect.ownKeys(obj),
  })
}
