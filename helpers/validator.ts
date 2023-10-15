import { body } from "express-validator";

export const REGISTRATION_VALIDATOR = [
  body("name").trim().notEmpty(),
  body("email")
    .trim()
    .notEmpty()
    .isEmail()
    .bail()
    .withMessage("Provide a valid email"),
  body("password").trim().notEmpty().isLength({ min: 8 }),
  body("confirm_password")
    .trim()
    .notEmpty()
    .custom((value, { req }) => {
      if (value !== req.body.password)
        throw new Error("Password confirmation does not match password");
      return true;
    }),
];
