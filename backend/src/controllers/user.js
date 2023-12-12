const User = require("../models/user");

exports.signup = async (req, res) => {
  try {
    let newUser = req.body;

    // Find if user already exist;
    let user = await User.findOne({ email: newUser.email });
    if (user) return res.status(400).send({ message: "User Already Exists" });

    await User.create(newUser);
    return res.status(201).send({ message: "User Created Successfully" });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    // Find the user based on the provided email
    const user = await User.findOne({ email });

    if (!user || user.password !== password) {
      return res.status(404).send({ message: "Invalid Credentials" });
    }

    // If user found and password matches, send success response
    return res.status(200).send({ message: "User Logged In" });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};
