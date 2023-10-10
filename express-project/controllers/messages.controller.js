const path = require('node:path')

function getMessages (req, res) {
  res.render('messages', {
    title: 'Messages to my Friends!',
    friend: 'Elon Musk'
  })
  // res.sendFile(path.join(__dirname, '..', 'public', 'images', 'zoro.png'))
}

function postMessage (req, res) {
  console.log('Updating messages...')
}

module.exports = {
  getMessages,
  postMessage
}
