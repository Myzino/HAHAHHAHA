const Notification = require("../models/notifModel.js");


// Get All Notifications
const getNotifications = async (req, res, next) => {
    try {
        const Notifications = await Notification.find().populate({
            path: "UserID",
            model: "User",
            select: "UserID UserName", // Only select the fields you need
        });
        res.status(200);
        res.render("notification", { NotificationList: Notifications });

    } catch (err) {
        next(err);
    }
};



// Get Notification
const getNotification = async (req, res, next) => {
    try {
        const notification = await Notification.findById(req.params.id);
        res.status(200)
        res.render('notification')
    } catch (err) {
        next(err);
    }
};


// Delete Notification
const deleteNotification = async (req, res, next) => {
    try {
        const deletedNotification = await Notification.findByIdAndDelete(req.params.id);
        res.status(200).json("Notification Has Been Deleted");
    } catch (err) {
        next(err);
    }
};

const updateNotification = async (req, res, next) => {
    try {
        // Assuming you want to set the Status to 'read' when the VIEW button is clicked
        const updatedNotification = await Notification.findByIdAndUpdate(req.params.id, {
            $set: { Status: 'read' }, // Set Status to 'read'
        });

        if (!updatedNotification) {
            return res.status(404).json({ message: 'Notification not found' });
        }

        res.status(200).json({ message: 'Notification status updated to read' });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    deleteNotification,
    updateNotification,
    getNotifications,
    getNotification,
};