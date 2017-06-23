const bodyParser = require('body-parser')
// routes
const Messages = require('./routes/message_routes')

// bodyParser attempts to parse any request into JSON format
const json_encoding = bodyParser.json({type:'*/*'})
// bodyParser attempts to parse any request into GraphQL format
// const graphql_encoding = bodyParser.text({ type: 'application/graphql' })

module.exports = function(app){

	// routes
	app.get('/', json_encoding, () => {})
	app.get('/test', json_encoding, Messages.test)

	// initialize pouchdb
	app.post('/pouchdb', json_encoding, Messages.getPouchDB)
	// post message to pouchdb
	app.post('/message', json_encoding, Messages.message)

}
