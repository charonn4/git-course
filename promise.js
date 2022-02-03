console.log('reguest')

// setTimeout(() => {
//   console.log('prep data')
//   const backendData = {
//     server: 'avs',
//     port: 2000,
//     status: 'working',
//   }

//   setTimeout(() => {
//     backendData.modified = true
//     console.log('data changed', backendData)
//   }, 2000)
// }, 2000)

// const p = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     console.log('prep data')
//     const backendData = {
//       server: 'avs',
//       port: 2000,
//       status: 'working',
//     }
//     resolve(backendData)
//   }, 2000)
// })

// p.then((data) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       data.modified = true
//       resolve(data)
//     }, 2000)
//   })
//   // p2.then((clientData) => {
//   //   console.log('data changed', clientData)
//   // })
// })

//   .then((clientData) => {
//     // console.log('data changed', clientData)
//     clientData.fromPromise = true
//     return clientData
//   })
//   .then((data) => {
//     console.log('modified data', data)
//   })
//   .catch((err) => console.error('error', err))
//   .finally(() => {
//     console.log('finally')
//   })

const sleep = (ms) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), ms)
  })
}

// sleep(2000).then(() => {
//   console.log('after 2 sec')
// })
// sleep(3000).then(() => {
//   console.log('after 3 sec')
// })

Promise.all([sleep(2000), sleep(5000)]).then(() => {
  console.log('all promises')
})
Promise.race([sleep(2000), sleep(5000)]).then(() => {
  console.log('race promises')
})
