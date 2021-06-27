const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const Profile = require("../../models/Profile");
const { check, validationResult } = require("express-validator");
const checkObjectId = require("../../middleware/checkObjectId");
const stringCapitalizeName = require("string-capitalize-name");

// @route    POST api/profile
// @desc     Create a new profile
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

    try {
      let newProfile = new Profile({
        firstName: sanitizeName(req.body.firstName),
        lastName: sanitizeName(req.body.lastName),
        birthday: req.body.birthday,
        user: req.user.id,
        isSelf: req.body.isSelf,
        isActive: req.body.isActive
      });

      const profile = await newProfile.save();
      res.json(profile);
    } catch (err) {
      console.error(err.message);
      return res.status(500).send("Server Error for Creating Profile");
    }
  }
);

// @route    PUT api/profile
// @desc     Update profile
// @access   Private
router.put(
  "/:id",
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

    try {
      let updatedProfile = {
        firstName: sanitizeName(req.body.firstName),
        lastName: sanitizeName(req.body.lastName),
        birthday: req.body.birthday,
        user: req.user.id,
        isSelf: req.body.isSelf,
        isActive: req.body.isActive
      };

      const profile = await Profile.findOneAndUpdate(
        { _id: req.params.id },
        { $set: updatedProfile },
        {
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

// @route    GET api/profile/user/:user_id
// @desc     Get all profiles by user id
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
      return res
        .status(500)
        .json({ msg: "Server Error for Getting User Profiles" });
    }
  }
);

// @route    GET api/profile/:id
// @desc     Get one profile by profile id
// @access   Private
router.get("/:id", auth, async (req, res) => {
  try {
    const profile = await Profile.findById(req.params.id);

    if (!profile) {
      return res.status(404).json({ msg: "Profile not found" });
    }

    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error for Getting One Profile");
  }
});

module.exports = router;

// Minor sanitizing to be invoked before reaching the database
sanitizeName = (name) => {
  return stringCapitalizeName(name);
};
