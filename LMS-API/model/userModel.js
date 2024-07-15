import userSchema from "../schema/userSchema.js";

// Create user
export const createUser = (userObj) => {
  return userSchema(userObj).save();
};

// find user by email
export const findUserByEmail = (email) => {
  return userSchema.findOne({ email });
};

// update users refresh token
export const updateOneAndUpdate = (email, refreshJWT) => {
  return userSchema.findOneAndUpdate({ email }, { refreshJWT });
};
