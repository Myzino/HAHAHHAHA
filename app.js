    const express = require('express');
    const cors = require('cors');
    const mongoose = require('mongoose');
    const path = require('path');
    const methodOverride = require('method-override')

    const userRoute = require('./routes/userRoute.js')
    const auctionRoute = require('./routes/auctionRoute.js')
    const bidRoute = require('./routes/bidRoute.js');
    const paymentRoute = require('./routes/paymentRoute.js');
    const shippingRoute = require('./routes/shippingRoute.js'); // Update the import to "shippingRoute"
    const notifRoute = require('./routes/notifRoute.js')

    const app = express();
    app.use(cors());

    const PORT = process.env.PORT || 4000

    // MIDDLEWARES
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
    app.use(methodOverride('_method'));
    app.use("/api/user", userRoute);
    app.use("/api/auction", auctionRoute);
    app.use("/api/bid", bidRoute);
    app.use("/api/payment", paymentRoute);
    app.use("/api/shipping", shippingRoute); // Use the correct variable name
    app.use("/api/notification", notifRoute);





    app.use((err,req,res,next) =>{
        const errorStatus = err.status || 500
        const errorMessage = err.message || "Something went wrong!"
        return res.status(errorStatus).json({
            success: false,
            status: errorStatus,
            message: errorMessage,
            stack: err.stack 
        })
    })


    mongoose.connect('mongodb://127.0.0.1:27017/Online-Auction-System')
    .then(() => {
        console.log('Connected to MongoDB Local')
        app.listen(PORT,() => {
            console.log(`Server is running on ${PORT}`);
        });
    })
    .catch((err) => {
    console.log('Error connecting to MongoDB:', err)
    process.exit(1)
    })

    //EJS
    app.set('view engine', 'ejs')
    app.set('views', path.join(__dirname, 'views'));
    app.use(express.static(path.join(__dirname, 'public')))

