const mongoose = require('mongoose')
const Joi = require('joi');

const notificationSchema = new mongoose.Schema({
    
    NotificationID:{
        type: Joi.number().required(),
        unique: true,
    },

    UserID:{
        type: Number, 
        ref: 'User',
    },
    
    NotificationType:{
        type: Joi.number()
    },
    
    Content:{
        type: Joi.string(), 
    },

    TimesStamp:{
        type: Joi.string(), 
    },

    Status:{
        type: Joi.string(), 
        default: 'unread',
    }

},
    {timestamps:true}
)

module.exports = mongoose.model('Notification', notificationSchema);