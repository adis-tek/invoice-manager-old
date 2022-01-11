import mongoose from "mongoose";

const invoiceSchema = mongoose.Schema({
        hashtag: Number,
        billFromStreetAddress: String,
        billFromCity: String,
        billFromPostalCode: Number,
        billFromCountry: String,
        clientsName: String,
        clientsEmail: String,
        billToStreetAddress: String,
        billToCity: String,
        billToPostalCode: Number,
        billToCountry: String,
        invoiceDate: String,
        paymentTerms: String,
        projectDescription: String,
        itemName: String,
        quantity: Number,
        price: Number,
})

const InvoiceModel = mongoose.model("InvoiceModel", invoiceSchema)

export default InvoiceModel