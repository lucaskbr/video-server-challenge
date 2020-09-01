import express, { json } from 'express'
import { router } from './config/routes'
import './config/dotenv'
import './config/mongodb'

const app = express()

app.use(json())
app.use(router)

app.listen(3000, () => {
  console.log('App is listening on port 3000!')
})
