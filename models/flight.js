import mongoose from 'mongoose'

const Schema = mongoose.Schema

const ticketSchema = new Schema( {
  seat: {type: String, match: /[A-F][1-9]\d?/},
  price: {type: Number, min: 1},
}, {
  timestamps: true
})

const flightSchema = new Schema({
  airline: {type: String, required: true},
  airport: String,
  flightNo: {type: Number, required: true},
  departs: Date,
  tickets: [ticketSchema],
  meal: [{type: Schema.Types.ObjectId, ref: 'Meal'}]
}, {
  timestamps: true
})

const Flight = mongoose.model('Flight', flightSchema)

export {
  Flight
}