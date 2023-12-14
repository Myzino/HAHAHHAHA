const Shipping = require("../models/shippingModel.js");

//  Create Attendance
const createShipping = async (req, res, next) => {
    const newShipping = new Shipping(req.body);
    console.log(req.body);
    newShipping.ShippingID = req.body.ShippingID;
    newShipping.PaymentID =  req.body.PaymentID;
    newShipping.ShippingAddress = req.body.ShippingAddress;
    newShipping.ShippingDateTime = req.body.ShippingDateTime;
    newShipping.Tracking = req.body.Tracking;
    newShipping.ShippingStatus = req.body.ShippingStatus;
    try {
        await Shipping.create(newShipping);
        res.redirect('shipping');

    } catch (error) {
        console.log(error)
    }
};


// Get Attendances
// Get Shippings
const getShippings = async (req, res, next) => {
    try {
        const shippings = await Shipping.find()
            .populate('PaymentID', 'PaymentID') // Populate the PaymentID, selecting only the PaymentID field
            .exec();

        res.status(200);
        res.render("shipping", { ShippingList: shippings }); // Change "ShippingList" to "shippingList"

    } catch (err) {
        next(err);
    }
};





// Delete Attendance
const deleteShipping = async (req, res, next) => {
    try {
        const deletedShipping = await Shipping.findByIdAndDelete(req.params.id);
        res.status(200).json("Shipping Has Been Deleted");
    } catch (err) {
        next(err);
    }
};


// Update Attendance
const updateShipping = async (req, res, next) => {
    try {
    const updatedShipping = await Shipping.findByIdAndUpdate(req.params.id, {$set: req.body},{

        ShippingID: req.body.ShippingID,
        PaymentID: req.body.PaymentID,
        ShippingAddress: req.body.ShippingAddress,
        ShippingDateTime: req.body.ShippingDateTime,
        Tracking: req.body.Tracking,
        ShippingStatus: req.body.ShippingStatus,
        updatedAt : Date.now()
    })
    
    res.redirect(`/api/shipping/`)


    } catch (err) {
        next(err)
    }
    
}

module.exports = {
    createShipping,
    deleteShipping,
    updateShipping,
    getShippings,
};