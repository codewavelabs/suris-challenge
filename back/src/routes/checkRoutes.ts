import { Router } from "express";
import { checkPalindrome } from "../controllers/checkController";

const router = Router();

router.post("/check-palindrome", checkPalindrome);

export default router;
