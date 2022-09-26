import { Flight } from '../models/flight.js'

function index(req, res) {
  Flight.find({})
  .then(flights => {
    res.render('flights/index', {
      flights: flights,
      title: 'Flights Home Page'
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function newFlight(req, res) {
  res.render('flights/new', {
    title: 'Add Flight',
  })
}

function create(req, res) {
  Flight.create(req.body)
  .then(flight => {
    res.redirect(`/flights/new`)
  })
  .catch(err => {
    console.log(err)
    res.redirect('/flights')
  })
}

function show(req, res) {
  Flight.findById(req.params.id)
  .then(flight => {
    res.render('flights/show', {
      flight: flight,
      title: 'Flight Details'
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function deleteFlight(req, res) {
  Flight.findByIdAndDelete(req.params.id)
  .then(flight => {
    res.redirect('/flights')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}




export {
  index,
  newFlight as new,
  create,
  deleteFlight as delete,
  show,
}

