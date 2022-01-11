import mongoose from "mongoose"
import InvoiceModel from "../models/invoiceModel.js"

export const getInvoices = async (req, res) => {
    try {
        const invoiceModel = await InvoiceModel.find();
        console.log(invoiceModel);

        res.status(200).json(invoiceModel)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const createInvoice = async (req, res) => {
    const body = req.body;

    const createInvoice = new InvoiceModel(body);

    try {
        await createInvoice.save();

        res.status(201).json(createInvoice)
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}