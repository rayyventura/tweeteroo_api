 import  express  from 'express'
 import cors from 'cors'


 let user = {
     username: '',
     avatar: '',
     tweet: ''
 }

 let tweets = []

 const server = express();

 server.use(cors())
 server.use(express.json())

 server.post('/sign-up', (req, res) => {
     const { username, avatar } = req.body
     user.username = username
     user.avatar = avatar

     res.send('OK')
 })

 server.post('/tweets', (req, res) => {
     const { tweet } = req.body

  tweets.push({ id, username: user.username, tweet, avatar: user.avatar })

     
     res.send('OK')
 })

 server.get('/tweets', (_req, res) => {
    const tweetInverso = [...tweets].reverse().slice(0,10);
        
    res.send(tweetInverso);
        
     
 })

 server.listen(5000, () => {
     console.log('Initiated Server...')
 })
