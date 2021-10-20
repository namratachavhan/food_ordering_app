// Controller Imports
const userController = require("../controllers").user;
const { body } = require("express-validator");
const { checkDulicateEmail, checkConfirmPassword } = require("../middlewares/validate")
const { uploadImage } = require("../services/upload.service")
const passport = require("passport");


module.exports = (app) => {
    // Register using email
    app.get("/api/v1/register", userController.getRegisterPage)
    app.post("/api/v1/register", [body("firstName").trim().isString().notEmpty().withMessage("Name is required").isLength({ min: 3 }).withMessage('wrong firstname length'), body("lastName").trim().notEmpty().withMessage("Name is required").isLength({ min: 3 }).withMessage('wrong lastname length'), body("email").trim().isLength({ min: 1 }).withMessage("Email must be specified.").isEmail().withMessage({ message: "Not an email", }),  checkDulicateEmail,], userController.createUser);

    // Rendering login page and logout route
    app.get("/api/v1/login", userController.getLoginPage)
    app.get("/api/v1/logout", userController.logoutUser);

    // Local auth with passport
    app.post("/api/v1/local/login", passport.authenticate('local', { successRedirect: "/api/v1/local/success", failureRedirect: "/api/v1/local/failure" }));
    app.get("/api/v1/local/success", userController.localAuthSuccess);
    app.get("/api/v1/local/failure", userController.localAuthFailure);

    // Google auth with passport
    app.get("/api/v1/google/login", passport.authenticate('google', { scope: ['email', 'profile'] }));
    app.get("/api/v1/google/callback", passport.authenticate('google', { successRedirect: "/api/v1/google/success", failureRedirect: "/api/v1/google/failure" }));
    app.get("/api/v1/google/success", userController.googleAuthSuccess);
    app.get("/api/v1/google/failure", userController.googleAuthFailure);

    // facebook auth with passport
    app.get("/api/v1/facebook/login", passport.authenticate('facebook', { scope: ['email', 'public_profile'] }));
    app.get("/api/v1/facebook/callback", passport.authenticate('facebook', { successRedirect: "/api/v1/facebook/success", failureRedirect: "/api/v1/facebook/failure" }));
    app.get("/api/v1/facebook/success", userController.facebookAuthSuccess);
    app.get("/api/v1/facebook/failure", userController.facebookAuthFailure);

    // Upload profile image
    app.post("/api/v1/profileImage/:userId", uploadImage.single("image"), userController.addImage)

    // Get user by their ID
    app.get("/api/v1/user/:id", userController.getUsersById);

    app.get("/api/v1/dashboard", userController.dashboard);
    app.delete("/api/v1/deleteUser/:id", userController.deleteUser);
    app.put("/api/v1/updateUser/:id", userController.UpdateUser);
    app.get("/api/v1/verifyUser", userController.verifyUser);
    app.get("/api/v1/getUserByAddress", userController.getUsersByAddress);
    app.patch("/api/v1/userPartialUpdate/:id", userController.userPartialUpdate);
    app.post("/api/v1/forgetPassword", [body("email").trim().isEmail().withMessage({ message: "Not an email", })], userController.forgetPassword);
    app.post("/api/v1/resetPassword/:userId", [body("password").trim().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,20}$/).withMessage("Password must be contain one capital letter,one special charecter ,Number and Should be minimum 8 character long  "), checkConfirmPassword], userController.resetPassword);
    app.get("/api/v1/verifyUserToken", userController.verifyUserToken);

    //to update delivery address
    app.post("/api/v1/updatedeliveryaddress/:userId", userController.updateUserInfo)

    //to login with mobile and otp
    app.post("/api/v1/loginwithotp",userController.loginWithOtp)
    app.post("/api/v1/verifymobileotp",userController.verifyMobileOtp)
};

