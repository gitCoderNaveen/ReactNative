const mongoose = require ('mongoose')

const clientSchema = new mongoose.Schema({
    phonenumber:Number,
    name:String,
    address:String,
    city:String,
    pincode:Number,
    product:String
})

const clientModel = mongoose.model('clientsDetails', clientSchema)
module.exports = clientModel;

