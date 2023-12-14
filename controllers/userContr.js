const User = require("../models/userModel.js");
const bcrypt = require('bcrypt');

//  Create User
const createUser = async (req, res, next) => {
    try {
      const newUser = new User();
  
      // Populate user object with data from the request
      newUser.UserID = req.body.UserID;
      newUser.UserName = req.body.UserName;
      newUser.Email = req.body.Email;
      newUser.FirstName = req.body.FirstName;
      newUser.LastName = req.body.LastName;
      newUser.ContactInformation = req.body.ContactInformation;
      newUser.BillingInformation = req.body.BillingInformation;
  
      // Hash and salt the password before storing it
      const saltRounds = 10; // You can adjust the number of salt rounds as needed
      const hashedPassword = await bcrypt.hash(req.body.Password, saltRounds);
  
      newUser.Password = hashedPassword;
  
      // Create the user in the database
      await User.create(newUser);
      res.redirect('user');
    } catch (error) {
      console.log(error);
    }
  };



// Get All Users
const getUsers = async (req, res, next) => {
    try {
        const users = await User.find();
        res.status(200);
        res.render("index", { userList: users });
      } catch (err) {
        next(err);
       }
};


// Get Employee
const getUser = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id);
        res.status(200).json(user);
    } catch (err) {
        next(err);
    }
};

 
// Delete Employee
const deleteUser = async (req, res, next) => {
    try {
        const deleteUser = await User.findByIdAndDelete(req.params.id);
        res.status(200).json(deleteUser.FirstName + " User Has Been Deleted");
    } catch (err) {
        next(err);
    }
};

// Update Department
const updateUser = async (req, res, next) => {
    try {
        const updatedUserData = {
            UserID: req.body.UserID,
            UserName: req.body.UserName,
            Email: req.body.Email,
            Password: req.body.Password,
            FirstName: req.body.FirstName,
            LastName: req.body.LastName,
            ContactInformation: req.body.ContactInformation,
            BillingInformation: req.body.BillingInformation,
        };

        // Check if a new photo has been uploaded
        // if (req.file) {
        //     updatedUserData.EPhoto = req.file.filename;
        // }

        const updatedUser = await User.findByIdAndUpdate(req.params.id, updatedUserData, {
            new: true, // To get the updated document
        });

        res.redirect(`/api/user`);
    } catch (err) {
        next(err);
    }
};



module.exports = {
    createUser,
    updateUser,
    deleteUser,
    getUsers,
    getUser
};