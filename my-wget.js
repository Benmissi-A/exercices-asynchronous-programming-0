const fsPromises = require('fs/promises')
// const { stat } = require('fs')
const { default: axios } = require("axios")

const URL =process.argv[2]

if(process.argv.length !== 3){
  console.log('exept only argument')
  process.exit
}

const writeFrom = async () => {
  try{
    const res = await axios.get(URL)
    await fsPromises.writeFile('index.html', res.data)
    console.log(`ok`)
    const stats = await fsPromises.stat('index.html')
    console.log(`index.html size: ${stats.size}`)
  }catch(e){
    console.log(e.message)}
  } 
  writeFrom()