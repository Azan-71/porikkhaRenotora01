import mongoose, { Schema, model, models } from "mongoose";

const UserSchema = new Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        passwordHash: { type: String, required: true },
        role: {
            type: String,
            enum: ["tenant", "owner", "admin"],
            default: "tenant"
        },
    },
    { timestamps: true }
);

const User = models.User || model("User", UserSchema);
export default User;
