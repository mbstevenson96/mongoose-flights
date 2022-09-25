import { Flight } from '../models/flight.js'

function index(req, res) {
  Flight.find({})
  .then(flight => {
    res.render('index')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}








export {
  index,
}

