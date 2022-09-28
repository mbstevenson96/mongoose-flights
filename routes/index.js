import { Router } from 'express'

const router = Router()

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Welcome to Stevenson Airlines' })
})

export { 
  router
}
