import express from "express";
import { createUser } from "../model/userModel";
import { hashPassword } from "../utility/bcryptHelper";
import {
  buildErrorResponse,
  buildSuccessResponse,
} from "../utility/responseHelper";

const userRouter = express.Router();

// create user | Signup Endpoint
userRouter.post("/", async (req, res) => {
  try {
    const { password } = req.body;

    const hashedPassword = hashPassword(password);
    // Query to db
    const result = await createUser({ ...req.body, password: hashedPassword });

    result?._id
      ? buildSuccessResponse(res, result, "user created successfully!!")
      : buildErrorResponse(res, "could not create user!!");
  } catch (error) {
    if (error.code === 11000) {
      error.message = "User with this email already exists!!";
    }
  }
});
