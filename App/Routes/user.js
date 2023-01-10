const router = require("express").Router();

//*import the user controller
const { login, signup } = require("../Controllers/UserController");

//* Login Route
router.post("/login", login);
//* Sign Up Route
router.post("/signup", signup);

module.exports = router;
