import { Flight } from '../models/flight.js'

function index(req, res) {
  Flight.find({})
  .then(flight => {
    res.render('flights/index', {
      title: 'Flights Home Page'
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}








export {
  index,
}

