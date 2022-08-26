const bodyParser = require('body-parser');

const parserExp = bodyParser.urlencoded({ extended: false })

module.exports = parserExp;