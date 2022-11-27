const fs = require('fs')

fs.readFileSync('sowpods.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err)
    return;
  }
  console.log(data)
})

const content = "something interesting happened today on the computer\n"
content = data

fs.appendFile('results.txt', content, err => {
  if (err) {
    console.err
    return
  }
})



