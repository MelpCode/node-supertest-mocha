const {Schema,model} = require('mongoose');

const contactSchema = new Schema({
    name:{type:String},
    lastname:{type:String},
    address:{type:String},
    phone:{type:String}
})

module.exports = model('Contact',contactSchema);