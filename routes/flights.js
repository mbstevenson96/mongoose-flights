import { Router } from 'express'
import * as flightsCtrl from '../controllers/flights.js'

const router = Router()

/* GET users listing. */
router.get('/', flightsCtrl.index)
router.get('/new', flightsCtrl.new)
router.get('/:id', flightsCtrl.show)
router.get('/:id/edit', flightsCtrl.edit)


router.put('/:id', flightsCtrl.update)

router.post('/', flightsCtrl.create)
router.post('/:id/tickets', flightsCtrl.createTicket)
router.post('/:id/meals', flightsCtrl.addToMeal)

router.delete('/:id', flightsCtrl.delete)

export {
  router
}
