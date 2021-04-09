const fsPromises = require('fs/promises')
// il y avait deux to uppercase quanfd j'ai fait l'exo



const read = async () => {
  try {
    let txt1 = await fsPromises.readFile('hello.txt', 'utf-8')
    console.log(txt1)
  } catch (e) {
    console.log(e.message)
  }
}
read()

const write = async () => {
  try {
    let txt1 = await fsPromises.readFile('hello.txt', 'utf-8')
    txt1 = txt1.toUpperCase()
    await fsPromises.writeFile('hello.txt', txt1)
  } catch (e) {
    console.log(e.message)
  }
}
write()