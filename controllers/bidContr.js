const Bid = require("../models/bidModel.js");
const uuid = require('uuid');

//  Create Position
const createBid = async (req, res, next) => {
    const newBid = new Bid(req.body);
    console.log(req.body);
    newBid.BidID = req.body.BidID ;
    newBid.BidderID = req.body.BidderID;
    newBid.ListingID =  req.body.ListingID;
    newBid.BidAmount = req.body.BidAmount;
    newBid.BidDate = req.body.BidDate;
    try {
        await Bid.create(newBid);
        res.redirect('bid');

    } catch (error) {
        console.log(error)
    }

};

// Get All Position
const getBids = async (req, res, next) => {
    try {
        const bids = await Bid.find()
            .populate({
            path: "BidderID",
            localField: "BidderID",
            foreignField: "UserID"
            })
            .populate({
                path: "ListingID",
                localField: "ListingID",
                foreignField: "ListingID"
            });

        res.status(200);
        res.render("bid", { bidList: bids }); // Render a view with bidlist

    } catch (err) {
        next(err);
    }
};


// Get Position
const getBid = async (req, res, next) => {
    try {
        const bid = await Bid.findById(req.params.id);
        res.status(200).json(bid);
    } catch (err) {
        next(err);
    }
};


// Delete Position
const deleteBid = async (req, res, next) => {
    try {
        const deletedBid = await Bid.findByIdAndDelete(req.params.id);
        res.status(200).json(" Bid Has Been Deleted");
    } catch (err) {
        next(err);
    }
};

// Update Position
const updateBid = async (req, res, next) => {
    try {
    const updatedBid = await Bid.findByIdAndUpdate(req.params.id, {$set: req.body},{

        BidID: req.body.BidID,
        BidderId: req.body.BidderId,
        ListingID: req.body.ListingID,
        BidAmount: req.body.BidAmount,
        BidDate: req.body.BidDate,
        updatedAt : Date.now()

    })
    
    res.redirect(`/api/bid`)


    } catch (err) {
        next(err)
    }
    
}

module.exports = {
    createBid,
    deleteBid,
    updateBid,
    getBids,
    getBid,
};