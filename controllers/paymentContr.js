const Payment = require("../models/paymentModel.js");


//  Create Salary
const createPayment = async (req, res, next) => {
    const newPayment = new Payment(req.body);
    console.log(req.body);
    newPayment.PaymentID = req.body.PaymentID;
    newPayment.BidID = req.body.BidID;
    newPayment.BuyerID =  req.body.UserID;
    newPayment.SellerID =  req.body.UserID;
    newPayment.paymentAmount = req.body.paymentAmount;
    newPayment.paymentMethod = req.body.paymentMethod;
    newPayment.paymentDate = req.body.paymentdate;
    newPayment.paymentStatus = req.body.paymentStatus;
    try {
        await Payment.create(newPayment);
        res.redirect('payment');

    } catch (error) {
        console.log(error)
    }

};

// Get All Salary
const getPayments = async (req, res, next) => {
    try {
        const payments = await Payment.find()
            .populate({
            path: "BidID",
            localField: "BidID",
            foreignField: "BidID"
            })
            .populate({
                path: "BuyerID",
                localField: "BuyerID",
                foreignField: "UserID"
            })
        res.status(200);
        res.render("payment", { paymentList: payments }); 

    } catch (err) {
        next(err);
    }
};


// Get Salary
const getPayment = async (req, res, next) => {
    try {
        const payment = await Payment.findById(req.params.id);
        res.status(200).json(payment);
    } catch (err) {
        next(err);
    }
};


// Delete Salary
const deletePayment = async (req, res, next) => {
    try {
        const deletedPayment = await Payment.findByIdAndDelete(req.params.id);
        res.status(200).json("Payment Has Been Deleted");
    } catch (err) {
        next(err);
    }
};

// Update Salary
const updatePayment = async (req, res, next) => {
    try {
    const updatedPayment = await Payment.findByIdAndUpdate(req.params.id, {$set: req.body},{

        PaymentID: req.body.PaymentID,
        BidID: req.body.ListingID,
        BuyerID:  req.body.UserID,
        SellerID:  req.body.UserID,
        paymentAmount: req.body.paymentAmount,
        paymentMethod:  req.body.paymentMethod,
        paymentDate: req.body.paymentdate,
        paymentStatus: req.body.paymentStatus,
        updatedAt : Date.now()
    })
    
    res.redirect(`/api/payment`)


    } catch (err) {
        next(err)
    }
    
}

module.exports = {
    createPayment,
    deletePayment,
    updatePayment,
    getPayments,
    getPayment,
};