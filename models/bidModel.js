const mongoose = require('mongoose')
const Joi = require('joi');

const bidSchema = new mongoose.Schema({
    
    BidID:{
        type: Joi.number().required(),
        unique: true
    },

    BidderID:{
        type: Number,
        ref: 'User'
    },
    
    ListingID:{
        type: Number,
        ref: 'Auction'
    },
    BidAmount:{
        type: Joi.number()
    },
    BidDate:{
        type : Date, default:new Date(0)
    }
    

},
    {timestamps:true}
)

module.exports = mongoose.model('Bid', bidSchema);