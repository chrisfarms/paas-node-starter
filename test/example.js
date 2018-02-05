const tmpl = require('./example.njk')
console.log('tmpl', tmpl)
const output = tmpl.render({name: 'Bob'})
console.log(output)
