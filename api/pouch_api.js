const PouchDB = require('pouchdb')
const Message = require('../models/message_model')
PouchDB.defaults({
  prefix: './db/'
})

// open PouchDB for a user
exports.openPouchDb = (user_id) => {
  const p = new Promise((res, rej) => {
    // user_id = getDbIdFromUserHash()
    res(user_id)
  })
  return p
}

// put a document into PouchDB
exports.putIntoDb = (db_id, msg) => {
  const p = new Promise((res, rej) => {
    const db = new PouchDB(`http://localhost:5984/${db_id}`)
    const newMessage = new Message(msg)
    db.put(newMessage).then((data) => {
      console.log('Successful save!')
      db.close()
      res(data)
    }).catch((err) => {
      if (err.name === 'conflict') {
        // conflict!
        console.log(`${err.name} error!`)
        res(err)
      } else {
        // some other error
        rej(err)
        db.close()
      }
    })
  })
  return p
}
