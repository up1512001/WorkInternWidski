const bodyParser = require('body-parser')

module.exports = {
    Parser: bodyParser.urlencoded({ extended: false })
}