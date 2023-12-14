const mongoose = require('mongoose')
const Joi = require('joi');

const userSchema = new mongoose.Schema({
    
    UserID:{
        type: Number,
        unique: true,
        index: true, 
        required: true
    },
    UserName:{
        type: Joi.string().required()
    },
    Email:{
        type: Joi.string().required(),
        unique: true
    },
    Password:{
        type: Joi.string().required()

    },

    FirstName:{
        type: Joi.string().required()
    },
    
    LastName:{
        type: Joi.string().required()
    },

    ContactInformation:{
        type: Joi.string().required()
    },

    BillingInformation:{
        type: Joi.string().required()
    }

},
    {timestamps:true}
)

userSchema.set('primary_key', 'UserID');

module.exports = mongoose.model('User', userSchema);