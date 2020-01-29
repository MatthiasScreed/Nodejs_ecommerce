const UserMongo = require('./UserMongoDB.js')
const bcrypt = require("bcryptjs")

module.exports = class User {
  add(civility, lastname, firstname, email, password) {
    let hash = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
    UserMongo.create({ civility, lastname, firstname, email, password: hash })
  }

  emailExists(email) {
    return new Promise((resolve, rejected) => {
      UserMongo.findOne({ email }).exec((err, user) => {
        if (err !== null || user == null) resolve(false);
        resolve(true);
      })
    })
  }
}