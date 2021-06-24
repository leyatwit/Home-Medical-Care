const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const Profile = require("../../models/Profile");
const User = require("../../models/User");
const { check, validationResult } = require("express-validator");
const checkObjectId = require("../../middleware/checkObjectId");

// @route    GET api/profile/me
// @desc     Get current user's profile
// @access   Private
router.get("/me", auth, async (req, res) => {
  try {
    const profile = await Profile.find({ user: req.user.id }).populate("user", [
      "email",
    ]);

    if (!profile) {
      return res.status(400).json({ msg: " no profile for this user" });
    }
    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route    GET api/profile
// @desc     Create or update user profile
// @access   Private
router.post(
  "/",
  auth,
  check("firstName", "First name is required").notEmpty(),
  check(
    "isSelf",
    "Please choose whether you are the primary user or not"
  ).notEmpty(),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // destrcuture the request
    // make sure field was added before submitting to the db
    const { firstName, lastName, birthday, isSelf, isActive } = req.body;

    // build profile object
    const profileFields = {};
    profileFields.user = req.user.id;
    if (firstName) profileFields.firstName = firstName;
    if (lastName) profileFields.lastName = lastName;
    if (birthday) profileFields.birthday = birthday;
    if (isSelf) profileFields.isSelf = isSelf;
    if (isActive) profileFields.isActive = isActive;

    try {
      // Using upsert option (creates new doc if no match is found)
      let profile = await Profile.findOneAndUpdate(
        { user: req.user.id },
        { $set: profileFields },
        {
          new: true,
          upsert: true,
          setDefaultsOnInsert: true,
          useFindAndModify: false,
        }
      );
      return res.json(profile);
    } catch (err) {
      console.error(err.message);
      return res.status(500).send("Server Error for updating profile");
    }
  }
);

// @route    GET api/profile
// @desc     Get all profiles
// @access   Public
router.get("/", async (req, res) => {
  try {
    const profiles = await Profile.find().populate("user", ["email"]);
    res.json(profiles);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error for Getting all profiles");
  }
});

// @route    GET api/profile/user/:user_id
// @desc     Get all profiles under same user by userID
// @access   Public
router.get(
  "/user/:user_id",
  checkObjectId("user_id"),
  async ({ params: { user_id } }, res) => {
    try {
      const profile = await Profile.find({
        user: user_id,
      }).populate("user", ["email"]);

      if (!profile) return res.status(400).json({ msg: "Profile not found" });

      return res.json(profile);
    } catch (err) {
      console.error(err.message);
      return res.status(500).json({ msg: "Server error" });
    }
  }
);

module.exports = router;
