import express from "express";
import User from "../controllers/User";
import UserAccountBank from "../controllers/UserAccountBank";
import UserAddress from "../controllers/UserAddress";
import Password from "../controllers/Password";
import Session from "../controllers/Session";
import authMiddleware from "../middlewares/authMiddleware";

const router = express.Router();

router.post("/register", User.create);

router.post("/session", Session.create);

router.put("/user/update", authMiddleware, User.update);

router.patch("/password/change", authMiddleware, Password.update);

router.get("/user/:id", authMiddleware, User.view);

router.get("/user/accountbank/:id", authMiddleware, UserAccountBank.view);

router.post("/user/accountbank", authMiddleware, UserAccountBank.create);

router.put("/user/accountbank/:id", authMiddleware, UserAccountBank.update);

router.get("/user/address/:id", authMiddleware, UserAddress.view);

router.post("/user/address", authMiddleware, UserAddress.create);

router.put("/user/address/:id", authMiddleware, UserAddress.update);

export default router;
