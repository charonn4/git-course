const delay = (ms) => {
  return new Promise((r) => setTimeout(() => r(), ms))
}

// delay(2000).then(() => console.log('2 sec'))

const url = 'https://jsonplaceholder.typicode.com/todos'

async function fetchAsyncTodos() {
  console.log('fetch todo started....')
  try {
    await delay(2000)
    const response = await fetch(url)
    const data = await response.json()
    console.log('data:', data)
  } catch (e) {
    console.error(e)
  } finally {
  }
}
