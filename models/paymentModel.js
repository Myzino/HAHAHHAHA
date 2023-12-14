const mongoose = require('mongoose');
const Joi = require('joi');

const paymentSchema = new mongoose.Schema({
    PaymentID: {
        type: Number,
        required: true,
        unique: true
    },
    BidID: {
        type: Number,
        ref: 'Bid'
    },
    BuyerID: {
        type: Number,
        ref: 'User'
    },
    PaymentAmount: {
        type: Number
    },
    PaymentDateTime: {
        type: Date
    },
    PaymentMethod: {
        type: String
    },
    PaymentStatus: {
        type: String,
    }
}, { timestamps: true });

module.exports = mongoose.model('Payment', paymentSchema);
