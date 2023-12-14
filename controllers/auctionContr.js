const Auction = require("../models/auctionModel.js");
const Notification = require("../models/notifModel.js")
const uuid = require('uuid');

//  Create Department
const createAuction = async (req, res, next) => {

    const newAuction = new Auction(req.body);   
    console.log(req.body);
    newAuction.ListingID = req.body.ListingID;
    newAuction.SellerID = req.body.SellerID;
    newAuction.ListingTitle =  req.body.ListingTitle;
    newAuction.ListingDescription = req.body.ListingDescription;
    newAuction.StartingPrice = req.body.StartingPrice;
    newAuction.CurrentBidPrice = req.body.CurrentBidPrice;
    newAuction.MinimumBidIncrement = req.body.MinimumBidIncrement;
    newAuction.AuctionStart = req.body.AuctionStart;
    newAuction.AuctionEnd = req.body.AuctionEnd;
    newAuction.ListingStatus = req.body.ListingStatus;

    const newNotification = new Notification(req.body);
    console.log(req.body);
    newNotification.NotificationID = uuid.v4();
    newNotification.UserID = req.body.UserID;
    newNotification.NotificationType = req.body.ListingTitle;
    newNotification.Content = "Status "+ req.body.ListingStatus;
    newNotification.TimesStamp = new Date();
    try {
        await Notification.create(newNotification);
        await Auction.create(newAuction);
        res.redirect('auction');

    } catch (error) {
        console.log(error)
    }

};

// Get All Departments
const getAuctions = async (req, res, next) => {
    try{
        const auctions = await Auction.find().populate({
            path: "SellerID",
            localField: "SellerID",
            foreignField: "UserID"
            // select: "FirstName EmployeeID",
        });
        res.status(200);
        res.render("auction", { auctionList: auctions });

    }
    catch(err){
        next(err)
    }
};

// Get Department

// Delete Employee
const deleteAuction = async (req, res, next) => {
    try {
        const deletedAuction = await Auction.findByIdAndDelete(req.params.id);
        res.status(200).json("Auction Has Been Deleted");
    } catch (err) {
        next(err);
    }
};

// Update Department
const updateAuctionAndCreateNotification = async (req, res, next) => {
    // Extract the data from the request body
    const {
        ListingID,
        SellerID,
        ListingTitle,
        ListingDescription,
        StartingPrice,
        CurrentBidPrice,
        MinimumBidIncrement,
        AuctionStart,
        AuctionEnd,
        ListingStatus,
        NotificationType,
        Content,
    } = req.body;

    try {
        // Update the Leave Request
        const updatedAuction = await Auction.findByIdAndUpdate(req.params.id, {
            $set: {
                ListingID,
                SellerID,
                ListingTitle,
                ListingDescription,
                StartingPrice,
                CurrentBidPrice,
                MinimumBidIncrement,
                AuctionStart,
                AuctionEnd,
                ListingStatus,
                updatedAt: Date.now(),
            },
        });

        // Create a new Notification
        const newNotification = new Notification;
        console.log(req.body);
        newNotification.NotificationID = uuid.v4();
        newNotification.UserID = req.body.UserID;
        newNotification.NotificationType = req.body.ListingTitle;
        newNotification.Content ="Status: "+ req.body.ListingStatus;
        newNotification.TimesStamp = new Date();

        await newNotification.save(); // Save the new Notification

        res.redirect('/api/auction');
    } catch (err) {
        next(err);
    }
};


module.exports = {
    createAuction,
    deleteAuction,
    updateAuctionAndCreateNotification,
    getAuctions,
};