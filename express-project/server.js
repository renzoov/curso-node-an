const path = require('node:path')
const express = require('express')
const friendRouter = require('./routes/friends.router.js')
const messagesRouter = require('./routes/messages.router.js')

const app = express()

app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))

app.use('/site', express.static(path.join(__dirname, 'public')))
app.use(express.json())

const PORT = 3000

app.use((req, res, next) => {
  const start = Date.now()
  next()
  const delta = Date.now() - start
  console.log(`${req.method} ${req.url} ${delta}ms`)
})

app.get('/', (req, res) => {
  res.render('index', {
    title: 'My Friends Are VERYY Vlever',
    caption: "Let's go skiing"
  })
})

app.use('/friends', friendRouter)
app.use('/messages', messagesRouter)

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`)
})
