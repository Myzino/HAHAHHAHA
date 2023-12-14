const mongoose = require('mongoose');
const Joi = require('joi');

const shippingSchema = new mongoose.Schema({
    ShippingID: {
        type: Number,
    },

    PaymentID: {
        type: Number,
        ref: 'Payment',
    },

    ShippingAddress: {
        type: String,
    },

    ShippingDateTime: {
        type: Date,
    },

    TrackingInformation: {
        type: String,
    },

    ShippingStatus: {
        type: String,
        },
},
{ timestamps: true }
);

module.exports = mongoose.model('Shipping', shippingSchema);
