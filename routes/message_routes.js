const { openPouchDb, putIntoDb } = require('../api/pouch_api')

// GET /test
exports.test = function(req, res, next){
  res.json({
    message: "Test says alive and well"
  })
}

// POST /pouchdb
exports.getPouchDB = (req, res, next) => {
  console.log(req.body)
  openPouchDb(req.body.userId).then((db_name) => {
    res.json({ db_name })
  })
}

// POST /message
exports.message = function(req, res, next){
  console.log(req.body)
  const db_puts = [
    putIntoDb(req.body.sender_id, req.body),
    putIntoDb(req.body.receiver_id, req.body)
  ]
  Promise.all(db_puts).then((data) => {
    res.json(data)
  }).catch((err) => {
    console.log(err)
  })
  // .then((response) => {
  //   console.log(response)
  //   return db.close
  // }).then(() => {
  //   res.json({
  //     message: "Successfully sent message"
  //   })
  // })
}
