import express from "express";
import { getInvoices, createInvoice } from "../controllers/home.js";

const router = express.Router();

router.get("/", getInvoices);
router.post("/", createInvoice);

export default router