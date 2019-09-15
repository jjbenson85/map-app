const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

// set up the passwordConfirmation virtual
userSchema
  .virtual("passwordConfirmation")
  .set(function setPasswordConfirmation(passwordConfirmation) {
    // store the password on the user model temporarily so we can access it in our pre-validate hook
    // `this` refers to the user object
    console.log("virtual(passwordConfirmation)");
    this._passwordConfirmation = passwordConfirmation;
  });

// set up a pre-validate hook
userSchema.pre("validate", function checkPassword(next) {
  console.log("pre hook");
  // check if the password has been modified and if so whether the password and the passwordConfirmation match
  // if not invalidate the passwordConfirmation, so that the validations fail
  if (
    this.isModified("password") &&
    this._passwordConfirmation !== this.password
  )
    this.invalidate("passwordConfirmation", "does not match");

  // otherwise continue to the next step (validation)
  next();
});

userSchema.pre("save", function hashPassword(next) {
  // if the password has been modified, it needs to be hashed
  if (this.isModified("password")) {
    // hash the password with bcrypt and store the hashed password on the user object
    this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(8));
  }

  // continue to the next step (save)
  next();
});

//Validate password method, checks wether password entered matches hash stored in database
userSchema.methods.validatePassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};

//Remove password, __v and id tag when returning JSON
userSchema.set("toJSON", {
  virtuals: true,
  transform(doc, json) {
    delete json.__v;
    delete json.id;
    delete json.password;
    return json;
  }
});

module.exports = mongoose.model("User", userSchema);
