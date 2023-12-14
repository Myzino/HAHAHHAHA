const mongoose = require('mongoose')
const Joi = require('joi');

const auctionSchema = new mongoose.Schema({
    
    
    ListingID:{
        type: Number,
        required: true,
        index: true,
        unique: true
    },

    SellerID:{ 
        type: Number,
        ref: 'User',
    },
    
   ListingTitle:{
     type: Joi.string()

   },
   ListingDescription:{
    type: Joi.string()

  },
    
  StartingPrice:{
    type: Number
  },
  CurrentBidPrice:{
    type: Number

  },
  MinimumBidIncrement:{
    type: Number

  },
  AuctionStart:{
    type: Joi.date()
  },
  
  AuctioEnd:{
    type: Joi.date()
  },
  ListingStatus:{
    type: Joi.string()
  }

},
    {timestamps:true}
)

module.exports = mongoose.model('Auction', auctionSchema);